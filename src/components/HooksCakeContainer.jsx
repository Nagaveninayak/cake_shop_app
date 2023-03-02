import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CONSTANT_TYPES } from "../redux/containerTypes";
import { cakeActionGenerator } from "../redux";

function HooksCakeContainer() {
    const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h3>(Hooks) Cake Numbers - {numberOfCakes}</h3>
            <button onClick={() => { dispatch(cakeActionGenerator(CONSTANT_TYPES.CAKE_ORDERED)) }}>Order Cake</button>
        </div>
    )
}

export default HooksCakeContainer;

/**
 * Idea is to use useselector 
 * useSelector is similar to the mapStateToProps which returns the states
 * useDispatch to dispatch an action
 * TODO USAGE: depends on the nesting of components
 */