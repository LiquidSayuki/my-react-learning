import React, {Component} from 'react';

class EventBinding extends Component {
    a = 100;

    render()
    {
        return (
            <div>
                <input/>
                <button onClick={()=>{
                    console.log(this.a + "可以访问")
                }}>add1</button>

                <button onClick={this.clickHandler}>add2</button>

                <button onClick={this.clickHandler.bind(this)}>add2</button>

                <button onClick={()=>{
                    this.clickHandler()
                    // 当点击事件逻辑过多可以这样提高可读性
                }}>add3</button>
            </div>
        );
    }

    clickHandler(){
        console.log("Handler")
        console.log(this.a)
        // 未进行bind（this）时会报错，因为 this指向一个undefined
    }
}

export default
EventBinding;