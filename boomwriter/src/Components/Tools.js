import React, { Component } from 'react'

class Tools extends Component{

    render(){
        return(
            
            <div className="container">
                <h1>This is Tools</h1>
                <div class="row">
                    <div class="col-2">
                    1 of 3
                    </div>
                    <div class="col-5">
                    2 of 3 (wider)
                    </div>
                    <div class="col-5">
                    3 of 3
                    </div>
                </div>
            </div>
        )
    }

}

export default Tools;