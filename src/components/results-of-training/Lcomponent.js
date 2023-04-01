import React, {Component} from 'react'
import './results-styles.css';
import {Link} from 'react-router-dom';
import Result from './Result';

export default class Lcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: JSON.parse(localStorage.getItem('results')),
            serverData: []
        }
        this.newTraining = this.newTraining.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:4000/exercises")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        serverData: result
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded: true,
                        error: error
                    });
                }

            )
    }

    newTraining(){
        localStorage.removeItem('repetition');
        localStorage.removeItem('currentTraining');
        localStorage.removeItem('training');
        localStorage.removeItem('results');
        localStorage.removeItem('days');
    }

    render() {
        const {items} = this.state;
        return (
            <div className="block-results">
                <div>
                    <h1>results</h1>
                </div>
                <div className="list-results">
                    {items && items.map((item, index) => (
                      <Result key={index} item={item}/>  
                    ))}
                </div>
                <div className="button-new-training">
                    <Link to="/">
                        <button onClick={this.newTraining}>Delete</button>
                    </Link>
                    <Link to="/">
                        <button>start</button>
                    </Link>
                </div>
            </div>
        )
    }
}

