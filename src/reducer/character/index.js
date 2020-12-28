import {combineReducers} from "redux";
import id from './id'
import profile from './profile'
import world from './world'
import films from './films'

export default combineReducers({
    id,
    profile,
    world,
    films
});