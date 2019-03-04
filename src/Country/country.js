import React, { Component } from 'react';
import './country.css';
import Grid from '../Grid/grid';
import Dropdown from '../dropdown/dropdown';


/*This function is to used to fetch data from the server by 
 * providing different query param we are fetching 00data for
 * different search query.
 */
function fetchData( searchParam, queryParam = "" ){
  var baseUrl = "http://api.worldbank.org/v2/";
  var formatJson = "?format=json";
  var searchQuery = baseUrl + searchParam + formatJson;
  if(queryParam !== ""){
    searchQuery = searchQuery + queryParam;
  }
  return (fetch(searchQuery).then(results => {
    return results.json();
  })
  )
}

/**
 * class : Country
 * This is the base class that will contain the country data in the form of table,
 * also has the filter option to filter the data
 */
class Country extends Component {
  constructor(props){
    super(props);
    this.records= [];
    this.state = {
      items : [],
      paginationData : [],
      regions : [],
      incomelevel : [],
      lendingType : [],
      pageSelected : -1,
      records :  []
    };
 }

 
/**
 * This is the lifecycle hook function, it is being used to
 * fetch the data from the server
 */
  componentDidMount() {

    // fetching data for country to display
    fetchData("country").then(data => {
      var pages = []
      for(var i=1;i<= data[0].pages; i++){
        pages.push(i);
      }
      this.setState({items : data[1], paginationData : pages, pageSelected : data[0].page});
    });

    // fetching region data for dropdown
    fetchData("region").then(data => {
      this.setState({regions : data[1]});
    });

    // fetching income level data for dropdown
    fetchData("incomelevel").then(data => {
      this.setState({incomelevel : data[1]});
    });

    // fetching income level data for dropdown
    fetchData("lendingType").then(data => {
      this.setState({lendingType : data[1]});
    });
    
  }

  /**
   * function : onPageSelected
   * this function is called when user clicked on the page number displayed on the screen 
   * @param {*} pageSelected : it is the selection made by the user.
   */
  onPageSelected(pageSelected){
    if(this.state.pageSelected !== pageSelected){
      var queryParam = "&page="+pageSelected;
      this.updateSearchResult(queryParam);
    }
  }
  /**
   * function : updateSearchResult
   * This function is called when used made any change on the search criteria
   * changes can  be the filter or the request to for the pagination
   * @param {*} queryParam : this is the query for to modify the search criteria 
   */
  updateSearchResult(queryParam){
    fetchData("country", queryParam).then(data => {
      var pages = []
      for(var i=1;i<= data[0].pages; i++){
        pages.push(i);
      }
      this.setState({items : data[1], paginationData : pages, pageSelected : data[0].page});
    });
  }

  /**
   * function : handleRegionChange
   * This function is called when user choose the filter for region
   * @param {*} selectedValue : the value selected by the user
   */
  handleRegionChange(selectedValue){
    var queryParam = "";
    if(selectedValue !== "All"){
      queryParam = "&region="+selectedValue;
    } 
    this.updateSearchResult(queryParam);   
  }

  /**
   * * function : handleIncomeLevelChange
   * This function is called when user choose the filter for income level
   * @param {*} selectedValue : the value selected by the user
   */
  handleIncomeLevelChange(selectedValue){
    var queryParam = "";
    if(selectedValue !== "All"){
      queryParam = "&incomelevel="+selectedValue;
    }
    this.updateSearchResult(queryParam);
  }

  /**
   * function : handleLendingTypeChange
   * This function is called when user choose the filter for lending type
   * @param {*} selectedValue : the value selected by the user
   */
  handleLendingTypeChange(selectedValue){
    var queryParam = "";
    if(selectedValue !== "All"){
      queryParam = "&lendingtype="+selectedValue
    }
    this.updateSearchResult(queryParam);
  }
  render() {
    return (
      <div>
        <h1>Country Data</h1>

        <div className="filter-grid">
          <div className="dropdown-container">
            <div className="width-30"> Region  :      </div><div className="dropdown">  <Dropdown options = {this.state.regions} onChange={(selectedValue) => this.handleRegionChange(selectedValue)} /></div>
          </div>
          <div className="dropdown-container">
            <div className="width-30"> Income Level  :</div><div className="dropdown">  <Dropdown options = {this.state.incomelevel} onChange={(selectedValue) => this.handleIncomeLevelChange(selectedValue)} /></div>
          </div>
          <div className="dropdown-container">
            <div className="width-30"> Lending Type  :</div><div className="dropdown">  <Dropdown options = {this.state.lendingType} onChange={(selectedValue) => this.handleLendingTypeChange(selectedValue)} /></div>
          </div>
        </div>
        <div className="App">
          <Grid items ={this.state.items} pagination = {this.state.paginationData} pageSelected= {this.state.pageSelected} onPageSelected={(selectedPage) => this.onPageSelected(selectedPage)}/>
        </div>
      </div>  
    );
  }
}

export default Country;
