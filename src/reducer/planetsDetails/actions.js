
export const SET_CURRENT_PLANET = 'SET_CURRENT_PLANET'


export function setCurrentPlanet(id) {
    return{
        type: SET_CURRENT_PLANET,
        id
    }
}
