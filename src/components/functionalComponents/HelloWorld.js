import React from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// FUNCTIONAL COMPONENTS //

function HelloWorld(props) {
    return <h1>Hello World: {props.message}</h1>
  }

export default HelloWorld;