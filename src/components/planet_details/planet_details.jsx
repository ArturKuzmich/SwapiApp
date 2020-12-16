import { useLocation} from 'react-router-dom'

import React, {useState, useEffect} from 'react'
import './planet_detail.css'

const PlanetDetails = () => {

    const [planetResidents, setPlanetResidents] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    // const {name: id} = useParams()
    const {
        state: {name, residents, diameter, rotation_period, climate, gravity, terrain, population},
    } = useLocation()
    console.log(residents)
    useEffect(() => {
      return function fetchResidents() {
            const result = []
            return Promise.all( ///возвращает обещания когда будут выполнены все обещания
                residents.map(url => ///перечисляемый обьект === массивом ссылок
                    fetch(url)    ////fetch запрос на каждую из ссылок
                        .then(response => response.json())
                        .then(responseData => {
                            setIsLoading(true);
                            result.push(responseData)
                        })
                        .catch(err => {
                                setIsError(err)
                            }
                        )
                )
            ).then(() => {
                setPlanetResidents(result)
                setIsLoading(false);
            })
        }
        // fetchResidents()

    }, [residents]);


    return (
        <div className="planet_details">
            <h1 className="planet_name">{name}</h1>
            <div className=" planet_desc planet_diameter">diameter:
                <span>{diameter}</span>
            </div>
            <div className=" planet_desc planet_rotation">rotation_period:
                <span>{rotation_period}</span>
            </div>
            <div className=" planet_desc planet_climate">climate:
                <span>{climate}</span>
            </div>
            <div className=" planet_desc planet_gravity">gravity:
                <span>{gravity}</span>
            </div>
            <div className=" planet_desc planet_terrain">terrain:
                <span>{terrain}</span>
            </div>
            <div className=" planet_desc planet_population">population:
                <span> {population === "unknown" ? 'Not populated' : population}</span>
            </div>
            <h4 className="title_residents">Residents List:</h4>
            <div className="planet_residents">
                {isLoading ? (
                    <h6>...Loading</h6>
                ) :  isError ? (
                    <h6>Something went wrong ... <br/> Please reload page</h6>
                ) : planetResidents.length === 0 ? (
                    <h6>Residents not found </h6>
                ) : (
                    planetResidents.map((res, id) => {
                        return <h6 key={id}>{res.name}</h6>
                    })
                )
                }
            </div>
        </div>
    )
}


export default PlanetDetails