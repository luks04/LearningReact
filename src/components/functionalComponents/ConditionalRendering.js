import React from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// CONDITIONAL RENDERING //
// The output of a Functional Component can be determined based on its properties.

function Feature(props){
    if (props.active === true){
        return <h1>This feature is active</h1>
    }
    else{
        return <h1>This feature is not active</h1>
    }
}

// This can also be accomplished using an inline conditional operator:
function Feature2(props){
    return <h1>This feature is {props.active ? "active" : "not active"}</h1>
}

export default Feature;