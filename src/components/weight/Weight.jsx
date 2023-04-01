import {React , useState , useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import Button from 'react-bootstrap/Button';
import './weight-styles.css';

export default function Weight() {
    const dispatch = useDispatch(); //hook allows to change state
    const weight = useSelector(state => state.weight.weight);
    let [weightValue , getWeightValue] = useState(0);

    const increaseWeight = () => {
        dispatch({type: "ADD_WEIGHT" , payload: 1});
        console.log(weight);
        saveWeight();
        getWeightValue(() => JSON.parse(localStorage.getItem('weight')));
    };

    const reduceWeight = () => {
        dispatch({type: "GET_WEIGHT" , payload: 1});
        console.log(weight);
        saveWeight();
        getWeightValue(() => JSON.parse(localStorage.getItem('weight')));
    };

    const saveWeight = () => {
        let weightVal = JSON.parse(localStorage.getItem('weight'));
        weightValue = weight;
        localStorage.setItem('weight' , JSON.stringify(weightValue));
    };

    useEffect(() => {
        getWeightValue(() => JSON.parse(localStorage.getItem('weight')));
    } , [weightValue]);

    return (
        <div>
            <div style={{color: 'grey' , marginTop: '100px' , textTransform: 'uppercase'}}>
                <h1>Current weight <b>{weightValue}</b> kilograms</h1>
            </div>
            <div className="block-buttons">
                <Button variant="primary" onClick={() => increaseWeight()}>
                    + 1kg
                </Button>
                <Button onClick={() => reduceWeight()}>
                    - 1kg
                </Button>
            </div>
        </div>
    )
}
