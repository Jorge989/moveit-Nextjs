import '../styles/global.css'
import {useState} from 'react';
import {ChallengesProvider} from '../contexts/ChallangeContext'
import { CountdownProvider } from '../contexts/CountdownContext';
import React from 'react';
function MyApp({ Component, pageProps }) {


  return (



  <Component {...pageProps} />


 
  )
}

export default MyApp
