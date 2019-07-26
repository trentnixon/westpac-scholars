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
    console.log(this.props.Parent[this.props.int-1], this.props.int)

    DisplayCats = this.getKeyByValue(this.props.Parent[this.props.int-1],"1");
    return (
        <ul className="SelectedCategoryList"> 
            {
                DisplayCats.map((label,i)=>{
                    return(
                        <li key={i} className={label}>  
                            <p>{label}</p>
                        </li>
                    )
                })
            }
        </ul>
    )
  }
}
export default Selectedcategories;