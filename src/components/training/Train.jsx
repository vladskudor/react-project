import React from 'react';
import {Link} from 'react-router-dom';

export default function Train({item , index}) {
  let currentTraining = JSON.parse(localStorage.getItem('currentTraining'));
  return (
    <div key={index}>
        <div className="days-route">
            <div style={{textTransform: 'uppercase'}} className="enter-day">
                <div className="block-inform-of-training">
                    <div style={{color: currentTraining.day === item.day ? 'red' : '#808080'}}>
                        Day: {item.day}
                    </div>
                    <div style={{color: currentTraining.day === item.day ? 'red' : '#808080'}}>
                        {item.nameTraining}
                    </div>
                </div>
                <div>
                    <img src={item.img} alt=""/>
                </div>
                <Link style={{
                    color: currentTraining.day === item.day ? 'red' : '#808080',
                    visibility: currentTraining.day === item.day ? 'auto' : 'hidden'
                }} className="link-start"
                to={`/train/${item.day}/${item.nameTraining}/${item.numberOfSets}/${item.numberOfRepetitions}`}>
                    start
                </Link>
            </div>
        </div>
    </div>
  )
}
