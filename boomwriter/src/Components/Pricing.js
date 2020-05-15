import React, { Component } from 'react'
import './Pricing.css';

class Pricing extends Component{

    render(){
        return(
            <div className="container-fluid">
            <h1 className="text-center mt-3 mb-3">BoomWriter Pricing</h1>
                <div className="row">
                    <div className="col">
                    
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center mb-3 d-flex justify-content-center">
                        <button type="button" class="btn btn-primary btn-lg mr-3">Teachers</button>
                        <button type="button" class="btn btn-outline-primary btn-lg ml-3">Schools</button>
                    </div>
                </div>
                <div className="container-fluid bg-light">
                    <div className="container">
                    <div className="row">
                        <div className="col text-center mb-3">
                        BoomWriter is committed to providing teachers unlimited free access to our tools. We also provide additional feature upgrades to better support teachers' in-school and remote teaching efforts.
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col bg-white">
                            <h4 className="p-3 bg-success text-white">Free</h4>
                            <ul>
                                <li>Unlimited number of BoomWriter Writing activities (Stories, Assignments, Student Journals)</li>
                                <li>Unlimited number of students</li>
                                <li>Unlimited number of classes</li>
                                <button type="button" class="btn btn-primary btn-sm mt-3 p-2">Get started</button>
                            </ul>
                        </div>
                        <div className="col bg-white">
                            <h4 className="p-3 bg-info text-white">Basic – $5/month</h4>
                            <ul className="list-unstyled fa-ul">
                                <li>Everything included in the Free version, plus:</li>
                                <li><span class="fa-li"><i class="fas fa-clipboard-check"></i></span>Standard-based grading system to measure your students’ performance
                                    <p><a href="#">View Sample Rubrics</a></p></li>
                                <li><span class="fa-li"><i class="fas fa-file-pdf"></i></span>PDF creation of student work to digitally share or print
                                <p><a href="#">PDF Print Sample</a></p></li>
                                <li><span class="fa-li"><i class="fas fa-plus-square"></i></span>Duplicate existing assignments to use in your other classes</li>
                                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Families receive a 10% discount on purchases of student stories or journals
                                    <p>*7-day free trial</p></li>
                                <button type="button" class="btn btn-primary btn-sm mt-3 p-2">Get started</button>    
                            </ul>
                        </div>
                        <div className="col bg-white">
                            <h4 className="p-3 bg-dark text-white">Complete – $20/month</h4>
                            <ul className="list-unstyled fa-ul">
                                <li>Everything included in the Free version, plus:</li>
                                <li><span class="fa-li"><i class="fas fa-clipboard-check"></i></span>Standard-based grading system to measure your students’ performance
                                <p><a href="#">View Sample Rubrics</a></p></li>
                                <li><span class="fa-li"><i class="fas fa-file-pdf"></i></span>PDF creation of student work to digitally share or print
                                <p><a href="#">PDF Print Sample</a></p></li>
                                <li><span class="fa-li"><i class="fas fa-plus-square"></i></span>Duplicate existing assignments to use in your other classes</li>
                                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Families receive a 10% discount on purchases of student stories or journals</li>
                                <li><span class="fa-li"><i class="fab fa-whatsapp"></i></span>In-app chat allowing teachers to communicate with their students in real-time</li>
                                <li><span class="fa-li"><i class="fas fa-chalkboard-teacher"></i></span>Multiple teachers can collaborate on writing activities.</li>
                                <li><span class="fa-li"><i class="fas fa-user-graduate"></i></span>Students can provide teacher guided feedback to other classmates’ work (Coming soon)
                                <p>*7-day free trial</p></li>
                                <button type="button" class="btn btn-primary btn-sm mt-3 p-2">Get started</button>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Pricing;