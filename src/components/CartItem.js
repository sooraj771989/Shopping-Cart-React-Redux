import React from "react";
import { connect } from "react-redux";
import { updateCart, removeProductCart } from "../actions/cartAction";

class CartItem extends React.Component {
  handleOnClickUpdate = (id, operator, quantity) => {
    if (quantity === 1 && operator === "-") {
      this.props.updateCart(id, operator);
      this.props.removeProductCart(id);
    } else {
      this.props.updateCart(id, operator);
    }
  };
  handleOnClickRemove = id => {
    this.props.removeProductCart(id);
  };
  render() {
    const { id, name, price, discount, quantity, image } = this.props.cart;
    const peritem = discount * quantity;
    return (
      <div className="flex px-4 py-4 justify-between flex-wrap">
        <div className=" px-4">
          <img className="product-image " src={image} alt="product" />
        </div>
        <div className="flex flex-col w-full mb-4 lg:mb-0 text-left items-center lg:w-4/12 px-4">
          <p>{name}</p>
          <p>Price: <span className="line-through">{price}</span></p>
          <p>Discount: {discount}</p>
          <p>Quantity * {quantity}</p>
        </div>

        <div className="flex  mb-4 lg:mb-0  items-center w-full lg:w-3/12 px-4">
          {peritem}
        </div>
        <div className="button-container px-4 flex flex-row mb-4 lg:mb-0 items-center ">
          <div className="flex flex-row  items-center justify-between">
             <button
              className="quantity-btn"
              onClick={() => {
                this.handleOnClickUpdate(id, "-", quantity);
              }}
            >
              -
            </button>
            <div className="text-center ml-2 mr-2">{quantity}</div>
            <button
              className="quantity-btn"
              onClick={() => {
                this.handleOnClickUpdate(id, "+", quantity);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <button
            className="btn btn-danger"
            onClick={() => {
              this.handleOnClickRemove(id);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateCart, removeProductCart }
)(CartItem);
