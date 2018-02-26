import React, { Component } from "react";
import Person from "./Person/Person";


class Persons extends Component {
  constructor(props) {
    super(props);
    console.log('[Persons.js] Inside Constructor()', props);
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
    console.log('[Persons.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Persons.js] Inside componentDidMount()');
  }
  render() {
    console.log('[Persons.js] Inside render()');
    
    return (
      this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          changed={(event) => this.props.changed(event, person.id)} />
      })
    );
  }
}
export default Persons;