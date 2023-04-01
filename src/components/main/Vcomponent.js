import React, {useState, useEffect} from 'react'

export default function Vcomponent() {
    let [weight, getWeight] = useState(false);

    useEffect(() => {
        getWeight(JSON.parse(localStorage.getItem('weight')));
    }, [weight]);
    return (
        <div style={{color: '#000'}}>
            {weight &&
                <div>
                    Your current weight <b style={{color: '#fff'}}>{weight}</b> kilograms
                </div>}
        </div>
    )
}
