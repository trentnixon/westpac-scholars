import React, { Component } from 'react';

// Setions
// import ApplicationCopy from "./js/Layout/ApplicationCopy";
import Lists from "./js/Layout/Lists";
import CopySelector from "./js/Layout/UiCopySelector";
import SelectedItem from "./js/Layout/Selected";
import Footer from "../../dom/Footer";
import smoothscroll from 'smoothscroll-polyfill';
smoothscroll.polyfill();

let UiState="Home"
export default  class Default extends Component {
  componentWillMount(){}
  render() { 
    //console.log(this.props);
    if(this.props.APP.PARENT){UiState="Child"}else{UiState="Home"}

    return(
      <div id={UiState} className={"InteractiveList Child_"+ this.props.APP.INT}>
        <div className="Top">

            <CopySelector 
              UiState={UiState}
              Int={this.props.APP.INT}
              {... this.props} 
            />

            <Lists 
              {... this.props}  
              List={this.props.APP.APPLICATION[0]}
              Parent={this.props.APP.APPLICATION[1]}
            />
             
        </div>

        <div className="Bottom" id="Bottom">  

            <SelectedItem 
              List={this.props.APP.APPLICATION[0]}
              Parent={this.props.APP.APPLICATION[1]}
              {... this.props}
              UiState={UiState}
            />
            <Footer />
        </div> 
        
      </div> 
    ) 
  }
} 