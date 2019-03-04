import React, { Component } from 'react';
import './grid.css';
import Cell from '../cell/cell';

/**
 * class : Grid
 * This class will help in populating the grid for the for each entry in the row
 */
class Grid extends Component {
  constructor(props){
    super(props);
    
  }

  /**
   * function : onPageSelected
   * this function is called when user clicked on the page number displayed on the screen 
   * @param {*} pageSelected : it is the selection made by the user.
   */
  onPageSelected(selectedPage){
    this.props.onPageSelected(selectedPage.pageIndex);
  }
  render() {
    var scope = this;
    // creating the object for the repeating element 
    var listItems = this.props.items.map(function(item) {
      return (
        <div key={item.id}>
          <Cell id="name"        key={"name" + item.id}        titleClass = {""} title = {item.name}/>
          <Cell id="iso2Code"    key={"iso2code" +item.id}     titleClass = {""} title = {item.iso2Code}/>
          <Cell id="region"      key={"region" +item.id}       titleClass = {""} title = {item.region.value}/>
          <Cell id="capital"     key={"Capital" + item.id}     titleClass = {""} title = {item.capitalCity}/>
          <Cell id="lendingType" key={"LendingType" + item.id} titleClass = {""} title = {item.lendingType.value}/>
          <Cell id="incomeLevel" key={"Income Level" +item.id} titleClass = {""} title = {item.incomeLevel.value}/>
        </div>
      );
    });

    // creating the object for the repeating element for the pagination
    var paginationBlocks = this.props.pagination.map(function(pageIndex, i) {
      return (
          <div key={pageIndex} className={((scope.props.pageSelected === pageIndex) ? "page-index-active page-index-box" : "page-index-box")} onClick={() => scope.onPageSelected({pageIndex})}>{pageIndex}</div>
      );
    });

    return (

      
      <div className="App">
        <div className="pagination-container">
          {paginationBlocks}
        </div>
        <div className = "grid-container">
          <Cell titleClass = {"title-grid"} key ={"name"}         title = {"Name"}/>
          <Cell titleClass = {"title-grid"} key ={"IS02Code"}     title = {"ISO2 Code"}/>
          <Cell titleClass = {"title-grid"} key ={"Region"}       title = {"Region"}/>
          <Cell titleClass = {"title-grid"} key ={"Capital"}      title = {"Capital"}/>
          <Cell titleClass = {"title-grid"} key ={"Lending Type"} title = {"Lending Type"}/>
          <Cell titleClass = {"title-grid"} key ={"Income Level"} title = {"Income Level"}/>
        </div>
        {listItems}
      </div>
    );
  }
}

export default Grid;