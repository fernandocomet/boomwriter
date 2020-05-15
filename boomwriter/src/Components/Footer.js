import React, { Component } from 'react'
import boomwritermedia from '../img/boomwritermedia.png';

class Footer extends Component{

    render(){
        return(
            <div className="card text-center bg-dark text-white">
                <div className="card-body">
                    <img src={boomwritermedia} width="120" className="d-inline-block align-top" alt="Boomwriter" loading="lazy" />
                    <p><a href='#'>About us</a> | <a href='#'>Blog</a> | <a href='#'>Privacy Policy</a> | <a href='#'>Terms of use</a> | </p>
                    <p>BoomWriter Media Inc. - info@boomwriter.com | Website and contents © 2010-2020 BoomWriter Media Inc. All rights reserved.</p>
                    <a href="#" className="btn btn-primary">Check our remote resources</a>
                </div>
            </div>
        )
    }

}

export default Footer;
