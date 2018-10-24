import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import Home from './components/Home/Home';
import NewList from './components/NewList/newList';
import shopList from './components/shopList/shopList';
import Content from './components/shopList/shopContent';
import Layout from './components/Layout/layout';

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: "react-router-dom"
        }
    }

    render() {
        return (
            <Router>

                <div className="App" id='root'>

                    <h1>{this.state.title}</h1>
                    <h2>
                        <Link to='/'>首页</Link>
                        <Link to='/news'>新闻</Link>
                        <Link to='/shopList'>商品</Link>
                    </h2>

                    <br/>
                    <br/>
                    <hr/>
                    <Layout>
                        <Route exact path='/' component={Home}/>
                        <Route path='/news' component={NewList}/>
                        <Route exact path='/shopList' component={shopList} />
                        <Route path='/shopList/:id' component={Content} title='title'/>
                    </Layout>
                </div>
            </Router>

        );
    }
}

export default App;
