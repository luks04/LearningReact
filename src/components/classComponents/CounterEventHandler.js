import React, {Component} from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

// EVENT HANDLERS //
class CounterEventHandler extends Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        //binding is necessary to make `this` point to the correct object
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
      //increments the count of the state
        this.setState((prevState, props) => {
            return {count: prevState.count + 1}
        })
    }
    render(){
        //renders a button that displays the state count
        return (
            <div>
                <br></br>
                <Button onClick = {this.clickHandler} variant="outline-success">{this.state.count}</Button>
            </div>
        )
    }
}

export default CounterEventHandler;