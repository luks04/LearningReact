import React from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// PREVENTING RENDERING
// The output of a Functional Component can be prevented from rendering. 
function Feature(props){
    return (
        props.active && <h1>{props.message}</h1>
    )
}
function Feature2(props){
    if(props.active === false){
        return null
    }
    else{
        return <h1>{props.message}</h1>
    }
}

export default Feature;