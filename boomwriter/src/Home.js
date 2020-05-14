import React, { Component } from 'react';

class Home extends Component{

    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        fetch('https://sand-schools.boomwriter.com/home/ping')
        .then(response => response.json())
        .then(data => console.log(data));
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
        //let info = this.state.info
        return(
            <div>
                <h1>This is Home</h1>
            </div>
        )
    }

}


export default Home;