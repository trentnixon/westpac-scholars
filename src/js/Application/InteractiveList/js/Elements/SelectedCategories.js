import React, { Component } from 'react'
import ButtonBase from '@material-ui/core/ButtonBase';
import {FindCategory} from "../../actions/actions";
import {GA} from "../../../../../actions/ga";

let DisplayCats, Arr=[];

class Selectedcategories extends Component {

     getKeyByValue(object, value) {
        Arr=[]; 
        // eslint-disable-next-line
        Object.keys(object).map((cat,i)=>{
            if(object[cat] === value){ Arr.push(cat)} 
        })
        return Arr;
    }

    handle(label){
        //console.log(label)
        FindCategory(label) 
        window.scrollTo({ top: 0,behavior: 'smooth'});
        GA('Application Click','Button > Category Change', label)
    }
  render () {
    DisplayCats = this.getKeyByValue(this.props.CATS,"1");
    return (
        <ul className="SelectedCategoryList"> 
            {
                DisplayCats.map((label,i)=>{
                    return(
                        <li key={i} className={label}> 
                            <ButtonBase 
                                focusRipple 
                                className="SelectedListIcon" 
                                onClick={()=>{this.handle(label)}}
                             >
                                {label} 
                            </ButtonBase>
                        </li>
                    )
                })
            }
        </ul>
    )
  }
}
export default Selectedcategories;