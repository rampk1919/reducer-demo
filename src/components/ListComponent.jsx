import React from 'react';

const ListComponent=(props)=>{
   
  const handleClick=(idx)=>{

    props.SelectedIndexChanged(idx);

  }

    return(
         <div>
             <div>
               <strong>Data Received from Store {JSON.stringify(props.listProducts)}</strong>
             </div>   
             <table className="table table-bordered table-striped table-dark">
               <thead>
                 <tr>
                   <th>Product Id</th>
                   <th>Product Name</th>
                 </tr>
               </thead>
               <tbody>
                  {
                      props.listProducts.map((prd,indx)=>(
                           <tr key={indx}>
                             <td>{prd.product.productId}</td>
                             <td>{prd.product.productName}</td>
                             <td><input type="button" value="select" onClick={()=>handleClick(indx)} /></td>
                           </tr> 

                      ))
                  }
               </tbody>
             </table>

         </div> 
    );
};

export default ListComponent;
