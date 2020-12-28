import React from 'react'
import { connect } from 'react-redux'

const CharacterFilms = ({films}) => {
    console.log(films)
    return (
        <div>

        </div>
    )
}
const mapStateToProps = ({ character: { films } }) => ({
    films,
});

export default  connect(mapStateToProps)(CharacterFilms)