import React, { Component } from 'react';
import './App.css';


import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import {routerConfig} from './routerConfig.js';

import Footer from './components/Footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <Switch>
                <Route path='/' render ={()=>{
                  return (
                    <Switch>
                        {
                          routerConfig.map((item , index) => {
                            if(item.exact) {
                              return (
                                <Route
                                    key={index}
                                    exact ={item.exact}
                                    path = {item.path}
                                    component = {item.component}                                
                                >
                                </Route>
                              )
                            }
                            return (
                              <Route
                                key = {index}
                                path = {item.path}
                                render= {()=>{
                                  return < item.component abc={'123'} />
                                }}>
                                </Route>
                            )
                          })
                        }
                    </Switch>
                  )
                }}>

                </Route>
            </Switch>
          </Router>
      </div>
    );
  }
}
export default App;
