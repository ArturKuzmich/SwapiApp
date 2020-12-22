import React from 'react'
import {connect} from 'react-redux'
import {setChoosedCharacter, getChoosedProfile} from "../../reducer/character/actions";
import CharacterProfile from "../characterprofile/characterprofile";
import './style.css'
import CharacterWorld from "../characterworld/characterworld";

const CharacterList = ({characters, setCharacter}) =>
    <div className='characters_list'>
            <h1>Characters</h1>
            <ul className='characters_items'>
                {characters.map((c, i) => (
                    <li
                        className='characters_item'
                        onClick={setCharacter(i + 1)}
                        key={c.name}>
                        {c.name}
                    </li>
                ))}
            </ul>
        <CharacterProfile />
        <CharacterWorld />
    </div>




const mapDispatchToProps = dispatch => ({
    setCharacter(id){
        return () => {
            dispatch(setChoosedCharacter(id))
            dispatch(getChoosedProfile(id));
        }
    }
})

const mapStateToProps = ({ characters }) => ({
    characters,
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);