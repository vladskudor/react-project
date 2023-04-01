import React, {Component} from 'react';
import axios from 'axios';
import './main-styles.css';
import {Link} from 'react-router-dom';
import Vcomponent from './Vcomponent';

export default class Tcomponent extends Component {
    constructor(props) {
        super(props);
        let days = JSON.parse(localStorage.getItem('days'));
        this.state = {
            days: days ? days : []
        };
        this.newDayTraining = this.newDayTraining.bind(this);
        this.requestAPI = this.requestAPI.bind(this);
    }

    async componentDidMount() {
        let training = localStorage.getItem('training');
        let currentTraining = localStorage.getItem('currentTraining');
        if (!training && !currentTraining) {
            localStorage.setItem('training', JSON.stringify({
                "day": 1,
                "nameTraining": "press",
                "numberOfSets": "5",
                "numberOfRepetitions": "10-15"
            }));
            localStorage.setItem('currentTraining', JSON.stringify({
                "day": 1,
                "nameTraining": "press",
                "numberOfSets": "5",
                "numberOfRepetitions": "10-15"
            }));
        }

    }

    requestAPI = async () => {
        let data = {
            currentTraining: JSON.parse(localStorage.getItem('currentTraining')),
            results: JSON.parse(localStorage.getItem('results')),
            weight: JSON.parse(localStorage.getItem('weight')),
            repetition: JSON.parse(localStorage.getItem('repetition')),
            training: JSON.parse(localStorage.getItem('training')),
            day: JSON.parse(localStorage.getItem('days')),
        };
        try {
            await axios.post(`http://localhost:9000/exercises`, {body: data});
        } catch (err) {
            console.log(err);
        }
    };

    newDayTraining() {
        this.setState({days: [...this.state.days, this.state.days.length++]});
        localStorage.setItem('days', JSON.stringify(this.state.days))
    }

    render() {
        return (
            <div className="main-content">
                <div className="main-block">
                    <div className="block-title">
                        <div>
                            <div>
                                <h1 onClick={this.requestAPI}>online training</h1>
                            </div>
                            <div>
                                <p>free workout program</p>
                            </div>
                            <div>
                                <p>
                                    <Vcomponent />
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="button-block">
                        <Link onClick={this.newDayTraining} to="/days-training" className='link'>start training</Link>
                    </div>
                </div>
            </div>
        )
    }
}
