const defaultState = {// Current state
    weight: 70
};

export const weightReduser = (state = defaultState , action) => {//Function contains previous state
    switch(action.type){
        case 'ADD_WEIGHT':
            return {...state , weight: state.weight + action.payload};
        case 'GET_WEIGHT':
            return {...state , weight: state.weight - action.payload};
        default:
            return state
    }
};