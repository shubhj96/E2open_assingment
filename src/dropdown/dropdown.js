import React, { Component } from 'react';
import './dropdown.css';

class Dropdown extends Component {
    constructor(props){
        super(props)
    }
  render() {

    var listItems = this.props.options.map(function(item) {
        if(item.code !== undefined){
            return (
                <option value={item.code}>{item.name}</option>
            );
        } else {
            return (
                <option value={item.id}>{item.value}</option>
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