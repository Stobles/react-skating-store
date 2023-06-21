import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBwB9jeOAMSPs_RuMNfFq6LRkncoyZ_p2M',
  authDomain: 'skating-store.firebaseapp.com',
  projectId: 'skating-store',
  storageBucket: 'skating-store.appspot.com',
  messagingSenderId: '416748387541',
  appId: '1:416748387541:web:31bb26b171db833423365c',
  measurementId: 'G-9PME4V9C4G',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const productsRef = collection(db, 'products');
export const blogRef = collection(db, 'blogs');
