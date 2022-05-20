import React, {Component} from 'react';

class State extends Component {

    //元素放置在state之中
    // state = {
    //     mytext:"收藏",
    //     myShow:true
    // }
    //第二种状态构造方式
    constructor(){
        super()
        this.state = {
            mytext:"收藏",
            myShow:true,
            myName:"world"
        }
    }

    render()
    {
        return (
            <div>
                <h1>Hello,{this.state.myName}</h1>
                <button onClick={()=>{
                    //使用setstate去改变state
                    this.setState({
                        myShow:!this.state.myShow,
                        myName:"WORLD"
                    })
                }}>
                    {this.state.myShow?"收藏":"取消收藏"}
                </button>
            </div>
        );
    }
}

export default State;