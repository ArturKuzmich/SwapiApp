import React, {Suspense, lazy} from "react";
import {Switch, Route} from 'react-router-dom'
// import PlanetList from "./components/planet_list/planet_list";
// import PlanetDetails from "./components/planet_details/planet_details";
import HomePage from "./components/homepage/homepage";
import Loading from "./components/loading/loading";
// import CharacterList from "./components/characters/characters.list";

const PlanetDetails = lazy(
    () => import("./components/planet_details/planet_details"));
const PlanetList = lazy(
    ( ) => import('./components/planet_list/planet_list')
)
const CharacterList = lazy(
    ( ) => import('./components/characters/characters.list')
)
export default () => {
    return (
        <Suspense fallback={<Loading />}>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/characters'>
                    <Suspense fallback={<Loading />}>
                        <CharacterList/>
                    </Suspense>
                </Route>
                <Route exact path='/planets'>
                    <Suspense fallback={<Loading />}>
                        <PlanetList/>
                    </Suspense>
                </Route>
                <Route exact path='/planets/:id'>
                    <Suspense fallback={<Loading />}>
                        <PlanetDetails/>
                    </Suspense>
                </Route>
            </Switch>
        </Suspense>
    )
}