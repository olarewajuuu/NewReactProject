import React from "react";
import './Card.css'

const Card = () =>{
    return <div>
        <div className="contianer">
            <div className="col">
                <img src="../../images/Mypic.JPG" alt="" />
                <div className="profile">
                    <h1>John Maxwell</h1>
                    <h3>London, UK</h3>
                    <h5>Rating: 4.8</h5>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, a? Adipisci quas esse cumque dolores iure quia ab voluptate illo tempore veniam alias eveniet qui earum dolore, porro exercitationem placeat!</p>
            <button className="play"> Play Audio</button>
            <button className="prev">Prev</button>
            <button className="next">Next</button>

        </div>
    </div>
}

export default Card