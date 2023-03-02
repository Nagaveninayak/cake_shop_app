import React from "react";
import { connect } from "react-redux";
import { cakeActionGenerator, icecreamActionsGenerator } from "../redux";

/** dynamically pass the state based on the props send in the app file */
function PropsItemContainer(props) {
    return (
        <div>
            <h3>Item - {props.item}</h3>
            <button onClick={props.itemDispatch}>Order Item</button>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    const itemProps = ownProps.cake ? state.cake.numberOfCakes : state.icecream.numberOfIcecreams;
    return {
        item: itemProps
    }
}

/** pass the dispatch depending upon condition of ownProps */
const mapDispatchToProps = (dispatch, ownProps) => {
    const itemDispatch = ownProps.cake ?
        () => { dispatch(cakeActionGenerator()) } :
        () => { dispatch(icecreamActionsGenerator()) }
    return {
        itemDispatch: itemDispatch,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PropsItemContainer);

/**
 * ?: If you want to pass only dispatch but not state to connect
 * ?: export default connect(null, mapDispatchToProps)(PropsItemContainer);
 */