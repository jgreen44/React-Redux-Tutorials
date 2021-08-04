import React from 'react';
// useSelector is a hook that is extremely
// similar to the mapStateToProps function
// useDispatch is a hook to dispatch action creators
import { useSelector, useDispatch } from "react-redux";
import {buyCake} from "../redux";


const HooksCakeContainer = () => {
    // accepts a function as its parameter
    // this function is called a "Selector Function"
    // "Selector Function" receives the redux state as its argument
    // very similar to the mapStateToProps function
    const numOfCakes = useSelector(state => state.numOfCakes)
    // useDispatch returns a reference to the dispatch function from the redux store
    // the variable can be used to dispatch actions as needed
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
        </div>
    );
};

export default HooksCakeContainer;