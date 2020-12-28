import React from 'react'
import { connect } from 'react-redux';
import './style.css'
const CharacterProfile = ({profile}) => {


    return (
        <div className='characters_profile'>
            <h2 className='profile_title'>Details</h2>
            <div className="profile_details">
                {profile.name && <div className='profile_item'>Name: <p>  {profile.name}</p></div>}
                {profile.height &&  <div className='profile_item'>Height:  <p> {profile.height}cm</p></div>}
                {profile.mass &&  <div className='profile_item'>Weight: <p> {profile.mass}kg</p></div>}
                {profile.gender && <div className='profile_item'>Gender:  <p>{profile.gender}</p></div>}
            </div>
        </div>
    )
}

const mapStateToProps = ({ character: { profile } }) => ({
    profile,
});

export default connect(mapStateToProps)(CharacterProfile);