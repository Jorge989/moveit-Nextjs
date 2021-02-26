import styles from '../styles/components/CompletedChallanges.module.css'
import {ChallengesContext} from '../contexts/ChallangeContext';
export function CompletedChallenges (){
    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{ChallengesContext}</span>
        </div>
    )
}