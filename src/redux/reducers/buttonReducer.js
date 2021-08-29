import {
    CHANGE_STATE,
    buttonStates
} from '../constants';



const defaultState = {
    currentState: buttonStates.FIGHT
};

const reducer = (state = defaultState, action) => {

    switch (action.type) {

        case CHANGE_STATE:
            return {
                ...state,
                currentState: buttonStates[action.payload]
            };

        default:
            return {...state};

    }

};

export default reducer;
