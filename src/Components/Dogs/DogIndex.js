import React, { Component } from "react";
// import { Button } from "reactstrap";


class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dogPicture: "",
        };
    }

    fetchDog() {
        const apiUrl = `https://dog.ceo/api/breeds/image/random`;
        fetch(apiUrl) 
        .then ((res) => res.json()
        .then((json) => {
            this.setState({
                dogPicture: json.message, dogStatus: json.status});
                console.log(json)
        }) 
        .catch((err) => console.log(err))
        );
    }

    componentDidMount() {
        this.fetchDog();
    }

    render() {
        return (
            <div>
                <button onClick= {() => this.fetchDog()}>
                New Dog!
                </button>  
                <p>
                <img alt={this.state.dogPicture} src={this.state.dogPicture}></img>
                </p>          
            </div>
        );
    }
}

export default DogIndex;