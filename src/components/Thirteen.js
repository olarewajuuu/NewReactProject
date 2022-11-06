import React from "react";
import Button from "./Button";

const Thirteen = ()=>{

    return <div>
            <form action="">
                <div className="group">
                    <div className="group1">
                        <div className="form-group">
                            <input type="text" placeholder="First Name"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="LastName"/>
                        </div>
                        <div className="form-group">
                            <input type="text" placeholder="email"/>
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
    </div>
}

export default Thirteen