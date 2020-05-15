import React, { Component } from 'react';
import award_podium from '../../img/award_podium.png';
import award_stamp1 from '../../img/award_stamp1.png';
import award_stamp2 from '../../img/award_stamp2.png';
import award_stamp3 from '../../img/award_stamp3.png';

class HomeAwardWinning extends Component{

    render(){
        return(
            <div className="container mt-5">
                <div className="d-flex justify-content-center tex-center">
                    <img src={award_podium} width="130px" />
                </div>
                <h1 className="text-center mt-5">BoomWriter is an award-winning writing app</h1>
                <div className="row">
                    
                    <div className="col d-flex justify-content-center mt-5">
                        <div className="text-center mr-5">
                            <img src={award_stamp1} width="60px" />
                        </div>    
                        <div className="text-center mr-5 ml-5">
                            <img src={award_stamp2} width="130px" />
                        </div>
                        <div className="text-center ml-5 mb-5">
                            <img src={award_stamp3} width="85px" />
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }

}

export default HomeAwardWinning;