import React from "react";
import './Tenth.css'
import estherImage from '../images/download.png'
import TenthProps from "./TenthProps";
import img2 from '../images/images (84).jpeg'
import img3 from '../images/images (85).jpeg'

const Tenth= (props)=>{
    return <div>
        <div className="card-wrap">
            <TenthProps
            displayImg = {estherImage}
            sex = 'Female'
            name = 'Esther Okoh'
            title = 'Full Stack Developer'
            
            ></TenthProps>
            <TenthProps
            displayImg = {img2}
            sex = 'Female'
            name = 'Esther Okoh'
            title = 'Full Stack Developer'
            
            ></TenthProps>
            <TenthProps
            displayImg = {img3}
            sex = 'Female'
            name = 'Esther Okoh'
            title = 'Full Stack Developer'
            
            ></TenthProps>
        </div>
    </div>
}

export default Tenth