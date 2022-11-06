import React from "react";

const BoxProps = (props)=>{

    return <div>
            <div className="box">
                <img src= {props.img} alt="" />
               <p>{props.content}</p>
            </div>

    </div>
}

export default BoxProps