
import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";


export const addProductReducer=(state, action)=>
{
    switch(action.type)
    {
        case "Add-Product":
            return {
                product : action.product
            }
        default:
            return state;
    }

}

export const selectProductReducer=(state=-1, action)=>{
    
    switch(action.type)
    {
        case "Select-Product":
            return { state: action.index };
        default:
            return state;
    }
}

export const ListProductReducer=(state=[], action)=>{
        switch(action.type)
        {
            case "Add-Product":
                return [...state, addProductReducer(undefined, action)];
            default:
                return state;
        }

}

const rootreducer = combineReducers({ListProductReducer, selectProductReducer});
export default rootreducer;