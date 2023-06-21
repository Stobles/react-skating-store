import {
  query,
  getDoc,
  doc,
  setDoc,
  getCountFromServer,
} from 'firebase/firestore';
import { db } from '../configs/firebase.config';

export default class OrderService {
  static async getAll(id) {
    const orders = [];
    const ordersUserRef = doc(db, 'orders', id);
    const q = query(ordersUserRef);
    console.log('lf');
    const querySnapshot = await getDoc(q);
    querySnapshot.forEach((document) => {
      orders.push({ id: document.id, ...document.data() });
    });
    console.log('lf');
    const res = querySnapshot.data();
    return { orders: res.orders };
  }

  static async addOrder(order, id) {
    const orderUserRef = doc(db, 'orders', id);
    const orderQuery = query(orderUserRef);
    const { orders } = (await getDoc(orderQuery)).data();
    orders.push(order);
    await setDoc(orderUserRef, {
      orders: [...orders],
    });
  }
}
