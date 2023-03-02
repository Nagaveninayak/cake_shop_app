import React from "react";
import { connect } from "react-redux";
import { CONSTANT_TYPES } from "../redux/containerTypes";
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
    numberOfCakes: state.cake.numberOfCakes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    cakeActionGenerator: () => dispatch(cakeActionGenerator(CONSTANT_TYPES.CAKE_ORDERED))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
