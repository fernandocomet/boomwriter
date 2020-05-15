import React, { Component } from 'react';
import './HomeHero.css';
import hero_teacher from '../../img/hero_teacher.png';
import hero_student from '../../img/hero_student.png';
import hero_parent from '../../img/hero_parent.png';


class HomeHero extends Component{

    render(){
        return(
            <div className="jumbotron jumbotron-fluid hero">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-4 text-center bg-light p-3">
                             <h1 className="display-4">Where students Love to Write</h1>
                             <p className="lead">The writing app for teachers to conduct remote learning activities with students.</p>
                             <p className="lead">Sign up for free:</p>
                             <div className="d-flex flex-column">
                                <button type="button" className="btn btn-outline-secondary btn-lg"><img src={hero_teacher} height="60px" />Teacher</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg"><img src={hero_student} height="60px" />Student</button>
                                <button type="button" className="btn btn-outline-secondary btn-lg"><img src={hero_parent} height="60px" />Parent</button>
                            </div>
                        </div>
                        <div className="col-8"></div>
                    </div>
                </div>
            </div>
        )
    }


}

export default HomeHero;
