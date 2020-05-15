import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Tools from './Tools';
import Pricing from './Pricing';


class Routes extends Component{

    render(){
        return(
            <div>
                <Switch>
                    <Route exact path='/' render={() => <Home name='home'/>} />
                    <Route exact path='/home' render={() => <Home name='home'/>} />
                    <Route exact path='/tools' render={() => <Tools name='activities'/>} />
                    <Route exact path='/pricing-plus' render={() => <Pricing name='pricing-plus'/>} />
                </Switch>
            </div>
        )
    }


}

export default Routes;

