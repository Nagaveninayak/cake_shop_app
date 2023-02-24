import React from "react";
import { CONSTANT_TYPES } from "../redux/cake/cakeTypes";
import { connect } from "react-redux";
import { cakeActionGenerator } from "../redux";

function CakeComponent(props) {
  return (
    <div>
      <h3>Cake Numbers - {props.numberOfCakes}</h3>
      <button onClick={props.cakeActionGenerator}>Order Cake</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cakeActionGenerator: () => dispatch(cakeActionGenerator(CONSTANT_TYPES.CAKE_ORDERED))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
