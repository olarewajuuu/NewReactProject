import React from "react";
import './Product.css'
import ProductProps from "./ProductProps";
import productList from "./productList";

const Product = ()=>{
    return ( <div>
        <div className="header">
            <h1> Feauter Product</h1>
        </div>
    <div className="wraper">
        {productList.map((el)=>(
            <ProductProps
                key={el.productName}
                img={el.img}
                productName ={el.productName}
                price={el.price}
            />
        ))}
        
        
            </div>
        </div>

    )
        

 
}

export default Product