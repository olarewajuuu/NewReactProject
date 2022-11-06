import React from "react";
import './Box.css'
import BoxProps from "./BoxProps";
import img1 from '../images/images (86).jpeg'


const Box = ()=>{

    return <div>
        <div className="box-wrap">
            <BoxProps 
            img ={img1}
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae, quaerat earum, est accusamus excepturi quia doloribus id architecto dolorum rerum consequuntur eveniet nobis nostrum alias nihil deserunt vero voluptatum.'
            >
            </BoxProps>
            <BoxProps 
            img ={img1}
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae, quaerat earum, est accusamus excepturi quia doloribus id architecto dolorum rerum consequuntur eveniet nobis nostrum alias nihil deserunt vero voluptatum.'
            >
            </BoxProps>
            <BoxProps 
            img ={img1}
            content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia recusandae, quaerat earum, est accusamus excepturi quia doloribus id architecto dolorum rerum consequuntur eveniet nobis nostrum alias nihil deserunt vero voluptatum.'
            >
            </BoxProps>
        </div>
    </div>
}

export default Box