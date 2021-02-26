
import { useContext } from 'react'
import styles from '../styles/components/CompletedChallanges.module.css'
import {ChallengesContext} from '../contexts/ChallangeContext';
export function CompletedChallenges (){
    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}