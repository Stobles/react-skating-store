import {
  query,
  getDoc,
  doc,
  setDoc,
} from 'firebase/firestore';
import { db } from '../configs/firebase.config';

export default class OrderService {
  static async getAll(id) {
    const basketUserRef = doc(db, 'basket', id);
    const q = query(basketUserRef);
    const querySnapshot = await getDoc(q);
    const res = querySnapshot.data();
    return res.products;
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
