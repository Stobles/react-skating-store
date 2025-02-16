import { useParams, useNavigate } from "react-router-dom";
import { useFetching } from "@hooks/useFetching";
import ProductService from "@services/ProductService";
import { BsArrowLeft } from "react-icons/bs";
import { useEffect, useState } from "react";
import Image from "@comp/UI/Image";
import Button from "@comp/UI/Button";
import Select from "react-select";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchAddToBasket } from "@thunks/fetchBasket";

import styles from "./Product.module.scss";

const sizeStylesSelect = {
  control: (style) => ({
    ...style,
    width: "220px",
    cursor: "pointer",
    outline: "none",
  }),
};

const Product = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { user } = useSelector((state) => state.auth);
  const [product, setProduct] = useState("");
  const [amount, setAmount] = useState(1);
  const [size, setSize] = useState("");
  const [sizeOptions, setSizeOptions] = useState([]);
  const [fetchProduct, isLoading, error] = useFetching(async (uid) => {
    const response = await ProductService.getById(uid);
    setProduct(response);
    if (response.sizes) setSizeOptions([...response.sizes]);
  });

  useEffect(() => {
    fetchProduct(id);
  }, []);

  const handleAddClick = () => {
    if (!product?.sizes) {
      const { date, features, ...productBasket } = product;
      productBasket.id = id;
      productBasket.amount = amount;
      dispatch(fetchAddToBasket(productBasket, user.id));
      toast.success("Товар добавлен в корзину");
    } else if (product?.sizes && size) {
      const { date, features, ...productBasket } = product;
      productBasket.id = id;
      productBasket.amount = amount;
      productBasket.size = size;
      dispatch(fetchAddToBasket(productBasket, user.id));
      toast.success("Товар добавлен в корзину");
    } else {
      toast.warning("Выберите размер");
    }
  };

  const handleBackClick = () => {
    navigate("/store");
  };

  if (error) {
    toast.error(error);
  }

  return (
    <div className={styles.Container}>
      <button onClick={handleBackClick} type="button" className={styles.Back}>
        <BsArrowLeft size={28} />
        НАЗАД
      </button>
      <div className={styles.Inner}>
        <div className={styles.ImageWrapper}>
          <Image
            className={styles.Image}
            src={`/images/products/${product?.picture}`}
          />
        </div>
        <div className={styles.Content}>
          <h1
            className={
              !isLoading ? styles.Title : `${styles.Title} ${styles.Plug}`
            }
          >
            {product?.name}
          </h1>
          <p
            className={
              !isLoading ? styles.Category : `${styles.Category} ${styles.Plug}`
            }
          >
            {product?.category}
          </p>
          {product?.sizes && (
            <div className={styles.Select}>
              <Select
                placeholder="Выбрать размер..."
                styles={sizeStylesSelect}
                options={sizeOptions}
                onChange={(choice) => setSize(choice.value)}
              />
            </div>
          )}
          <div className={styles.Prices}>
            <span
              className={
                !isLoading ? styles.New : `${styles.New} ${styles.Plug}`
              }
            >
              {product.sale
                ? product.price - product.price * (product.sale / 100)
                : product.price}{" "}
              &#8381;
            </span>
            {product?.sale && (
              <span
                className={
                  !isLoading ? styles.Old : `${styles.Old} ${styles.Plug}`
                }
              >
                {product?.price} &#8381;
              </span>
            )}
          </div>
          <Button onClick={handleAddClick}>Добавить в корзину</Button>
        </div>
      </div>
    </div>
  );
};
export default Product;
