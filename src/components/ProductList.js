import React from "react";
import ProductItem from "./ProductItem";
import { connect } from "react-redux";
import { getProducts } from "../actions/productAction";
import SortComponent from "./SortComponent";
import NoResults from "../empty-states/NoResults";
import LoadingProducts from "../loaders/Products";
import FilterComponent from "./FilterComponent";
import Pagination from "./Pagination";

class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageOfItems: []
    };
  }
  onChangePage = pageOfItems => this.setState({ pageOfItems: pageOfItems });

  render() {
    let productsData;
    let { products } = this.props;
    const { sortingType } = this.props.sorting;
    const { filterBy } = this.props.filtering;
    let { value } = this.props.search;
    let x;

    function compareValues(key, order = "asc") {
      return function innerSort(a, b) {
        if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
          return 0;
        }

        const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
        const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

        let comparison = 0;
        if (varA > varB) {
          comparison = 1;
        } else if (varA < varB) {
          comparison = -1;
        }
        return order === "desc" ? comparison * -1 : comparison;
      };
    }

    function searchingFor(value) {
      return function(x) {
        return x.name.toLowerCase().includes(value.toLowerCase()) || !value;
      };
    }

    function filterProduct(min = 0, max = 100) {
      console.log(min, max);
      return function(x) {
        return x.price > min && x.price < max;
      };
    }

    productsData = this.props.products
      .filter(searchingFor(value))
      .filter(filterProduct(filterBy[0], filterBy[1]))
      .sort(compareValues(sortingType[0], sortingType[1]))
      .map(product => {
        return <ProductItem product={product} key={product.id} />;
      });

     
    let view;
    if (productsData.length <= 0 && !value) {
      view = <LoadingProducts />;
    } else if (productsData.length <= 0 && value) {
      view = <NoResults />;
    }  else if (productsData.length == 0) {
      view = <NoResults />;
    } else {
      view = <React.Fragment>{productsData}</React.Fragment>;
    }
    return (
      <div className="flex flex-wrap">
        <div className="w-full lg:w-3/12">
          {" "}
          <FilterComponent />
        </div>
        <div className="w-full lg:w-9/12">
          <div>
            <SortComponent />
          </div>
          <div className="flex flex-row flex-wrap">{view}</div>
        </div>
      </div>
    );
  }
}
const mapstateToProps = state => {
  return {
    products: state.product.products,
    sorting: state.sort,
    search: state.search,
    filtering: state.filter
  };
};
export default connect(mapstateToProps)(ProductList);
