import {
    CHANGE_STATE,
    buttonStates
} from '../constants';


export const change_state = nextState => {

    return (dispatch, getState) => {

        if(nextState == null){
            const buttonReducer = getState().buttonReducer;

            let nextState;
            switch (buttonReducer.currentState) {
                case buttonStates.FIGHT:
                    return dispatch( change_state2( buttonStates.CANCEL ) );

                case buttonStates.CANCEL:

                    return dispatch( change_state2( buttonStates.IN_MATCH ) );

                case buttonStates.IN_MATCH:
                    return dispatch( change_state2( buttonStates.CLAIM ) );

                case buttonStates.CLAIM:
                    return dispatch( change_state2( buttonStates.FIGHT) );
            }
        }
        else
            return dispatch( change_state2(nextState) );


    };
}

const change_state2 = stateName => {

    return {
        type: CHANGE_STATE,
        payload: stateName
    };
}
