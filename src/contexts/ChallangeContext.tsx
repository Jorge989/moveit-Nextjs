import { createContext, useState, ReactNode, useEffect } from "react";
import challenges from '../../challenges.json';
import Cookies from 'js-cookie';
import { LevelUpModal } from '../components/levelUpModal'
interface ChallengesProviderProps {
    children: ReactNode;
    level: number;
    currentExperience:number;
    challengesCompleted: number;
}


interface Challenge{
  type: 'body' |'eye';
  description: string;
  amount: number;
}
interface ChallangesContextData{
    level:number;
    currentExperience: number;
    activeChallenge: Challenge;
    experienceToNextLevel:number;
    challengesCompleted: number;
    levelUp: () =>void;
    startNewChallange: () => void;
    resetChallenge: () => void;
    completeChallenge: () => void;
    closeLevelUpModal: () => void;
}
export const ChallengesContext = createContext({} as ChallangesContextData);

export function ChallengesProvider({ children,
...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ??1);
  const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
  const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
const [activeChallenge, setActiveChallenge] = useState(null);
const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

const experienceToNextLevel = Math.pow((level + 1)* 4,2)

useEffect(() =>{
Notification.requestPermission();

},[])

useEffect(()=>{
  Cookies.set('level', String(level))
  Cookies.set('currentExperience', String(currentExperience))
  Cookies.set('challengesCompleted', String(challengesCompleted))
},[level, currentExperience, challengesCompleted])


  function levelUp() {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true)
  }
function closeLevelUpModal(){
  setIsLevelUpModalOpen(false)
}


  function startNewChallange() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challange = challenges[randomChallengeIndex];
    setActiveChallenge(challange);

new Audio('/notification.mp').play();

    if(Notification.permission ==="granted"){
      new Notification('Novo desafio 🎉',{
        body: `Valendo ${challange.amount}xp!`
      })
    }
  }


  function resetChallenge(){
    setActiveChallenge(null);
  }

  function completeChallenge(){
if(!activeChallenge){
  return;
}
const {amount} = activeChallenge;
let finalExperience = currentExperience + amount;
if(finalExperience >= experienceToNextLevel){
  finalExperience = finalExperience - experienceToNextLevel;
  levelUp();
}
setCurrentExperience(finalExperience);
setActiveChallenge(null);
setChallengesCompleted(challengesCompleted +1)
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        levelUp,
        currentExperience,
        challengesCompleted,
        startNewChallange,
        activeChallenge,
        resetChallenge,
        experienceToNextLevel,
        completeChallenge,
        closeLevelUpModal
      }}>
      {children}
     {isLevelUpModalOpen && <LevelUpModal/>}
    </ChallengesContext.Provider>
  );
}
