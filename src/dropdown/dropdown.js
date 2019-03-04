import React, { Component } from 'react';
import './dropdown.css';


/**
 * class : Dropdown
 * This is the class that will contain all the dropdown logic.
 * which will help in creating filter
 */
class Dropdown extends Component {
    constructor(props){
        super(props)
    }
  render() {

    // creating the object for the repeating element 
    var listItems = this.props.options.map(function(item) {
        if(item.code !== undefined){
            return (
                <option key={item.code} value={item.code}>{item.name}</option>
            );
        } else {
            return (
                <option key={item.id} value={item.id}>{item.value}</option>
            );
        }
        
      });

    return (
        <select id="select-state" placeholder="Pick a state..." onChange={(event) => this.props.onChange(event.target.value)}>
            <option value="All">All</option>
            {listItems}
        </select>
    );
  }
}

export default Dropdown;