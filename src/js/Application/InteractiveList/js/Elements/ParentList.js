import React, { Component } from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Animated} from "react-animated-css";
import {ParentSelected} from "../../actions/actions";
import {GA} from "../../../../../actions/ga";

let Delay=0;

export default  class Default extends Component {

 componentWillMount(){ }

  handle(int,Parent){ 
        ParentSelected(int,Parent);
        GA('Application Click','Category',Parent)
        window.scrollTo({ top: 100,behavior: 'smooth'});
    }

  render() {
    Delay=0;
    const Keys = this.props.Parent[0];
    // Remove any keys not required
    delete Keys["Name"];

    return(
        <ul id="ParentList">
            {
                Object.keys(Keys).map((list,i)=>{
                    Delay = Delay+100;
                    return (
                        <Animated key={i} animationIn="zoomIn" animationOut="fadeOut" animationInDelay={Delay} isVisible={true}>
                            <div className={"CenterThis"}>
                                    <li  
                                        className="ParentListItem"
                                        id={list}
                                    >
                                    <ButtonBase 
                                        focusRipple 
                                        className={"ParentListIcon "+list} 
                                        onClick={()=>{this.handle(i,list)}}
                                    >       
                                        <span className="ParentListTitle">
                                            {list}
                                        </span>

                                    </ButtonBase>  
                                </li>
                            </div>
                        </Animated>
                    )
                })
            }
        </ul>
    )
  }
}