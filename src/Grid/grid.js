import React, { Component } from 'react';
import './grid.css';
import Cell from '../cell/cell';

class Grid extends Component {
  constructor(props){
    super(props);
    
  }

  onPageSelected(selectedPage){
    this.props.onPageSelected(selectedPage.pageIndex);
  }
  render() {
    var scope = this;
    var listItems = this.props.items.map(function(item) {
      return (
        <div>
          <Cell id="name"        title = {item.name}/>
          <Cell id="iso2Code"    title = {item.iso2Code}/>
          <Cell id="region"      title = {item.region.value}/>
          <Cell id="capital"     title = {item.capitalCity}/>
          <Cell id="lendingType" title = {item.lendingType.value}/>
          <Cell id="incomeLevel" title = {item.incomeLevel.value}/>
        </div>
      );
    });

    var paginationBlocks = this.props.pagination.map(function(pageIndex, i) {
      return (
          <div className={"page-index-box " + ((scope.props.pageSelected === i) ? "page-index-active" : "")} onClick={() => scope.onPageSelected({pageIndex})}>{pageIndex}</div>
      );
    });

    return (

      
      <div className="App">
        <div className="pagination-container">
          {paginationBlocks}
        </div>
        <div>
          <Cell titleClass = {"title-grid"} title = {"Name"}/>
          <Cell titleClass = {"title-grid"} title = {"ISO2 Code"}/>
          <Cell titleClass = {"title-grid"} title = {"Region"}/>
          <Cell titleClass = {"title-grid"} title = {"Capital"}/>
          <Cell titleClass = {"title-grid"} title = {"Lending Type"}/>
          <Cell titleClass = {"title-grid"} title = {"Income Level"}/>
        </div>
        {listItems}
      </div>
    );
  }
}

export default Grid;