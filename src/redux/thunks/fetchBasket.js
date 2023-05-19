import BasketService from '@services/BasketService';
import { setResponse } from '../features/errorSlice';
import { setBasket, setBasketProduct } from '../features/authSlice';

export const fetchAllBasket = (id) => async (dispatch) => {
  try {
    const basket = await BasketService.getAllBasket(id);
    console.log(basket);
    dispatch(setBasket(basket));
  } catch (e) {
    dispatch(setResponse({ status: e.code, message: e.message }));
  }
};

export const fetchAddToBasket = (product, id) => async (dispatch) => {
  try {
    await BasketService.addToBasket(product, id);
    dispatch(setBasketProduct(product));
  } catch (e) {
    dispatch(setResponse({ status: e.code, message: e.message }));
  }
};
