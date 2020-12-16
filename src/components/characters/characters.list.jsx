import React from 'react'
import {connect} from 'react-redux'
import {setChoosedCharacter, getChoosedProfile} from "../../reducer/character/actions";
import CharacterProfile from "../characterprofile/characterprofile";


const CharacterList = ({characters, setCharacter}) =>
    <div className='character_list'>
            <h1>Characters</h1>
            <ul>
                {characters.map((c, i) => (
                    <li
                        onClick={setCharacter(i + 1)}
                        key={c.name}>
                        {c.name}
                    </li>
                ))}
            </ul>
        <CharacterProfile />
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