import {useContext} from 'react';
import styles from '../styles/components/Profile.module.css';
import {ChallengesContext} from '../contexts/ChallangeContext'
export function Profile(){
    const {level} = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/Jorge989.png" alt="Jorge Attie"/>
            <div>
            <strong>Jorge Attie</strong>
            <p>
                <img src="icons/level.svg" alt="Level"/>
                Level {level}</p>
        </div>
        </div>
        
    )
}