// import React from "react";

const InitialState ={
	APPLICATION:false,
	GA_DB:false,
	GA_SCHEMA:false,
	PARENT:false,
	PARENT_TITLE:false, 
	INT:null,
	ITEMSELECTED:false,
	ITEM:null
}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			case "STORE_INTERACTIVE":{
				return {...state, APPLICATION:action.payload}
					// eslint-disable-next-line 
					break
				}
	
			case "STORE_GA_APPLICATION":{
					return {...state, GA_DB:action.payload}
						// eslint-disable-next-line 
						break
				}
			
			case "STORE_GA_SCHEMA":{
					return {...state, GA_SCHEMA:action.payload}
						// eslint-disable-next-line 
						break
				}

			case "PARENT":{
				return {...state, PARENT:action.payload}
					// eslint-disable-next-line 
					break
				} 
			case "PARENT_TITLE":{
					return {...state, PARENT_TITLE:action.payload}
						// eslint-disable-next-line 
						break
					} 

			case "INT":{
				return {...state, INT:action.payload}
						// eslint-disable-next-line 
						break
			}

			case "ITEMSELECTED":{
				return {...state, ITEMSELECTED:action.payload}
						// eslint-disable-next-line 
						break
			}
			
			case "ITEM":{
				return {...state, ITEM:action.payload}
						// eslint-disable-next-line 
						break
			}

		}
		return state;
	}
export default APP;	 