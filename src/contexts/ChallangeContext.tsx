import { createContext, useState, ReactNode } from "react";
import challenges from '../../challenges.json'
interface ChallengesProviderProps {
    children: ReactNode;
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
}
export const ChallengesContext = createContext({} as ChallangesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);
const [activeChallenge, setActiveChallenge] = useState(null);

const experienceToNextLevel = Math.pow((level + 1)* 4,2)

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewChallange() {
    const randomChallengeIndex = Math.floor(Math.random() * challenges.length)
    const challange = challenges[randomChallengeIndex];
    setActiveChallenge(challange);
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
  finalExperience =finalExperience -experienceToNextLevel;
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
        completeChallenge
      }}>
      {children}
    </ChallengesContext.Provider>
  );
}
