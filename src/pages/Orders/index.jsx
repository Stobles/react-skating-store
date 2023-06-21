import { useEffect, useState } from 'react';
import { useFetching } from '@hooks/useFetching';
import styles from './Orders.module.scss';
import OrderService from '../../services/OrderService';
import { useSelector } from 'react-redux';

const OrderCard = ({ id, products}) => (
  <div className={styles.Card}>
    <div>
      <div className={styles.Heading}>
        <div className={styles.Num}>Заказ {id}</div>
        <div className={styles.Price}>2313 руб</div>
      </div>
      <button type='button' className={styles.Cancel}>
        Отменить заказ
      </button>
    </div>
    <div className={styles.Products}>
      {products.map(({picture}) => (
        <div>
          ssdfs
        </div>
      ))}
    </div>
  </div>
);

const Orders = () => {
  const { user } = useSelector((state) => state.auth);
  const [count, setCount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [fetchOrders, isLoading, error] = useFetching(
    async (id) => {
      const response = await OrderService.getAll(id);
      setOrders([...response.orders]);
      setCount(response.count);
    },
  );

  useEffect(() => {
    fetchOrders(user.id);
  }, []);

  return (
    <div>
      <div className={styles.Header}>
        <h1 className={styles.Title}>Заказы</h1>
        <div>Всего - {count}</div>
      </div>
      <div className={styles.Orders}>
        {orders.map(({ id, products }) => (
          <OrderCard id={id} products={products} />
        ))}
      </div>
    </div>
  );
};
export default Orders;
