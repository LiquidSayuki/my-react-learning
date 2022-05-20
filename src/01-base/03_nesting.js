import React, {Component} from 'react';

const Tabbar = () => (
    <h1>Hello,world!</h1>
)

class Navbar extends Component{
    render() {
        return(
            <div>
                Navigation bar
            </div>
        );
    }
}

class Nesting extends Component {
    render()
    {
        return (
            <div>
                <Navbar/>
                <Tabbar/>
            </div>
        );
    }
}

export default Nesting;