import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { createBrowserHistory } from "history";
import Routes from './routes'
import {getPlanets} from "./reducer/planets/actions";
import thunk from "redux-thunk";
import  reducer from './reducer'
import {getCharacters} from "./reducer/characters/actions";
import TopBar from "./components/top_bar/top_bar";
import './style.css'



const history = createBrowserHistory();

const store = createStore( reducer, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch(getCharacters());
store.dispatch(getPlanets())


const App = () => {
     return(
         <div className='app_container'>
             <Router history={history}>
                 <TopBar />
                 <Routes />
             </Router>
         </div>
     )
 }
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
