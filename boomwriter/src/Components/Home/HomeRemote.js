import React, { Component } from 'react';
import boomwriter_remote from '../../img/boomwriter_remote.png';
import boomwriter_students from '../../img/boomwriter_students.png';

class HomeRemote extends Component{

    render(){
        return(
            <div className="container-fluid text-center mt-5 mb-5">
                <div className="row border">
                    <div className="col p-5 ">
                        <h2>BoomWriter Remote Teaching</h2>
                        <p>These resources should help you deliver impactful remote learning activities through BoomWriter. Download them now for free!</p>
                        <img src={boomwriter_remote} width="270px" />
                        <div className="container d-flex flex-column justify-content-center mt-5">
                            <div className="container d-flex flex-row justify-content-center">
                                <button type="button" className="btn btn-outline-primary btn-sm">Remote teaching guide</button>
                                <button type="button" className="btn btn-outline-primary btn-sm">Student onboarding</button>
                            </div>
                            <div className="container">
                                <button type="button" className="btn btn-primary btn-sm mt-3">Watch out our video on remote learning</button>
                            </div>
                        </div>
                    </div>
                    <div className="col bg-info p-5 d-flex flex-column justify-content-center">
                        <div className="container">
                            <h2>BoomWriter Student Journals</h2>
                            <p>Your 'go-go' place for students to write about anything and everything!</p>
                            <div className="mb-3">
                                <img src={boomwriter_students} width="270px" />
                            </div>
                            <button type="button" className="btn btn-secondary btn-sm ">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeRemote;