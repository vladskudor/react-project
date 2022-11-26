import React from 'react';
import './train-styles.css';
import {useParams} from 'react-router-dom';

export default function Tcomponent() {
    const {day} = useParams();
    return (
        <div>
            {day}
        </div>
    )


}
