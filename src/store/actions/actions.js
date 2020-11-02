// action: an arrow fn that returns an object
// Object contains a type (description) of action, and payload (data)

export const incrementCartCounter = () => {
  return {
    type: "INCREMENT_COUNTER",
  };
};

// This action receives a Product Object and requests dispatch to add it to cart
export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};
