import React from 'react';
import Button from '@material-ui/core/Button';
import Back from "../Elements/BackButton";
import {ResetParent, RestItem} from "../../actions/actions";
import {GA} from "../../../../../actions/ga";

function ToTop(){
    let List = document.getElementById("SelectedListNew");
    let offset=150;

    window.scrollTo({ top:  (List.offsetTop-offset),behavior: 'smooth'});

    GA('Application Click','Button','Back to List');
}
// eslint-disable-next-line
function handle(int){ 
  ResetParent();
   RestItem(); 
  
   window.scrollTo({ top: 0,behavior: 'smooth'});
    GA('Application Click','Button','Back to Parent');
    
  }
function BackButton(props) {

    return (
      
          <div className="BottomCTA">
            <div className="inner">
              <Back />
               
                <Button variant="outlined" className="BackToTop" onClick={()=>{ToTop()}} > </Button>
            </div>
          </div> 
    )}

export default BackButton;