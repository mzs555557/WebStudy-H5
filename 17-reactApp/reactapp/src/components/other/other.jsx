import React, {Component} from 'react';
import PropTypes from 'prop-types';


import {BrowserRouter as Router , Route , Link} from 'react-router-dom'
import Main from "../Main/Main";
import Home from '../Header/Header';

class other extends Component {
    constructor(){
        super();
    }

    render() {
        return (
            <div>
                <Link to='/'>首页dfdfsdfdfsdf</Link>
                <Link to='/about'>关于sdfsdfsdf</Link>


                <Layout>
                    <Route path='/' component={Home}/>
                    <Route path='/about' component={Main}/>
                </Layout>


            </div>
        );
    }
}

other.propTypes = {

};

export default  other;
