import {
  query,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
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

  static async addOrder(products, id, name, email) {
    const orderUserRef = doc(db, 'orders', id);
    await setDoc(orderUserRef, {
      orders: [],
    });
    const order = {
      id: Date.now(),
      name,
      email,
      products: [...products],
    };
    await updateDoc(orderUserRef, {
      orders: arrayUnion(order),
    });
  }
}
