import React, { useEffect, useState } from 'react';   

export const AddComponent=(props)=>{

    const [product, setProduct] = useState({productId:0,productName:''});

    useEffect(()=>{

        let selectedIndex = props.selectedIndex;
        if(selectedIndex !== -1)
        {
            alert(props.listProducts[0]);
            let selectedProduct = props.listProducts[0];
            setProduct({...product, productId:selectedProduct.productId});
            setProduct({...product, productName:selectedProduct.productName});
            //let id = props.listproducts[selectedIndex].product.productId;
            //let name = props.listproducts[selectedIndex].productName;
        }
    })

    const handleClick=()=>{
        props.AddClick(product);
    }
    
        return(
            <div>
                <div>
                    <label htmlFor="">Product ID</label>
                    <input type="text"
                           value = {product.ProductId}
                           onChange = {(evt) => setProduct({...product,productId:parseInt(evt.target.value)})}/>
                </div>
                <div>
                    <label htmlFor="">Product Name</label>
                    <input type = "text"
                           value = {product.productName}
                           onChange = {(evt)=> setProduct({...product, productName:evt.target.value})}/>
                </div>
                <div>
                    <input type="button" value="Add" onClick={handleClick}/>
                </div>
            </div>            
        )
}

export default AddComponent;