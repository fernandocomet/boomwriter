import React, { Component } from 'react';
import classroom_grading from '../../img/classroom_grading.png';
import classroom_writing from '../../img/classroom_writing.png';
import classroom_voting from '../../img/classroom_voting.png';
import classroom_reading from '../../img/classroom_reading.png';

class HomeCompleteClassroom extends Component{

    render(){
        return(
            <div className="container text-center">
                <h1>A complete classroom literacy solution</h1>
                <div className="row text-white mb-5 d-flex flex-column flex-sm-row">
                    <div className="col bg-danger">
                        <img src={classroom_writing} height="100px" />
                        <h2>Writing</h2>
                        <p>Get the best from your writers in <span class="fontWeight-bold">any subject</span></p>
                        <i class="fas fa-play-circle fa-3x"></i>
                        <p>Play Video</p>
                    </div>
                    <div className="col bg-success">
                        <img src={classroom_voting} height="100px" />
                        <h2>Voting</h2>
                        <p>Embrace <span class="fontWeight-bold">Peer Appraisal</span> in your classroom</p>
                        <i class="fas fa-play-circle fa-3x"></i>
                        <p>Play Video</p>
                    </div>
                    <div className="col bg-info">
                        <img src={classroom_reading} height="100px" />
                        <h2>Reading</h2>
                        <p>Writing is only half of the literacy challenge. Using our writing app will also <span class="fontWeight-bold">enhance reading skills</span></p>
                        <i class="fas fa-play-circle fa-3x"></i>
                        <p>Play Video</p>
                    </div>
                    <div className="col bg-warning">
                        <img src={classroom_grading} height="100px" />
                        <h2>Grading</h2>
                        <p><span class="fontWeight-bold">Easy to use</span> Gradebook featuring standards-based rubrics</p>
                    </div>
                </div>
                <button type="button" class="btn btn-lg btn-outline-primary mb-5">Sign up for free as a teacher</button>
            </div>
        )
    }

}

export default HomeCompleteClassroom;