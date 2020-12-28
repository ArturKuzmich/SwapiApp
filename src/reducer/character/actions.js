import {API_URL} from "../../constants";
export const SET_CHOOSED_CHARACTER = 'SET_CHOOSED_CHARACTER';
export const SET_CHOOSED_PROFILE = 'SET_CHOOSED_PROFILE';
export const SET_CHARACTER_WORLD = 'SET_CHARACTER_WORLD';
export const SET_CHARACTER_FILMS = 'SET_CHARACTER_FILMS';

export function getChoosedProfile(id) {
    return dispatch => {
        fetch(`${API_URL}/people/${id}`)
            .then(res => res.json())
            .then(profile => {
                dispatch(setChoosedProfile(profile))
                dispatch(getCharacterWorld(profile.homeworld));
                dispatch(getCharacterFilms(profile.films))
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
export function getCharacterFilms(filmsUrl){
    return dispatch =>
        Promise.all(filmsUrl.map(filmUrl =>
            fetch(filmUrl)
                .then(res => res.json())
        ))
            .then(films =>
                dispatch(setCharacterFilms(films))
            )
}

export function setCharacterFilms(films){
    return {
        type: SET_CHARACTER_FILMS,
        films
    }
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