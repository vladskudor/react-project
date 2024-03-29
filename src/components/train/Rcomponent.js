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
        let repetition = JSON.parse(localStorage.getItem('repetition'));
        let currentTraining = JSON.parse(localStorage.getItem('currentTraining'));
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

        if (!repetition || this.state.amountDone === 0) return;

        const obj = [...this.state.obj , trainingResult];
        this.setState({obj: obj});
        if (repetition === '10-approach'){
            if(training.day === 10){
                alert('Done');
                training.day = 0;
                localStorage.setItem('training' , JSON.stringify(training));
            }
            training.day++;
            localStorage.setItem('currentTraining' , JSON.stringify(training));
            localStorage.setItem('training' , JSON.stringify(training));
        }
        localStorage.setItem('results', JSON.stringify(obj));
    }

    render() {
        return (
            <div className="exercise">
                <div className="exercise-main-block">
                    <h1>You need to do!</h1>
                    <div>
                        <h1>
                            <Tcomponent />
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
