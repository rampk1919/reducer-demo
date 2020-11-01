import React, { useReducer } from 'react';   
import { useSelector, useDispatch } from 'react-redux';

import AddComponent from "./components/AddComponent";
import  ListComponent  from './components/ListComponent';
import AddProduct from './actions/actions';
import SelectProduct from './actions/selectproductAction';

export const MainComponent=()=> {

    let products = useSelector(state=>state.ListProductReducer);
    let index = useSelector(state=>state.selectProductReducer);
    let dispatch = useDispatch();
    return(
        <div>
            <AddComponent AddClick={(product)=>dispatch(AddProduct(product))} listproducts={products} selectedIndex={index} />
            <br/>
            <ListComponent listProducts={products} SelectedIndexChanged={(index) => dispatch(SelectProduct(index))}/>
        </div>
    )
}

export default MainComponent;