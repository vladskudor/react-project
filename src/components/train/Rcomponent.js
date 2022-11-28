import React, {Component} from 'react';
import Tcomponent from './Tcomponent';
import SMcomponent from './SMenucomponent';
import './train-styles.css';
import {Link} from 'react-router-dom';

export default class Rcomponent extends Component {
    constructor(props) {
        super(props)
        let results = JSON.parse(localStorage.getItem('results'));
        this.state = {
            obj: results ? results : [],
            amountDone: 0
        }
        this.done = this.done.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({amountDone: e.target.value});
    }

    done() {
        let training = JSON.parse(localStorage.getItem('training'));
        // let results = localStorage.getItem('results');
        // let days = JSON.parse(localStorage.getItem('days'));
        let repetition = JSON.parse(localStorage.getItem('repetition'));
        let trainingResult = {
            nameOfTraining: training.nameTraining,
            numberOfSets: training.numberOfSets,
            numberOfRepetitions: training.numberOfRepetitions,
            day: training.day,
            date: {
                day: new Date().getDay(),
                month: new Date().getMonth(),
                year: new Date().getFullYear(),
            },
            amountDone: this.state.amountDone,
            repetitionDone: repetition,
            img: training.img
        };
        const obj = [...this.state.obj , trainingResult];
        this.setState({obj: obj});
        console.log(obj);
        localStorage.setItem('results', JSON.stringify(obj))
    }

    render() {
        return (
            <div className="exercise">
                <div className="exercise-main-block">
                    <div>
                        <h1>
                            <div>
                                <Tcomponent/>
                            </div>
                        </h1>
                    </div>
                    <div className="exercise-block-action">
                        <div className="block-action-title">
                            <SMcomponent />
                        </div>
                        <div>
                            <label for="number">
                                <input value={this.state.amountDone} onChange={this.onChangeHandler} id="number" min="0"
                                       type="number"/>
                                <Link className="link" to="/result">
                                    <button onClick={this.done}>
                                        Done
                                    </button>
                                </Link>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
