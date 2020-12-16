import  React from 'react'
import  {Switch, Route, Router} from 'react-router-dom'
import PlanetList from "./components/planet_list/planet_list";
import Planet from "./components/planet/planet";
import PlanetDetails from "./components/planet_details/planet_details";
import { createBrowserHistory } from "history";
import HomePage from "./components/homepage/homepage";
import CharacterList from "./components/characters/characters.list";

const history = createBrowserHistory();

export default  () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/characters' component={CharacterList} exact/>
                <Route path='/planets' component={PlanetList} exact />
                <Route path='/planets/:id' component={PlanetDetails} />
            </Switch>
        </Router>


    )
}