import {SET_CHARACTER_FILMS} from "./actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type){
        case SET_CHARACTER_FILMS:
            return action.films ////sort them by episode ID
                .sort((s, e) =>
                s.episode_id - e.episode_id
            );
        default:
            return  state
    }
}

