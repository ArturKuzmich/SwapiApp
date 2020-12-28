import React from 'react'
import { connect } from 'react-redux'
import './style.css'



const CharacterFilms = ({films}) => {
    return (
        <div className='character_films-list'>
                <h2 className='films_top-title'>Films</h2>
                <ul className='films_list'>
                    {films.map(film => {
                        return(
                            <li key={film.episode_id} className='film_detail-list'>
                                <h3 className='film_name'>{film.title}</h3>
                                <p className='film_desc'>{film.opening_crawl}</p>
                                <div className="film_people">
                                    <div className='people'>
                                        Director
                                        <span>{film.director}</span>
                                    </div>
                                    <div className='people'>
                                        Producer
                                        <span>{film.producer}</span>
                                    </div>
                                </div>
                                <span className='release_date'>Release Date <span>{film.release_date}</span></span>
                            </li>
                        )
                    })}
                </ul>
        </div>
    )
}

const mapStateToProps = ({ character: { films } }) => ({
    films,
});

export default  connect(mapStateToProps)(CharacterFilms)