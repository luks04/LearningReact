import React, {Component} from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// STATE //

class Counter extends Component{
    // Constructor(props)
    constructor(props){
        super(props)
        //initial state set up
        this.state = {value: 0}
    }
    componentDidMount(){
        //Updating state
        this.setState({value: this.state.value + 1})
        // Now if they want to do like this and do something with the future
        this.setState({value: this.state.value + 1}, () => {
            console.log(this.state.value)
        })
        // If you wanted to do something with a previous state value and then you have to do it in a special way.
        this.setState((prevState, props) => {
            return {value: prevState.value + 1}
        })
        this.setState((prevState, props) => {
            return {value: prevState.value + 1}
        })
        this.setState((prevState, props) => {
            return {value: prevState.value + 1}
        })
        // Never mutate the state directly.
    }
    render(){
        return (
            <div>
                <h1>State - Estado</h1>
                <h2>Value:{this.state.value}</h2>
            </div>
        )
    }
}

export default Counter;