import React from "react";
import Morning from './Morning'
import Afternoon from './Afternoon'
import Evening from './Evening'
// import Night from './Night'


let msg;
const time = new Date().getHours

if(time<12){
    msg = <Morning></Morning>
}else if (time >= 12 && time < 16){
    msg = <Afternoon></Afternoon>
}else{
    msg = <Evening></Evening>
}

const Assignment = ()=>{
    return <div>
       
        <h1>{msg}</h1>
    </div>
}

export default  Assignment