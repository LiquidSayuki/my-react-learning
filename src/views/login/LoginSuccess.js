import React from "react";
import {Redirect} from "react-router-dom";

export default function LoginSuccess(){
    let token = window.location.hash
    token = token.split("&access_token=")
    token = token[0].replace("#id_token=","")
    console.log(token)
    localStorage.setItem("token",token)
    return(
        <div>
            <Redirect to="/welcome"></Redirect>
        </div>
    );
}