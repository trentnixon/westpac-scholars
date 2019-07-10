import React from 'react';
import Button from '@material-ui/core/Button';
import {ResetParent, RestItem} from "../../actions/actions";
import {GA} from "../../../../../actions/ga";
function handle(int){
    ResetParent();
    RestItem(); 
    GA('Application Click','Button','Back to Parent');
    window.scrollTo({ top: 100,behavior: 'smooth'});
  }
function BackButton(props) {

    return (
      <Button 
        variant="outlined" 
        className="Back" 
        onClick={()=>{handle()}} >Back</Button>
   
    )}

export default BackButton; 