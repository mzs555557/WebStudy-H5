import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import Content from './shopContent';
class shopList extends Component {
    constructor(){
        super();
        this.state ={
            content:[
                {
                    id:1,
                    title: '但孤独的形式和原因多种多样，欢迎您跟我们分享关于孤独的感受和经历，我们将选取有代表性的观众分享'
                },
                {
                    id:2,
                    title: '但孤独的形式和原因多种多样，欢迎您跟我们分享关于孤独的感受和经历，我们将选取有代表性的观众分享'
                },
                {
                    id:3,
                    title: '但孤独的形式和原因多种多样，欢迎您跟我们分享关于孤独的感受和经历，我们将选取有代表性的观众分享'
                },
                {
                    id:4,
                    title: '但孤独的形式和原因多种多样，欢迎您跟我们分享关于孤独的感受和经历，我们将选取有代表性的观众分享'
                },
                {
                    id:5,
                    title: '但孤独的形式和原因多种多样，欢迎您跟我们分享关于孤独的感受和经历，我们将选取有代表性的观众分享'
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <h1>shopList</h1>
                <ul>
                    {
                        this.state.content.map((item ,index) => {
                            return (
                                <li key={index}>
                                    <Link to={`/shopList/${item.id}`}>{item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
}

export default shopList;
