import React from "react";
import { connect } from "react-redux";
import { addProductCart, updateCart } from "../actions/cartAction";

class ProductItem extends React.Component {
  handleOnclik = product => {
    if (this.props.cart.length > 0) {
      let id = product.id;

      let cartIndex = this.props.cart.findIndex(cart => {
        return cart.id === id;
      });
      if (cartIndex === -1) {
        this.props.addProductCart(product);
      } else {
        this.props.updateCart(id, "+");
      }
    } else {
      this.props.addProductCart(product);
    }
  };

  render() {
    const { name, category, price, discount, image } = this.props.product;
    return (
      <div className="product flex flex-col w-full md:w-4/12 mb-4 justify-center text-center">
        <div className="product-image flex mx-auto">
          <img className="flex" src={image} alt="products" />
        </div>
        <span className="text-center font-bold">{name}</span>

        <div className="text-center">
          <h3 >Price: <span className="line-through">{price}</span></h3>
          <h3>Discount: {discount}</h3>
          <p className="capitalize">{category}</p>
        </div>
        <div className="text-center product-action">
          <button
            className="btn btn-yellow mt-4"
            onClick={() => {
              this.handleOnclik(this.props.product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart.cart
  };
};
export default connect(
  mapStateToProps,
  { addProductCart, updateCart }
)(ProductItem);
