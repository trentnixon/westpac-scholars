
import store from "../../../../store/store"

export function SetSomething(id){
     //console.log(id)
    //store.dispatch({ type:"UI_SET_ACTIVE_FACE", payload:id });
} 

// Select Something
export function ParentSelected(id, parent) 
{ 
    //console.log(id, parent)
    store.dispatch({ type:"PARENT", payload:true });
    store.dispatch({ type:"PARENT_TITLE", payload:parent });
    store.dispatch({ type:"INT", payload:id });
}


export function ItemSelected(id){
    store.dispatch({ type:"ITEMSELECTED", payload:true });
    store.dispatch({ type:"ITEM", payload:id });
}

export function FindCategory(label){

    let Cats = store.getState().APP.APPLICATION[2]
// eslint-disable-next-line
    Cats.map((cat,i)=>{
        if(cat.Category === label)
        {
            ParentSelected(i, label) 
        }
    })
}

// Reset Something
export function ResetParent(){
    store.dispatch({ type:"PARENT", payload:false });
    store.dispatch({ type:"INT", payload:null });
}

export function RestItem(){
    store.dispatch({ type:"ITEMSELECTED", payload:false });
    store.dispatch({ type:"ITEM", payload:null });
}