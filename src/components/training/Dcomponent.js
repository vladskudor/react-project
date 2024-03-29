import React, {Component} from 'react';
import './training-styles.css';
import img1 from './images-traning/1.jpg'
import img2 from './images-traning/2.jpg'
import img3 from './images-traning/3.jpg'
import img4 from './images-traning/4.jpg'
import img5 from './images-traning/5.jpg'
import img6 from './images-traning/6.jpg'
import img7 from './images-traning/7.jpg'
import img8 from './images-traning/8.jpg'
import img9 from './images-traning/9.jpg'
import img10 from './images-traning/10.jpg'
import Train from './Train';

export default class Dcomponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: [
                {
                    day: 1,
                    nameTraining: 'triceps pull block',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img1
                },
                {
                    day: 2,
                    nameTraining: 'thrust of the vertical block',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img2
                },
                {
                    day: 3,
                    nameTraining: 'standing barbell press',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img3
                },
                {
                    day: 4,
                    nameTraining: 'bench press',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img4
                },
                {
                    day: 5,
                    nameTraining: 'barbell triceps lift',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img5
                },
                {
                    day: 6,
                    nameTraining: 'hyperextension',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img6
                },
                {
                    day: 7,
                    nameTraining: 'barbell squats',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img7
                },
                {
                    day: 8,
                    nameTraining: 'leg compressions in the gym',
                    numberOfSets: 5,
                    numberOfRepetitions: 10,
                    img: img8
                },
                {
                    day: 9,
                    nameTraining: 'rise to',
                    numberOfSets: 5,
                    numberOfRepetitions: '10-12',
                    img: img9
                },
                {
                    day: 10,
                    nameTraining: 'press',
                    numberOfSets: 5,
                    numberOfRepetitions: '10-15',
                    img: img10
                },
            ]
        }
    }

    componentDidMount() {
        let training = JSON.parse(localStorage.getItem('training')) || {};
        localStorage.setItem('currentTraining', JSON.stringify(training));
        const {days} = this.state;
        let typeTrining;
        days.forEach((day) => {
            if (day === training.day) {
                typeTrining = day;
                localStorage.setItem('currentTraining', JSON.stringify(typeTrining));
            }
        })
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
                                       <Train item={item} index={index} /> 
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
