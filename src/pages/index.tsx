import Head from "next/head";
import {GetServerSideProps}from 
 'next'
import { CompletedChallenges } from "../components/CompletedChallanges";
import { CountDown } from "../components/Countdown";
import { ExperienceBar } from "../components/Expiriencebar";
import { Profile } from "../components/Profile";
import { ChallangeBox } from "../components/ChallangeBox";
import styles from "../styles/pages/Home.module.css";
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallengesProvider } from "../contexts/ChallangeContext";

interface HomeProps{
  level: number;
  currentExperience:number;
  challengesCompleted: number;
}



export default function Home(props:HomeProps) {




  return (
    <ChallengesProvider
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
      <ExperienceBar />
<CountdownProvider>
      <section>
        <div>
          
            <Profile />
            <CompletedChallenges />
            <CountDown />
      
        </div>
        <ChallangeBox />
      </section>
      </CountdownProvider>
    </div>
    </ChallengesProvider>
  );
}


export const getServerSideProps:GetServerSideProps = async(ctx) =>{

  const user ={
    level: 1,
    currentExperience: 50,
    challengesCompleted: 2,
  }
const {level, currentExperience, challengesCompleted} = ctx.req.cookies;
return{
  props:{
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted:Number(challengesCompleted)


  }
}
}