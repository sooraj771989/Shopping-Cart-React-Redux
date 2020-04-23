import * as types from "../actions/types";

const intialState = {
  cart: [],
  totalAmount: 0,
  totalQuantity: 0
};
export const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case types.GET_CART:
      return { ...state };
    case types.ADD_PRODUCT_CART: {
      const cart = [...state.cart, { ...action.payload, quantity: 1 }];
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }

    case types.UPDATE_CART: {
      const cart = state.cart.map(book =>
        book.id === action.payload.id
          ? (book = {
              ...book,
              quantity:
                action.payload.operator === "+"
                  ? book.quantity + 1
                  : book.quantity - 1
            })
          : book
      );
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }
    case types.REMOVE_PRODUCT_CART: {
      const cart = [...state.cart.filter(c => c.id !== action.payload)];
      return {
        ...state,
        cart,
        totalAmount: totals(cart).amount,
        totalQuantity: totals(cart).qty
      };
    }
    default:
      return state;
  }
};

const totals = cart => {
  const totalAmount = cart
    .map(cart => {
      return cart.discount * cart.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  const totalQuantity = cart
    .map(qty => {
      return qty.quantity;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return { amount: totalAmount.toFixed(2), qty: totalQuantity };
};
