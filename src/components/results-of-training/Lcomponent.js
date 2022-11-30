import React, {Component} from 'react'
import './results-styles.css';
import {Link} from 'react-router-dom';

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
                        <div className="block-current-result" key={index}>
                            <div className="trining-Info-block">
                                Training: {item.nameOfTraining}
                            </div>
                            <div className="trining-Info-block">
                                <div>Day: </div>
                                <div>{item.day}</div>
                            </div>
                            <div className="trining-Info-block">
                                <div>Date: </div>
                                <div>{item.date.day}.{item.date.month}.{item.date.year}</div>
                            </div>
                            <div className="trining-Info-block">
                                <div>Number of repetitions: </div>
                                <div>{item.numberOfRepetitions}</div>
                            </div>
                            <div className="trining-Info-block">
                                <div>Number of sets: </div>
                                <div>{item.numberOfSets}</div>
                            </div>
                            <div className="trining-Info-block">
                                <div>Repetition done:</div>
                                <div>{item.repetitionDone}</div>
                            </div>
                            <div className="trining-Info-block">
                                <div>Amount done: </div>
                                <div>{item.amountDone}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="button-new-training">
                    <Link to="/">
                        <button onClick={this.newTraining}>Delete</button>
                        <Link to="/">
                            <button>start</button>
                        </Link>
                    </Link>
                </div>
            </div>
        )
    }
}

