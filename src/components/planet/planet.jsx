import React from 'react'
import './planet.css'

const Planet = ({planet}) => {
    return(
        <div className="planet_items">

                <div className="about_planet">
                   Planet Name:
                    <span className="name">{planet.name}</span>
                </div>
                <div className="about_planet ">
                   Planet Climate:
                    <span className="climat">{planet.climate}</span>
                </div>
                <div className="about_planet">
                   Planet Population:
                    <span className="population">
                        { planet.population === "unknown" ? 'Not populated' : planet.population}
                    </span>
                </div>
        </div>
    )
}

export  default Planet