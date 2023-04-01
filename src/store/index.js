import {createStore , combineReducers} from 'redux';
import {weightReduser} from './weightReduser';
import {customReduser} from './customerReduser'

const rootReduser = combineReducers({
    weight: weightReduser,
    customers: customReduser
});

export const store = createStore(rootReduser);

