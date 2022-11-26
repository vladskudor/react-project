import React, {Component} from 'react';
import './main-styles.css';
import {Link} from 'react-router-dom';

export default class Tcomponent extends Component {
    constructor(props) {
        super(props)
        let days = JSON.parse(localStorage.getItem('days'));
        this.state = {
            days: days ? days : [],
        };
        this.newDayTraining = this.newDayTraining.bind(this);
    }

    componentWillMount() {

    }

    newDayTraining() {
        // let days = JSON.parse(localStorage.getItem('days'));
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
                                <h1>online training</h1>
                            </div>
                            <div>
                                <p>free YouTube workout programs</p>
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
