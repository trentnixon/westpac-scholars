import React, { Component } from 'react';
import {Animated} from "react-animated-css"; 
import SelectedItem from "../Elements/SelectedItem";
//import SelectedList from "../Elements/SelectedList";
import ApplicationCopy from "../Layout/ApplicationCopy";

let APP, BottomClass;
export default  class DisplaySelectedItem extends Component {
  componentWillMount(){}
  even(int){
    return int % 2;
  }
  render() {
    
    APP = this.props.APP;
  

    if(APP.ITEMSELECTED === true){    
      
      BottomClass = APP.ITEM.SubHeader.replace(" ","_");
      //console.log(BottomClass);
      
      return(
            <Animated animationIn="fadeIn" className={"SelectedContainer "  +  BottomClass } animationOut="fadeOut"  animationInDelay={10} isVisible={this.props.Display}>
               <SelectedItem Item={APP.ITEM} />
            </Animated>
     )
   }
    else if(APP.ITEMSELECTED === false && this.props.UiState === "Home"){ 
      return(
          <div className="SelectedContainer">
              <ApplicationCopy 
                  BodyCopy={this.props.UI.BodyCopy}
              />
          </div>   
              
    ) }
    else{ return null; }
  }
} 