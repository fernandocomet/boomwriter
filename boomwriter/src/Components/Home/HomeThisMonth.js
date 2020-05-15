import React, { Component } from 'react'

class HomeThisMonth extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        // fetch('https://sand-schools.boomwriter.com/home/ping')
        // .then(response => response.json())
        // .then(data => console.log(data));
    }

   /* getInfo(){
        let info =[];
        let res = axios.get('https://sand-schools.boomwriter.com/home/ping', { crossdomain: true })
           
        console.log('res = ' + res);
        //info.push(res);
        //console.log(info);

        this.setState({
            data: info
        })
    }*/

    render(){
        return(
            <div className="container-fluid border bg-light">
                <div className="container text-center">
                    <h1>This month on BoomWriter</h1>
                    <div className="row text-center">
                        <div className="col bg-white">
                            <i classNAme="fas fa-pen-square fa-3x"></i>
                            <h2 className="text-secondary">XXXX</h2>
                            <h2>Writers</h2>
                        </div>
                        <div className="col bg-white">
                            <i classNAme="fas fa-book-open fa-3x"></i>
                            <h2 className="text-primary">XXXX</h2>
                            <h2>Activities</h2>
                        </div>
                        <div className="col bg-white">
                            <i classNAme="fas fa-map-marker-alt fa-3x"></i>
                            <h2 className="text-success">XXXX</h2>
                            <h2>Countries</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeThisMonth;