import React, {Component} from "react";
import './Third.css'

class Third extends Component{
    render(){
        return <div>
            <div className="test">
                <div className="text-con">
                    <div className="img">
                        <img src="../../images/images (85).jpeg" alt="" />
                    </div>
                    <div className="text">
                        <h3>{this.props.name}</h3>
                        <h4>{this.props.title}</h4>
                        <p>{this.props.bio}</p>
                    </div>
                </div>
                <div className="desc">
                    <p>{this.props.desc}</p>
                </div>
                <div className="button-group">
                <button>Click Me</button>
                <button>Click Me</button>
               
            </div>
            </div>

        </div>
    }
}


export default Third