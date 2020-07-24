import React, {Component} from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// CLASS COMPONENTS //
// Class Components differ from Functional Components because they allow React Components to have life cycle methods and state. Class components have two instance properties, this.state and this.props, that represent the component's state and properties respectively.
class Welcome extends Component{
    render(){
        return <h1>Hello World! From a Class Component</h1>
    }
} 

export default Welcome;