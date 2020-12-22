import React from 'react'
import {connect} from 'react-redux'
import './style.css'


const isRequest = desc => desc && desc !== 'unknown'

const CharacterWorld = ({world}) => {
    return(
        <div className='world_list'>
            <h2>World</h2>
            {isRequest(world.name) && <div className='world_item'>Name: {world.name}</div>}
            {isRequest(world.population) && <div className='world_item'>Population: {world.population}</div>}
            {isRequest(world.diameter) &&  <div className='world_item'>Diameter: {world.diameter}</div>}
            {isRequest(world.climate) && <div className='world_item'>Climate: {world.climate}</div>}
            {isRequest(world.terrain) && <div className='world_item'>Terrain: {world.terrain}</div>}
            {isRequest(world.orbital_period) && <div className='world_item'>Orbital Period: {world.orbital_period}</div>}
            {isRequest(world.gravity) && <div className='world_item'>Gravity: {world.gravity}</div>}
        </div>
    )
}

const mapStateToProps = ({character: {world}}) => ({
    world
})

export default connect(mapStateToProps)(CharacterWorld)