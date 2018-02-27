import React from "react";
import classes from "./Cockpit.css";
import Auxiliary from '../../hoc/Auxiliary';

const cockpit = (props) => {

  const assignedClasses = [];
  let btnClass = classes.Button;
  if(props.showPerson) {
    btnClass = [classes.Button, classes.Red].join(' ');
  }
    
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return(
    <Auxiliary>
      <h1>Hi, I'm a React App</h1>
      <h3>{props.appTitle}</h3>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </Auxiliary>
  );
};

export default cockpit;