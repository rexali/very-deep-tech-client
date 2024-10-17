
export const ActionTypes = {
  GET_CARTS: 'GET_CARTS',
  POST_CART: 'POST_CART',
  GET_PRODUCTS: 'GET_PRODUCTS',
  POST_PRODUCT: "POST_PRODUCT",
};

export const getCarts = (cartsData: any) => ({
  type: ActionTypes.GET_CARTS,
  payload: cartsData,
});

export const postCart = (cartData: any) => ({
  type: ActionTypes.POST_PRODUCT,
  payload: cartData,
});

export const getProducts = (productData: any) => ({
  type: ActionTypes.GET_PRODUCTS,
  payload: productData,
});

export const postProduct = (productData: any) => ({
  type: ActionTypes.POST_PRODUCT,
  payload: productData,
});
