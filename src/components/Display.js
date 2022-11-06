import React, {Component} from "react";
import GoodAfternoon from "./GoodAfternoon";
import GoodEvening from "./GoodEvening";
import GoodMorning from "./GoodMorning";

export class Display extends Component{
    render(){
        let msg ;
        const time = new Date().getHours()
        if(time<12){
            msg = <GoodMorning></GoodMorning>
        }else if (time >= 12 && time < 16){
            msg = <GoodAfternoon></GoodAfternoon>
        }else{
            msg = <GoodEvening></GoodEvening>
        }
        return <div>
            {msg}
        </div>

        
    }
}

export default Display