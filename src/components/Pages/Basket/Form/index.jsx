import * as yup from 'yup';
import { Formik } from 'formik';
import Button from '@comp/UI/Button';

import * as emailjs from 'emailjs-com';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Loader from '@comp/UI/Loader';
import { useDispatch, useSelector } from 'react-redux';
import OrderService from '@services/OrderService';
import { fetchClearBasket } from '@thunks/fetchBasket';
import styles from './Form.module.scss';

const formSchema = yup.object().shape({
  name: yup.string().required('Введите значение'),
  email: yup.string().email('Неправильный E-mail').required('Введите значение'),
});

const initialValues = {
  name: '',
  email: '',
};

const Form = () => {
  const dispatch = useDispatch();
  const { user, basket } = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);
  const totalPrice = basket.reduce(
    (acc, current) => acc + Number(current.price) * current.amount,
    0,
  );
  const handleFormSubmit = (values, onSubmitProps) => {
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        values,
        import.meta.env.VITE_USER_ID,
      )
      .then(() => {
        setIsLoading(false);
        onSubmitProps.resetForm();
        const order = {
          id: Date.now(),
          name: values.name,
          email: values.email,
          products: [...basket],
        }
        OrderService.addOrder(order, user.id);
        dispatch(fetchClearBasket(user.id));
      })
      .catch((e) => {
        toast.error(e.text);
        setIsLoading(false);
      });
  };
  return (
    <div className={styles.FormWrapper}>
      <div className={styles.Loader}>
        <Loader isLoading={isLoading} />
      </div>
      <div className={styles.Total}>
        <span className={styles.Text}>Итого:</span>
        <span className={styles.Price}>{totalPrice} руб.</span>
      </div>
      <div className={styles.Products}>
        <span className={styles.Text}>Товары, {basket.length} шт.</span>
        <span className={styles.Price}>{totalPrice} руб.</span>
      </div>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={formSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form className={styles.Form} onSubmit={handleSubmit}>
            <div className={styles.InputWrapper}>
              <input
                id='name'
                type='text'
                placeholder='Имя'
                name='name'
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={styles.Input}
              />
              <span className={styles.Err}>
                {errors.name && touched.name && errors.name}
              </span>
            </div>

            <div className={styles.InputWrapper}>
              <input
                id='email'
                type='email'
                placeholder='Email'
                name='email'
                autoComplete='off'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={styles.Input}
              />
              <span className={styles.Err}>
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <Button isSubmit isFull isDisables={isLoading}>
              Заказать
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
