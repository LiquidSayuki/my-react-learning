import React from "react";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "../views/login/Login";
import Home from "../views/home/home";
import LoginSuccess from "../views/login/LoginSuccess";


function IndexRouter() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/loginSuccess" component={LoginSuccess}/>
                    <Route path="/" render={()=>
                        localStorage.getItem("token")?<Home></Home>:<Redirect to="/login"/>}/>
                </Switch>
            </BrowserRouter>
        );
}

export default IndexRouter;