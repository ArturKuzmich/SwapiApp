import  React from 'react'
import  {Switch, Route} from 'react-router-dom'
import PlanetList from "./components/planet_list/planet_list";
import PlanetDetails from "./components/planet_details/planet_details";
import HomePage from "./components/homepage/homepage";
import CharacterList from "./components/characters/characters.list";


export default  () => {
    return (
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/characters'>
                    <CharacterList/>
                </Route>
                <Route exact path='/planets'>
                    <PlanetList/>
                </Route>

                <Route exact path='/planets/:id'>
                        <PlanetDetails/>
                </Route>
            </Switch>
    )
}