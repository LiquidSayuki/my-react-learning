import React, {Component} from 'react';

class Loop extends Component {
    state = {
        list:[{
            id:1,
            text:"111"},
            {
                id:2,
                text:"222"},
            {
                id:3,
                text:"333"}]
    }

    render()
    {
        return (
            <div>
                hello
                <ul>
                    {
                        this.state.list.map(item=>{
                            return <li key={item.id}>{item.text}</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Loop;