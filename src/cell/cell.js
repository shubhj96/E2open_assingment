import React, { Component } from 'react';
import './cell.css';

/**
 * class : Cell
 * This class will help in populating the cells for the particular grid
 */
class Cell extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className= {"cell " +this.props.titleClass}>
        {this.props.title}
      </div>
    );
  }
}

export default Cell;