import React, {Component} from "react";
import './Eight.css'
import Button from "./Button";


export class Eight extends Component {

   constructor(){
        super()
        this.state = {fName:'', lName:'', email:''}
    }

    render(){
        return <div>
            <form action="">
                <div className="group">
                    <div className="group1">
                        <div className="form-group">
                            <input type="text" placeholder="First Name" value={this.state.fName} onChange={(event)=>{this.setState({fName:event.target.value})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="LastName" value={this.state.lName} onChange={(event)=>{this.setState({lName:event.target.value})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="email" value={this.state.email} onChange={(event)=>{this.setState({email:event.target.value})}}/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                    </div>
                    <div className="group2">
                    <div className="form-group">
                            <input type="text" placeholder="First Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="LastName" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="Name" />
                        </div>
                    </div>
                </div>
                <Button btnName = 'Submit' ></Button>
            </form>

            <h1>{this.state.fName}</h1>
            <h1>{this.state.lName}</h1>
            <h1>{this.state.email}</h1>
            
        </div>
    }
}

export default Eight