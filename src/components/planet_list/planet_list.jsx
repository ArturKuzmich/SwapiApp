import React, {useEffect, useState} from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios'
import Planet from "../planet/planet";
import {Link} from 'react-router-dom'
import './planet_list.css'
import {connect} from "react-redux";
import {
    setCurrentPlanet,
} from "../../reducer/planetsDetails/actions";


const PlanetList = ({planets, setPlanet}) => {
    const [apiUrl, setApiUrl] = useState('https://swapi.dev/api/planets/');
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([]);
    const [activePage, setActivePage] = useState(1);


    useEffect(() => {
        axios.get(apiUrl)
            .then(response => {
                setIsLoading(true)
            setData(response.data.results);
                setIsLoading(false)
        });
    },[apiUrl])

    const onChange = (e, pageInfo) => {
        setActivePage(pageInfo.activePage);
        setApiUrl('https://swapi.dev/api/planets/?page=' + activePage.toString());
    };

    return (
        <div>
            <div className="planet_list">
            {isLoading ? (
                <div>...Loading</div>
                ) : (
                data.map((planet,id, array) => (
                    <Link
                        onClick={setPlanet(id + 1)}
                        key={id}
                        to={{
                            pathname: `/planets/${id + 1}`,
                            state: { ...planet, array: array}
                        }}
                    >
                        <Planet  planet={planet}/>
                    </Link>
                ))
                )

            }
            </div>
            <div className="pagination">
                <Pagination
                    activePage={activePage}
                    onPageChange={onChange}
                    totalPages={6}
                    ellipsisItem={null}
                />
            </div>


        </div>
    )

}
const mapStateToProps = ({planets}) => ({
    planets
})

const mapDispatchToProps = dispatch => ({
    setPlanet(id){
        return () =>{
            dispatch(setCurrentPlanet(id))
        }
    }
})

export  default connect(mapStateToProps, mapDispatchToProps)(PlanetList)
