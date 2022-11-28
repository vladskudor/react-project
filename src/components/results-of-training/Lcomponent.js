import React, {Component} from 'react'
import './results-styles.css';
import {Link} from 'react-router-dom';

export default class Lcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: JSON.parse(localStorage.getItem('results')),
        }
        this.newTraining = this.newTraining.bind(this);
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
                {items && items.map((item, index) => (
                    <div className="block-current-result" key={index}>
                        <div>
                            Training: {item.nameOfTraining}
                        </div>
                        <div>
                            Day: {item.day}
                        </div>
                        <div>
                            Date: {item.date.day}.{item.date.month}.{item.date.year}
                        </div>
                        <div>
                            Number of repetitions: {item.numberOfRepetitions}
                        </div>
                        <div>
                            Number of sets: {item.numberOfSets}
                        </div>
                        <div>
                            Repetition done: {item.repetitionDone}
                        </div>
                        <div>
                            Amount done: {item.amountDone}
                        </div>
                    </div>
                ))}
                <div className="button-new-training">
                    <Link to="/">
                        <button onClick={this.newTraining}>Delete training</button>
                        <Link to="/">
                            <button>start training</button>
                        </Link>
                    </Link>
                </div>
            </div>
        )
    }
}

