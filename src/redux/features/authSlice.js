import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  googleToken: null,
  user: null,
  basket: [],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserGoogleSuccess: (state, action) => {
      state.googleToken = action.payload.token;
      state.user = action.payload.user;
    },
    setUserSuccess: (state, action) => {
      state.googleToken = null;
      state.user = action.payload;
    },
    setLogout: (state) => {
      state.googleToken = null;
      state.user = null;
      state.basket = null;
    },
    setBasket: (state, action) => {
      state.basket = action.payload;
    },
    setBasketProduct: (state, action) => {
      const product = action.payload;
      const isRepeat = state.basket.find((item) => item.id === product.id && item.size === product.size);
      if (isRepeat) {
        state.basket = state.basket.map((item) => {
          if (item.id === product.id && item.size === product.size) item.amount += 1;
          return item;
        });
        return;
      }
      state.basket.push(action.payload);
    },
    removeBasketProduct: (state, action) => {
      const id = action.payload;
      state.basket = state.basket.filter((item) => item.id !== id);
    },
    clearBasket: (state) => {
      state.basket = [];
    },
  },
});

export const {
  setUserSuccess,
  setUserGoogleSuccess,
  setUsername,
  setLogout,
  setBasket,
  setBasketProduct,
  clearBasket,
} = authSlice.actions;

export default authSlice.reducer;
