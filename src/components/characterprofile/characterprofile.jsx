import React from 'react'
import { connect } from 'react-redux';

const CharacterProfile = ({profile}) => {
    console.log('profile2',profile)
    return (
        <div>
          <h2>Profile</h2>
            {profile.name && <p>Name: {profile.name}</p>}
            {profile.height && <p>Height: {profile.height}cm</p>}
            {profile.mass && <p>Weight: {profile.mass}kg</p>}
            {profile.gender && <p>Gender: {profile.gender}</p>}
        </div>
    )
}

const mapStateToProps = ({ character: { profile } }) => ({
    profile,
});

export default connect(mapStateToProps)(CharacterProfile);