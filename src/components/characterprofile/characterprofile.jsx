import React from 'react'
import { connect } from 'react-redux';
import './style.css'
const CharacterProfile = ({profile}) => {
    console.log('profile2',profile)
    return (
        <div className='characters_profile'>
          <h2>Profile</h2>
            {profile.name && <div className='profile_item'>Name: <p>  {profile.name}</p></div>}
            {profile.height &&  <div className='profile_item'>Height:  <p> {profile.height}cm</p></div>}
            {profile.mass &&  <div className='profile_item'>Weight: <p> {profile.mass}kg</p></div>}
            {profile.gender && <div className='profile_item'>Gender:  <p>{profile.gender}</p></div>}
        </div>
    )
}

const mapStateToProps = ({ character: { profile } }) => ({
    profile,
});

export default connect(mapStateToProps)(CharacterProfile);