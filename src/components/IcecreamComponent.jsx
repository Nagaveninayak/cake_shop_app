import React from "react";
import { connect } from "react-redux";
import { icecreamActionsGenerator } from "../redux";

function IcecreamComponent(props) {
    return (
        <div>
            <h3>Ice cream number - {props.state}</h3>
            <button onClick={props.icecreamActions}>Order ice cream</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        state: state.icecream.numberOfIcecreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        icecreamActions: () => { dispatch(icecreamActionsGenerator()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IcecreamComponent)