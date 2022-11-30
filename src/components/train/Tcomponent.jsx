import React ,{ useEffect } from 'react';
import './train-styles.css';
import {useParams} from 'react-router-dom';

export default function Tcomponent() {
    const {day , nameTraining , numberOfSets , numberOfRepetitions} = useParams();
    const objTraining = {
            day: day,
            nameTraining: nameTraining,
            numberOfSets: numberOfSets,
            numberOfRepetitions: numberOfRepetitions
        };
    useEffect(() => {
       localStorage.setItem('training' , JSON.stringify(objTraining));
    });
    return (
        <div>
            <div className="training-info">
                <div>
                    {nameTraining}
                </div>
            </div>
            <div className="training-info">
                <div>
                    day-
                </div>
                <div>
                    {day}
                </div>
            </div>
            <div className="training-info">
                <div>
                    number of sets:
                </div>
                <div>
                    {numberOfSets}
                </div>
            </div>
            <div className="training-info">
                <div>
                    number of Repetiotions:
                </div>
                <div>
                    {numberOfRepetitions}
                </div>
            </div>
        </div>

    )


}
