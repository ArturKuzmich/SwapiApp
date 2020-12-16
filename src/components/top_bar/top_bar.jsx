import  React from 'react'
import './style.css'
import {NavLink, Link} from "react-router-dom";

const TopBar = () => {
    return(
        <React.Fragment>
            <nav className='top_bar'>
                <Link to='/'>Swapi App</Link>
                <ul className="bar_navigation">
                    <li className='navigation_item'>
                        <NavLink exact activeClassName="selected" to='/'>Home</NavLink>
                    </li>
                    <li className='navigation_item'>
                        <NavLink  activeClassName="selected" to='/characters'>Characters</NavLink>
                    </li>
                    <li className='navigation_item'>
                        <NavLink activeClassName="selected" to='/planets'>Planets</NavLink>
                    </li>
                </ul>
            </nav>

        </React.Fragment>
    )
}


export default TopBar
