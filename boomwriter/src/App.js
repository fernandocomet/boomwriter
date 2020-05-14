import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import Navbar from './Navbar';
import Footer from './Footer';

class App extends Component{

  /*
  1. boomwriter homepage: https://boomwriter.com
  2. boomwriter activities: https://boomwriter.com/tools
  3. boomwriter pricing: https://boomwriter.com/pricing-plus
  */
  
  static defaultProps={
    menu:[
      {name: "home"}, 
      {name: "tools"},
      {name: "pricing"}
    ]
  }

  render(){
    return (
        <div className="container-fluid">
            <Navbar menu={this.props.menu} />
            <div className="container">
                <Routes />
            </div>
            <Footer />
        </div>
      );
    }
}

export default App;
