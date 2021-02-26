import Head from 'next/head';

import {CompletedChallenges } from '../components/CompletedChallanges'
import {Countdown} from '../components/Countdown'
import { ExperienceBar } from "../components/Expiriencebar";
import {Profile} from '../components/Profile';
import {ChallangeBox} from '../components/ChallangeBox';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
<Head>
  <title>Início | move.it</title>
</Head>
    <ExperienceBar/>

    <section>
      <div>
        <div >
<Profile/>
<CompletedChallenges />
<Countdown/>
        </div>
      </div>
<ChallangeBox/>
    </section>
      </div>
  )
}
