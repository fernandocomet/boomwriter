import React, { Component } from 'react';
import computer from '../../img/computer.png';
import jana from '../../img/jana.jpg';
import read from '../../img/read.png';

class HomePublishedAuthors extends Component{

    render(){
        return(
            <div className="container-fluid border mt-5 mb-5">
                <div className="container">
                    <div className="text-center">
                        <img src={read} width="160px"/>
                    </div>
                    <div className="row mb-5">
                        <div className="col-6">
                            <h1>Turn your students into published authors</h1>
                            <p>Kick-off a collaborative writing project and let every student writer take home a copy of their book</p>
                            <button type="button" className="btn btn-outline-primary btn-lg">Start my story</button>
                        </div>
                        <div className="col-6 ">
                            <img src={computer} width="370px"/>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col">
                            <h2 className="text-center">With story start for all abilities</h2>
                        </div>
                    </div>
                    <div className="row mt-5 mb-5">
                        <div className="col-6">
                            <img src={jana} width="150px" />
                            {/* style={border-radius: 50%} */}
                            <h2>Jamal Joseph</h2>
                            <p>Black Panter & Poet</p>
                        </div>
                        <div className="col-6">
                            <p>Our curated and expansive collection of story starts are created by an ever-growing assortment of renowned authors and personalities. All accessible in our writing app.</p>
                            <button type="button" className="btn btn-outline-primary btn-lg">Join now to access story starts</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }

}

export default HomePublishedAuthors;