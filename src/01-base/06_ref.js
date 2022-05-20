import React, {Component} from "react";

class Ref extends Component {
    a = 100;
    myref = React.createRef()

    render()
    {
        return (
            <div>
                <input ref={this.myref}/>
                <button onClick={()=>{
                    this.clickHandler()
                    // 当点击事件逻辑过多可以这样提高可读性
                }}>Submit</button>
            </div>
        );
    }

    clickHandler(){
        console.log(this.myref.current.value)
    }
}

export default Ref;