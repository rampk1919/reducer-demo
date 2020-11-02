import React, { useEffect, useReducer, useState } from 'react';   
import { useSelector, useDispatch } from 'react-redux';

import AddComponent from "./components/AddComponent";
import  ListComponent  from './components/ListComponent';
import AddProduct from './actions/actions';
import SelectProduct from './actions/selectproductAction';

export const MainComponent=()=> {

    let products = useSelector(state=>state.ListProductReducer);
    let index = useSelector(state=>state.selectProductReducer);
    const [selproduct, setProduct] = useState({productId:1271,productName:'Ram'});
    //let selectedIndex = index.state;
    useEffect(()=>{
        if(parseInt(index.state) > -1){
            setProduct(products[index.state].product);
            alert(selproduct.productId);
            alert(selproduct.productName);
        }
    });
    let dispatch = useDispatch();
    return(
        <div>
            <AddComponent AddClick={(product)=>dispatch(AddProduct(product))} product={selproduct} />
            <br/>
            <ListComponent listProducts={products} SelectedIndexChanged={(index) => dispatch(SelectProduct(index))}/>
            {/* <SimpleComponent product={selproduct}></SimpleComponent> */}
        </div>
    )
}

export default MainComponent;