import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import boomwriter from '../img/boomwriter.png';


class Navbar extends Component{

    render(){

  /*
  1. boomwriter homepage: https://boomwriter.com
  2. boomwriter activities: https://boomwriter.com/tools
  3. boomwriter pricing: https://boomwriter.com/pricing-plus
  */

        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
            <img src={boomwriter} width="130" className="d-inline-block align-top" alt="Boomwriter" loading="lazy" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/tools">Activities</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/pricing-plus">Pricing</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-grey my-2 my-sm-0" type="submit">Login</button>
                <button className="btn btn-success my-2 my-sm-0" type="submit">Join</button>
                </form>
            </div>
            </nav>
        )
    }

}

export default Navbar;