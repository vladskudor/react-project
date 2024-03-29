import React, {Component} from 'react';
import Lcomponent from './components/results-of-training/Lcomponent';
import Dcomponent from './components/training/Dcomponent';
import Rcomponent from './components/train/Rcomponent';
import Maincomponent from './components/main/Maincomponent';
import Weight from './components/weight/Weight';
import Signup from './components/signup/Signup';

import {
    Route,
    Routes,
} from 'react-router-dom';

export default class Mcomponent extends Component {
    render() {
        return (
            <div>
                <Routes>
                    <Route path="/" element={ <Maincomponent />}></Route>
                    <Route path="/signup" element={ <Signup />}></Route>
                    <Route path="/days-training" element={< Dcomponent />}></Route>
                    <Route path="/train/:day/:nameTraining/:numberOfSets/:numberOfRepetitions" element={< Rcomponent />}></Route>
                    <Route path="/result" element={ <Lcomponent />}></Route>
                    <Route path="/weight" element={ <Weight />}></Route>
                </Routes>
            </div>
        )
    }
}
