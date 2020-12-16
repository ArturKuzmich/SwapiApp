import {API_URL} from '../../constants'

export const SET_PLANETS = 'SET_PLANETS'

export function  getPlanets() {
    return dispatch => {
        fetch(`${API_URL}/planets`)
            .then(res => res.json())
            .then(res => res.results)
            .then( planets =>
                dispatch(setPlanets(planets)
                )
            )
    }

}

export   function setPlanets(planets) {
    return {
        type: SET_PLANETS,
         planets
    }
}

