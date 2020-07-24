import React, {Component} from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// LIFTING STATE UP //
class Details extends Component{
render(){
    return <h1>{this.props.details}</h1>
}
}
class LiftingStateButton extends Component{
    render(){
        return (
        <button style = {{color: this.props.active? 'red': 'blue'}} onClick={() => {this.props.clickHandler(this.props.id,this.props.name)}}>
            {this.props.name}
        </button>
        )
    }
}

class LiftingStateApp extends Component{
    constructor(props){
        super(props)
        this.state = {activeArray:[0,0,0,0], details:""}
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id,details){
        var arr = [0,0,0,0]
        arr[id] = 1
        this.setState({activeArray:arr,details:details})
        console.log(id,details)
    }
    render(){
        return (
            <div>
                <br></br>
                <LiftingStateButton id = {0} active = {this.state.activeArray[0]} clickHandler = {this.clickHandler} name="bob"/>
                <LiftingStateButton id = {1} active = {this.state.activeArray[1]} clickHandler = {this.clickHandler} name="joe"/>
                <LiftingStateButton id = {2} active = {this.state.activeArray[2]} clickHandler = {this.clickHandler} name="tree"/>
                <LiftingStateButton id = {3} active = {this.state.activeArray[3]} clickHandler = {this.clickHandler} name="four"/>
                <Details details = {this.state.details}/>
            </div>


        )
    }
}

export default LiftingStateApp;