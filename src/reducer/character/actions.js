import {API_URL} from "../../constants";
export const SET_CHOOSED_CHARACTER = 'SET_CHOOSED_CHARACTER';
export const SET_CHOOSED_PROFILE = 'SET_CHOOSED_PROFILE'
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD'

export function getChoosedProfile(id) {
    return dispatch => {
        fetch(`${API_URL}/people/${id}`)
            .then(res => res.json())
            .then(profile => {
                console.log('profile',profile)
                dispatch(setChoosedProfile(profile))
                dispatch(getCharacterWorld(profile.homeworld));
            })
    }
}
export function getCharacterWorld(url){
    return dispatch =>
        fetch(url)
            .then(res => res.json())
            .then(world =>
                dispatch(setCharacterWorld(world))
            )
}
export function setCharacterWorld(world){
    return{
        type: SET_CHARACTER_WORLD,
        world
    }
}
export function setChoosedProfile(profile) {
    return{
        type: SET_CHOOSED_PROFILE,
        profile
    }
}

export function setChoosedCharacter(id) {
    return {
        type: SET_CHOOSED_CHARACTER,
        id,
    };
}