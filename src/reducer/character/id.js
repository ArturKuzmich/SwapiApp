import {SET_CHOOSED_CHARACTER} from './actions'


const initialState = 0;

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CHOOSED_CHARACTER:
            return action.id;
        default:
            return state;
    }
};