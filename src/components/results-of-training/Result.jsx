import React from 'react';
import './results-styles.css';

export default function Result({item , index}) {
  return (
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
  )
}
