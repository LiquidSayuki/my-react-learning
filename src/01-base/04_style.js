import React, {Component} from 'react';
import "../css/01-index.css"

class Style extends Component {
    render()
    {
        let myname = "HAHAHA";
        let obj = {
            background: "yellow",
            fontSize: "24px"
        };
        return (
            <div>
                {10+20}+{myname}
                <div style={obj}>222222</div>
                <div style={{background:"red"}}>33333333</div>
                <div className="active">4444444</div>

                <label htmlFor="username">Username:</label>
                <input type="text" id="username"/>
            </div>
        );
    }
}

export default Style;