import React, { Component } from 'react';
import './App.css';
import Routes from './Components/Routes';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

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
            <Routes />
            <Footer />
        </div>
      );
    }
}

export default App;
