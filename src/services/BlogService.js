import { query, orderBy, getDocs, getCountFromServer, collection } from 'firebase/firestore';
import { blogRef } from '../configs/firebase.config';

export default class BlogService {
  static async getAll() {
    const blogs = [];
    const q = query(blogRef, orderBy('title', 'asc'));

    const querySnapshot = await getDocs(q);
    console.log();
    querySnapshot.forEach((document) => {
      blogs.push({ id: document.id, ...document.data() });
    });

    const qCount = query(blogRef);

    console.log(blogs);

    const blogCount = await getCountFromServer(qCount);
    return { blogs, count: blogCount.data().count };
  }

  static async getById(id) {
    
  }
}
