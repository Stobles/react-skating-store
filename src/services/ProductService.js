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
  where,
  limitToLast,
} from "firebase/firestore";
import { productsRef, db } from "../configs/firebase.config";

export default class ProductService {
  static async getAll(lim, category = "") {
    const products = [];
    let q = query(productsRef, limit(lim), orderBy("name", "asc"));

    if (category) q = query(q, where("category", "==", category));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });

    let qCount = query(productsRef);

    if (category) qCount = query(qCount, where("category", "==", category));

    const productsCount = await getCountFromServer(qCount);
    return { products, count: productsCount.data().count };
  }

  static async getNext(lim, item, category = "") {
    const products = [];
    let q = query(productsRef, orderBy("name", "asc"));

    if (category) q = query(q, where("category", "==", category));

    q = query(q, startAfter(item.name), limit(lim));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });

    return products;
  }

  static async getPrev(lim, item, category = "") {
    const products = [];
    let q = query(productsRef, orderBy("name", "asc"));

    if (category) q = query(q, where("category", "==", category));

    q = query(q, endBefore(item.name), limitToLast(lim));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      products.push({ id: document.id, ...document.data() });
    });

    return products;
  }

  static async getById(id) {
    const productIdRef = doc(db, "products", id);
    const productSnap = await getDoc(productIdRef);
    return productSnap.data();
  }
}
