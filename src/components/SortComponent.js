import React from "react";
import { connect } from "react-redux";
import { sortPrices } from "../actions/sortingAction";

class SortComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const { param, sortby, select } = e.target.dataset;
    this.props.sortPrices({ param, sortby, select } );
  }

  render() {
    const { sortingType } = this.props.sorting;
    const selected = sortingType[2];

    return (
      <div className="flex w-full py-4 px-4">
        <h2 className="font-bold text-black text-left mr-3">Sort</h2>
        <div className={selected == '1' ? 'flex mr-3 selected': 'flex mr-3 link'}  data-sortby="price" data-param="desc" data-select="1" onClick={this.handleClick}>
          Price High to Low
        </div>
        <div className={selected == '2' ? 'flex mr-3 selected': 'flex mr-3 link'}  data-sortby="price" data-param="asc" data-select="2"  onClick={this.handleClick}>
          Low to High
        </div>
        <div className={selected == '3' ? 'flex mr-3 selected': 'flex mr-3 link'}  data-sortby="discount" data-param="asc" data-select="3" onClick={this.handleClick}>
          Discount
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sorting: state.sort
  };
};

export default connect(
  mapStateToProps,
  { sortPrices }
)(SortComponent);
