import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "../empty-states/EmptyCart";

class CartList extends React.Component {
  render() {
    const { totalAmount, totalQuantity } = this.props;
    const cartList = this.props.cart.map(cart => (
      <CartItem key={cart.id} cart={cart} />
    ));

    let view;
    if (totalQuantity <= 0) {
      view = <EmptyCart />;
    } else {
      view = <React.Fragment>{cartList}</React.Fragment>;
    }
    return (
      <div>
        <div>{view}</div>
        <div>
          {totalAmount > 0 ? (
            <div className="px-4 py-4 justify-end">
              <h3 className="w-full text-right font-bold">Total: {totalAmount}</h3>
              <div className="w-full text-right mt-8">
              <button className="btn btn-primary">Checkout</button>
            </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalAmount: state.cart.totalAmount,
    totalQuantity: state.cart.totalQuantity
  };
};
export default connect(mapStateToProps)(CartList);
