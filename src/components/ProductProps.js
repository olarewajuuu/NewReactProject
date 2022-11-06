import React from "react";

const ProductProps = ({img, productName, price})=>{

    return <div>
        <div className="pro-card">
        <img src= {img} alt="" />
        <div className="text">
            <h4>{productName}</h4>
            <h4 style={{color:'brown'}}>&#8358;{price}</h4>
        </div>
        </div>
    </div>
}

export default ProductProps