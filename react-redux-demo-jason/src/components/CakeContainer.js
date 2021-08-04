import React from 'react';
import { connect } from "react-redux";
import {buyCake} from "../redux";

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    );
};

// can name it to anything you want to, but convention is 'mapStateToProps'
// this function gets the Redux state as a parameter and returns an
// object
// Step 01
const mapStateToProps = state  => {
    return {
        numOfCakes: state.numOfCakes
    }
}

// again, can name anything, but convention is 'mapDispatchToProps'
// This function gets the Redux dispatch method as a parameter
// and returns an object
// Step 02
const mapDispatchToProps = dispatch => {
    return {
        buyCake: () => dispatch(buyCake())
    }
}

// Step 03, connect mapStateToProps and mapDispatchToProps with our react component
// We use the Connect component which is a HOC (higher order component) from
// react-redux library (import statement)

// connect 'mapStateToProps', 'mapDispatchToProps' to 'CakeContainer using the
// connect HOC
export default connect(
    mapStateToProps,
    mapDispatchToProps
) (CakeContainer);
// export default CakeContainer;
