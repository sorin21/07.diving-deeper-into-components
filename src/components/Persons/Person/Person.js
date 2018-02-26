import React, { Component } from "react";

import classes from './Person.css';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside Constructor()', props);
		this.state = {
			persons: [
				{ id: 'asfa1', name: 'Max', age: 28 },
				{ id: 'vasdf1', name: 'Manu', age: 29 },
				{ id: 'asdf11', name: 'Stephanie', age: 26 }
			],
			otherState: 'some other value',
			showPersons: false
		}
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
	}
	render() {
		console.log('[Person.js] Inside render()');
		
		return (
			<div className={classes.Person}>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input type="text" onChange={this.props.changed} value={this.props.name} />
			</div>
		)
	}
}

	// const rnd = Math.random();

	// if (rnd > 0.7) {
	// 	throw new Error('Something went wrong');
	// }


export default Person;