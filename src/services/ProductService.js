import { query, getDocs, limit, getDoc, doc } from 'firebase/firestore';
import { productsRef, db } from '../configs/firebase.config';

export default class ProductService {
  static async getAllProducts() {
    const products = [];
    const q = query(productsRef);
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    return products;
  }

  static async getProductsByLimit(lim = 8) {
    const products = [];
    const q = query(productsRef, limit(lim));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });
    return products;
  }

  static async getProductById(id) {
    const productIdRef = doc(db, 'products', id);
    const productSnap = await getDoc(productIdRef);
    return productSnap.data();
  }
}
