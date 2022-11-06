import React, {Component} from "react";

export class Increament extends Component{
    constructor(){
        super()
        this.state = {count:0}
    }

    render(){
        

        return <div>
            <div className="container">
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.setState({count: this.state.count +1})}}>Increament</button>
            </div>
            
        </div>
    }
}

export default Increament