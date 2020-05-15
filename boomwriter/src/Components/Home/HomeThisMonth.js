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
            <div className="container-fluid border">
                <div className="container">
                    <h1>This is HomeThisMonth</h1>
                    <div className="row">
                        <div className="col">
                        1 of 3
                        </div>
                        <div className="col">
                        2 of 3
                        </div>
                        <div className="col">
                        3 of 3
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeThisMonth;