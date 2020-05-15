import React, { Component } from 'react'

class HomeThisMonth extends Component{

    constructor(props){
        super(props)
        this.state = {
            writers:'',
            activities:'',
            countries:''
        }
        //this.initialSet = this.initialSet.bind(this);
    }

    componentDidMount(){
        fetch('https://sand-schools.boomwriter.com/home/ping')
        .then(response => response.json())
        //.then(data => console.log(data))
        .then(foobar => this.setState({
            writers: foobar.writers,
            activities: foobar.activities,
            countries: foobar.countries
        }))
    }



    render(){
        return(
            <div className="container-fluid border bg-light">
                <div className="container text-center">
                    <h1>This month on BoomWriter</h1>
                    <div className="row text-center">
                        <div className="col bg-white">
                            <i className="fas fa-pen-square fa-3x"></i>
                            <h2 className="text-secondary">{this.state.writers}</h2>
                            <h2>Writers</h2>
                        </div>
                        <div className="col bg-white">
                            <i className="fas fa-book-open fa-3x"></i>
                            <h2 className="text-primary">{this.state.activities}</h2>
                            <h2>Activities</h2>
                        </div>
                        <div className="col bg-white">
                            <i className="fas fa-map-marker-alt fa-3x"></i>
                            <h2 className="text-success">{this.state.countries}</h2>
                            <h2>Countries</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomeThisMonth;