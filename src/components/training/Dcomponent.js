import React, {Component} from 'react';
import './training-styles.css';
import {Link} from 'react-router-dom';

export default class Dcomponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            days: JSON.parse(localStorage.getItem('days'))
        }
    }

    render() {
        const {days} = this.state;
        return (
            <div className="block-training-days">
                <div className="block-day">
                    <div className="day">
                        <div>
                            <div>
                                <h3>Days training</h3>
                            </div>
                            <div className='current-day'>
                                {days.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <div className="days-route">
                                                <Link className="enter-day"
                                                      to={`/train/${index + 1}`}>{index + 1}</Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
