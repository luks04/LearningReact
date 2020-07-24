import React, {Component} from '../../../node_modules/react';
import '../../assets/css/App.css';
import '../../assets/css/index.css';

// LIFE CYCLE METHODS //

class LifeCycleMethods extends Component{
    render(){
        return (
            <div>
                <h1>Mounting Phase Methods</h1>
                <h4>The mounting phase begins when an instance of a component is created and rendered into the DOM. The following lifecycle methods occur in the order they are listed:</h4>
                <ul>
                    <li>constructor(props) - called when the component is first initialized. This method is only called once.</li>
                    <li>componentWillMount() - called when a component is about to mount.</li>
                    <li>render() - called when a component is rendered.</li>
                    <li>componentDidMount() - called when a component has finished mounting. This is where network requests are usually made.</li>
                </ul>
                <h1>Updating Phase Methods</h1>
                <h4>The updating phase begins when a component's properties or state changes. The following lifecycle methods occur in the order they are listed:</h4>
                <ul>
                    <li>componentWillReceiveProps(nextProps) - called when a component has updated and is receiving new props.</li>
                    <li>shouldComponentUpdate(nextProps, nextState) - called after receiving props and is about to update. If this method returns false, componentWillUpdate(), render(), and componentDidUpdate() will not execute.</li>
                    <li>render() - called when a component is rerendered.</li>
                    <li>componentDidUpdate(prevProps, prevState) - called when a component has finished updating.</li>
                </ul>
                <h1>Unmounting Phase Methods</h1>
                <h4>The unmounting phase begins when a component is being removed from the DOM. The following life cycle method occurs during the unmounting phase:</h4>
                <ul>
                    <li>componentWillUnmount() - called immediately before a component unmounts. This is where any cleanups are made such as cancelling timers or network requests.</li>
                </ul>
            </div>
        )
    }
}

export default LifeCycleMethods;