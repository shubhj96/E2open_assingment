import React, { Component } from 'react';
import './cell.css';

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