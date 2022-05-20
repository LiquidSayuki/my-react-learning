import React, {Component} from 'react';

class Todolist extends Component {
    refButton = React.createRef()
    state = {
        list:[]
    }

    render()
    {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(item => {
                            return <li>{item}</li>
                        })
                    }
                </ul>

                <input ref={this.refButton}></input>
                <button onClick={()=>{
                    this.handleClick()
                }}>ADD</button>
            </div>
        );
    }
    handleClick(){
        // 创建一个旧state的复制
        let newList = this.state.list.slice()
        // 对复制list进行操作
        newList.push(this.refButton.current.value)
        // 使用官方接口对state进行操作
        this.setState({
            list:newList
        })
    }
}



export default
Todolist;