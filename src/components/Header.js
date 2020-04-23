import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.png";
import cart from "../assets/img/cart.png";
import searchIcon from "../assets/img/search.png";
import { bindActionCreators } from "redux";
import { search } from "../actions/searchAction";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCart: false,
      mobileSearch: false,
      searchTerm: ""
    };
  }
  handleSubmit(e) {
    e.preventDefault();
  }

  handlerOnClick = () => {
    this.props.getCart();
  };

  searchSpace = event => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
    this.props.search(keyword);
  };

  handleSearch = e => {
    if (!this.state.mobileSearch) {
      this.setState({
        mobileSearch: true
      });
    } else {
      this.setState({
        mobileSearch: false
      });
    }
  };

  render() {
    const { totalQuantity } = this.props;
    return (
      <header className="px-4 bg-blue-700 py-2 w-full mx-auto">
        <div className="mx-auto flex items-center justify-between">
          <NavLink exact to="/">
            <div className="brand">
              <img className="logo-icon mr-2" src={logo} alt="Logo" />
            </div>
          </NavLink>
          <div className="search flex items-center">
            <form
              action="#"
              method="get"
              className={
                this.state.mobileSearch
                  ? "search-form active block"
                  : "search-form hidden"
              }
            >
              <input
                type="search"
                ref="searchBox"
                placeholder="Search"
                className="search-input"
                onChange={e => this.searchSpace(e)}
              />
              <button
                className="search-button"
                type="submit"
                onClick={this.handleSubmit.bind(this)}
              />
            </form>

            <div
              className="mobile-search"
              href="#"
              onClick={e => this.handleSearch(e)}
            >
              <img className="search-icon" src={searchIcon} alt="search" />
            </div>
            <Link  to="/cart">
              <div className="flex ">
                <img className="ml-3 cart-icon" src={cart} alt="cart" />

                {totalQuantity ? (
                  <span className="ml-3 cart-count">{totalQuantity}</span>
                ) : null}
              </div>
            </Link>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cart,
    totalQuantity: state.cart.cart.length,
    value: state.product.value
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);