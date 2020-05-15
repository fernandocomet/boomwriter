import React, { Component } from 'react';
import HomeHero from './Home/HomeHero';
import HomeToolkit from './Home/HomeToolkit';
import HomeInspiraton from './Home/HomeInspiration';
import HomeCompleteClassroom from './Home/HomeCompleteClassroom';
import HomeTwitterWidget from './Home/HomeTwitterWidget';
import HomeRemote from './Home/HomeRemote';
import HomeThisMonth from './Home/HomeThisMonth';
import HomePublishedAuthors from './Home/HomePublishedAuthors';
import HomeAwardWinning from './Home/HomeAwardWinning';

class Home extends Component{

    render(){
       
        return(
            <div className="container-fluid">
                <h1>This is Home</h1>
                <HomeHero />
                <HomeToolkit />
                <HomeInspiraton />
                <HomeCompleteClassroom />
                <HomeTwitterWidget />
                <HomeRemote />
                <HomeThisMonth />
                <HomePublishedAuthors />
                <HomeAwardWinning />
            </div>
        )
    }

}


export default Home;