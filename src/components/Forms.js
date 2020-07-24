import React, { Component } from "../../node_modules/react";
import "../assets/css/App.css";
import "../assets/css/index.css";

// FORMS //
// Controlling Input fields
class ControlledInputField extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		return (
			<div>
				<br></br>
				<h2>Controlling Input fields</h2>
				<input
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<br></br>
			</div>
		);
	}
}
// Controlling Checkboxes
class ControlledCheckboxes extends Component {
	constructor(props) {
		super(props);
		this.state = { checked: false };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ checked: event.target.checked });
	}
	render() {
		return (
			<div>
				<br></br>
				<h2>Controlling Checkboxes</h2>
				<input
					type="checkbox"
					checked={this.state.checked}
					onChange={this.handleChange}
				/>
				<br></br>
				<br></br>
			</div>
		);
	}
}

// Controlling TextArea fields
class ControlledTextArea extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		return (
			<div>
				<br></br>
				<h2>Controlling TextArea fields</h2>
				<textarea
					type="text"
					value={this.state.value}
					onChange={this.handleChange}
				/>
				<br></br>
				<br></br>
			</div>
		);
	}
}

// Controlling Select Tags
class ControlledSelect extends Component {
	constructor(props) {
		super(props);
		this.state = { value: "apple" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		return (
			<div>
				<br></br>
				<h2>Controlling Select Tags</h2>
				<select value={this.state.value} onChange={this.handleChange}>
					<option value="apple">apple</option>
					<option value="banana">banana</option>
					<option value="carrot">carrot</option>
					<option value="donuts">donuts</option>
				</select>
				<br></br>
				<br></br>
			</div>
		);
	}
}

// Controlling Select Tags Dynamically
class ControlledSelectDynamically extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "apple" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}
	render() {
		var array = ["apple", "banana", "carrot", "donuts"];
		var options = array.map((item) => <option value={item}>{item}</option>);
		return (
			<div>
				<br></br>
				<h2>Controlling Select Tags Dynamically</h2>
				<select value={this.state.value} onChange={this.handleChange}>
					{options}
				</select>
				<br></br>
				<br></br>
			</div>
		);
	}
}

// Handling Multiple Inputs
class ControlledMultiple extends React.Component {
	constructor(props) {
		super(props);
		this.state = { value: "apple" };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		this.setState({ [event.target.name]: event.target.value });
	}
	render() {
		var array = ["apple", "banana", "carrot", "donuts"];
		var options = array.map((item) => <option value={item}>{item}</option>);
		return (
			<form>
				<br></br>
				<h2>Handling Multiple Inputs</h2>
				<input
					name="inputName"
					type="input"
					value={this.state.inputName}
					onChange={this.handleChange}
				/>
				<br></br>
				<br></br>
				<textarea
					name="textAreaName"
					type="text"
					value={this.state.textAreaName}
					onChange={this.handleChange}
				/>
				<br></br>
				<select
					name="selectName"
					value={this.state.selectName}
					onChange={this.handleChange}
				>
					{options}
				</select>
				<br></br>
				<br></br>
			</form>
		);
	}
}

export default ControlledMultiple;
export {
	ControlledInputField,
	ControlledCheckboxes,
	ControlledTextArea,
	ControlledSelect,
	ControlledSelectDynamically,
};
