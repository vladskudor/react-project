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
       console.log(objTraining);
    });
    return (
        <div>
            <div>
                day-{day}
            </div>
            <div>
                training {nameTraining}
            </div>
            <div>
                number of sets: {numberOfSets}
            </div>
            <div>
                number of Repetiotions: {numberOfRepetitions}
            </div>
        </div>

    )


}
