import React, { Component } from 'react'
import toolkit_writingapp from '../../img/toolkit_writingapp.png';
import toolkit_asignments from '../../img/toolkit_asignments.png';
import toolkit_journals from '../../img/toolkit_journals.png';
import toolkit_stories from '../../img/toolkit_stories.png';

class HomeToolkit extends Component{

    render(){
        return(
            <div className="container-fluid bg-light">
                <div className="container-fluid m-3 p-3">
                    <div className="row text-center">
                        <div className="col-12">
                            <img src={toolkit_writingapp} height="175px" />
                            <h2>Our writing app tool kit</h2>
                            <h5>For all fiction, non-fiction and vocabulary-focused writing activities</h5>
                        </div>
                    </div>
                    <div className="row text-center m-3">
                        <div className="col-sm bg-white">
                            <img src={toolkit_stories} height="175px" />
                            <h2>Stories</h2>
                            <h5>Let your class collaborate to create an original story that can be published into a softcover book and personalized for each student!</h5>
                        </div>
                        <div className="col-sm bg-white">
                            <img src={toolkit_asignments} height="175px" />
                            <h2>Assignments</h2>
                            <h5>Use this flexible writing app to engage students while conducting short or long-term group writing activities in any subject.</h5>
                        </div>
                        <div className="col-sm bg-white">
                            <img src={toolkit_journals} height="175px" />
                            <h2>Journals</h2>
                            <h5>Engage your students in consistent writing. BoomWriter Student Journals are your ‘go-to’ place for students to write about anything and everything!</h5>
                        </div>
                    </div>
                </div>
                </div> 
        )
    }

}

export default HomeToolkit;