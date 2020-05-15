import React, { Component } from 'react'
import tools_stories from '../img/tools_stories.png';
import tools_assignments from '../img/tools_assignments.png';
import tools_journals from '../img/tools_journals.png';
import tools_grading from '../img/tools_grading.png';
import './Tools.css';


class Tools extends Component{

    render(){
        return(
            
            <div className="container mb-5">
                <h1 className="mb-3">BoomWriter Activities and Features </h1>
                <div class="row">
                    <div class="col-2">
                        <div className="column">
                            <p><span className="letter bg-primary text-white mr-1">S</span>Stories</p>
                            <p><span className="letter bg-success text-white mr-1">A</span>Assignments</p>
                            <p><span className="letter bg-dark text-white mr-1">J</span>Journals</p>
                            <p><span className="letter bg-warning text-white mr-1">G</span>Grading</p>
                        </div>
                    </div>
                    <div class="col-5">
                        <div className="column mb-3">
                            <h2 className="bg-primary text-white toolbox p-2">Stories</h2>
                            <div className="d-flex bg-light">
                                <h5 className="pl-2">Group story-writing that gets published</h5>
                                <div className="pr-2">
                                    <img src={tools_stories} height="110px" />
                                </div>
                            </div>
                        </div>
                        <div className="column mb-3">
                            <h2 className="bg-dark text-white toolbox p-2">Journals</h2>
                            <div className="d-flex bg-light">
                                <h5 className="pl-2">The place where students can write consistengly about anything and everything.</h5>
                                <div className="pr-2">
                                    <img src={tools_journals} height="110px" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-5">
                        <div className="column mb-3">
                            <h2 className="bg-success text-white toolbox p-2">Assignments</h2>
                            <div className="d-flex bg-light">
                                <h5 className="pl-2">Persuasive essays informational writing, poetry, anything!</h5>
                                <div className="pr-2">
                                    <img src={tools_assignments} height="110px" />
                                </div>
                            </div>
                        </div>
                        <div className="column mb-3">
                            <h2 className="bg-warning text-white toolbox p-2">Grading</h2>
                            <div className="d-flex bg-light">
                                <h5 className="pl-2">Built-in Grading System</h5>
                                <div className="pr-2">
                                    <img src={tools_grading} height="110px" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Tools;