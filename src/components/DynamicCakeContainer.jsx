import { useState } from "react";
import { connect } from "react-redux";
import { CONSTANT_TYPES } from "../redux/containerTypes";
import { cakeActionGenerator } from "../redux";

function DynamicCakeContainer(props) {
    const [number, setNumber] = useState(1);
    return (
        <div>
            <h3>Cake Numbers - {props.numberOfCakes}</h3>
            <input value={number} onChange={(event) => setNumber(event.target.value)} />
            <button onClick={() => { props.cakeActionGenerator(number) }}>Order {number} Cake</button>
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
        cakeActionGenerator: (number) => dispatch(cakeActionGenerator(CONSTANT_TYPES.CAKE_ORDERED, number))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DynamicCakeContainer);
