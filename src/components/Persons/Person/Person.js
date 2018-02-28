import React, { Component } from "react";
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClasss';

class Person extends Component {
	constructor(props) {
		super(props);
		console.log('[Person.js] Inside Constructor()', props);
	}

	componentWillMount() {
		console.log('[Person.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[Person.js] Inside componentDidMount()');
		if(this.props.position === 0) {
			this.inputElement.focus();
		}
	}
	render() {
		console.log('[Person.js] Inside render()');
		
		return (
			<Aux>
				<p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				{/* 
					inp means input 
					this.inputElement = this will create a new property 
					for the entire Person class and you can use it
					anywhere in the class and it's created on the render time
				*/}
				<input type="text" ref={(inp) => {this.inputElement = inp}} onChange={this.props.changed} value={this.props.name} />
			</Aux>
		)
	}
}

	// const rnd = Math.random();

	// if (rnd > 0.7) {
	// 	throw new Error('Something went wrong');
	// }
Person.propTypes  = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
}

export default withClass(Person, classes.Person);