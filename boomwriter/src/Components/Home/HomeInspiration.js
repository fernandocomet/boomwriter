import React, { Component } from 'react';
import inspiration from '../../img/inspiration.png';

class HomeInspiration extends Component{

    render(){
        return(
            <div className="container-fluid bg-white mt-5 mb-5">
                <div className="container">
                    <div className="row flex-column flex-sm-row">
                        <div className="col">
                            <h1>BoomWriter inspires students to write on any subject.</h1>
                            <p>Try it for ELA, Social Studies/History, Science and even Math. Plus, it can be used on any device.</p>
                            <button type="button" className="btn btn-lg btn-outline-primary">Sign up for free as a teacher</button>
                        </div>
                        <div className="col">
                            <img src={inspiration} height="250px" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeInspiration;