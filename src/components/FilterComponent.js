import React from "react";
import { connect } from "react-redux";
import { filterPrices } from "../actions/filteringAction";
import ReactSlider from "react-slider";
import styled from 'styled-components';


const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 25px;
`;

const StyledThumb = styled.div`
    height: 25px;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
`;

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props => props.index === 2 ? '#f00' : props.index === 1 ? '#0f0' : '#ddd'};
    border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

class FilterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [0, 100]
    };
   }

   
  render() {
    return (
      <div className="w-full py-4 px-4">
        <h2 className="flex font-bold text-black text-left mr-3">Filter</h2>

        <div className="mb-8 lg:mb-0 w-full">
        <StyledSlider
        className="slider"
    defaultValue={this.state.value}
    renderTrack={Track}
    renderThumb={Thumb}

    onChange={newVal => {
      this.setState({
        value: newVal
      });
      this.props.filterPrices(newVal);
    }}

/>

 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filtering: state.filter
  };
};

export default connect(
  mapStateToProps,
  { filterPrices }
)(FilterComponent);
