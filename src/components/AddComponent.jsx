import React, { useEffect, useState } from 'react';   

export const AddComponent=(props)=>{

    const [product, setProduct] = useState({productId:props.product.productId, productName:props.product.productName});

    const handleClick=()=>{
        props.AddClick(product);
    }

    const handleOnChange=(e)=>{
        setProduct({...product, [e.target.name]:e.target.value});
    }

    const clear=()=>{
        setProduct({productId:0,productName:''})
    }
    
        return(
            <div>
                <div>
                    <label htmlFor="">Product ID</label>
                    <input type="text"
                           value = {product.productId} name="productId"
                           onChange = {(evt) => handleOnChange(evt)}/>
                </div>
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type = "text"
                           value = {product.productName} name="productName"
                           onChange = {(evt) => handleOnChange(evt)}/>
                </div>
                <div>
                    <input type="button" value="Add" onClick={handleClick}/>
                    <input type="button" value="clear" onClick={clear}/>
                </div>
            </div>            
        )
}

export default AddComponent;