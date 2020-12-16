import {SET_CURRENT_PLANET} from './actions'

const initialState = null

export  default (state= initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_PLANET:
            return action.id
        default:
            return state
    }
}