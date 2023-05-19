import { useMemo } from "react";

export const useSortedPosts = (products, sort) => {
  const sortedProducts = useMemo(() => {
    if (sort) {
      return [...products].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return products;
  }, [sort, products]);

  return sortedProducts;
};

export const usePosts = (products, category, sort) => {
  const sortedProducts = useSortedPosts(products, sort);
  const sortedAndFilteredProducts = useMemo(() => sortedProducts.filter((product) => product.category.toLowerCase().includes(category.toLowerCase())), [category, sortedProducts]);

  return sortedAndFilteredProducts;
};
