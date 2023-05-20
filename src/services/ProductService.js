import {
  query,
  getDocs,
  limit,
  getDoc,
  getCountFromServer,
  doc,
  startAfter,
  orderBy,
  endBefore,
} from 'firebase/firestore';
import { productsRef, db } from '../configs/firebase.config';

export default class ProductService {
  static async getAll(lim) {
    const products = [];
    const q = query(productsRef, limit(lim), orderBy('name', 'asc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    const productsCount = await getCountFromServer(productsRef);
    return { products, count: productsCount.data().count };
  }

  static async getNext(lim, item) {
    const products = [];
    const q = query(
      productsRef,
      limit(lim),
      orderBy('name', 'asc'),
      startAfter(item.name),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    return products;
  }

  static async getPrev(lim, item) {
    const products = [];
    const q = query(
      productsRef,
      limit(lim),
      orderBy('name', 'asc'),
      endBefore(item),
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    return products;
  }

  static async getById(id) {
    const productIdRef = doc(db, 'products', id);
    const productSnap = await getDoc(productIdRef);
    return productSnap.data();
  }
}
