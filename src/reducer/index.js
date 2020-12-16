import  {combineReducers } from "redux";
import planets from './planets'
import currentPlanetId from './planetsDetails'
import characters from './characters'
import character from './character'

export  default combineReducers({
    planets,
    currentPlanetId,
    characters,
    character,
})