import React, {Component} from "react";
import Button from "./Button";

export class Sixth extends Component{
    constructor(){
        super()
        this.state = {count:0}
    }

    componentDidMount(){
        document.title = `You have Click ${this.state.count}`
    }

    componentDidUpdate(){
        document.title = `You have Click ${this.state.count}`
    }

    render(){
        

        return <div>
            <div className="container">
                <h1>{this.state.count}</h1>
                {/* <button onClick={()=>{this.setState({count: this.state.count +3})}}>Counter</button> */}
                <Button onClick={()=>{this.setState({count: this.state.count +3})}} btnName='Increament'></Button>
            </div>
            

        </div>
    }
}

export default Sixth