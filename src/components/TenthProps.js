import React from "react";

const TenthProps = (props)=>{

    return <div>

<div className="card-id">
                <img src={props.displayImg} alt="" />
                <h4>{props.name}</h4>
                <h4>{props.sex}</h4>
                <h4>{props.title}</h4>
            </div>

    </div>
}

export default TenthProps