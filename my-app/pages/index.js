// import { Inter } from 'next/font/google'
//cambiare contrasto 
//mettere tutte le competenze
//imagine a canto alle domande 
//disegni piu chiari

//aprire una nuova scheda ogni volta che clicko un link
//aggiungere funny frases
// ordinare i sottotitoli

import Head from 'next/head'
import Image from 'next/image'
import me1 from "../public/me1.png"
import todo1 from "../public/todo1.png"
import todo2 from "../public/todo2.png"
import todo3 from "../public/todo3.png"

import spotify1 from "../public/spotify1.png";
import spotify2 from "../public/spotify2.png";

import linkedin1 from "../public/linkedin1.png"
import linkedin2 from "../public/linkedin2.png"
import linkedin3 from "../public/linkedin3.png"
import linkedin4 from "../public/linkedin4.png"

import spotifyVanilla1 from "../public/spotyvanilla1.png";
import spotifyVanilla2 from "../public/spotyvanilla2.png";
import spotifyVanilla3 from "../public/spotyvanilla3.png";


import eng from "../public/eng.png"
import ita from "../public/ita.png"
import peru from "../public/peru.png"
import spa from "../public/spa.png"

import github from "../public/github.png"


import rome from "../public/rome.png"
import Logo from "../public/logo_in_FCE38A.png"
import Card1 from '@/components/Card1'
import Link from 'next/link'
import NavFloating from '@/components/NavFloating'
import Skills from '@/components/Skills'
import { useEffect, useState } from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Intro from '@/components/Intro'
import { AiFillCopyrightCircle, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import { LiaCopyrightSolid } from "react-icons/lia"

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('it'); // 'it' for Italian, 'en' for English
  const [showMain, setShowMain] = useState(false);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'it' ? 'en' : 'it'));
  };



  const todoSet = [todo1, todo2, todo3];
  const spotifySet = [spotify1, spotify2];
  const linkedinSet = [linkedin1, linkedin2, linkedin3, linkedin4];
  const romeSet = [rome]
  const spotifyVanillaSet = [spotifyVanilla1, spotifyVanilla2, spotifyVanilla3]



  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  useEffect(() => {
    document.getElementById("projectsLink").addEventListener("click", function () {
      gsap.to(window, {
        duration: 0.75,
        scrollTo: "#myGrid"
      })
    })
    return () => {
    }
  }, [])

  const timer = setTimeout(() => {
    setShowMain(true);
  }, 3500);


  return (

    <div >
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Carlos Sarmiento Baca Portfolio</title>
      </Head>
      <Intro />
      <main className={`px-10 flex-wrap ${showMain ? 'visible' : 'hidden'}`}>
        <NavFloating />

        <section className=''>
          <nav className=' flex flex-wrap lg:justify-between justify-center'>
            <div className='relative rounded-full w-28 h-28 lg:block flex-shrink-0 my-10 overflow-hidden'>
              <Link href={"https://github.com/csarmientobaca"}>
                < Image alt='myLogo' src={Logo} layout='fill' objectFit='cover' />
              </Link>
            </div>
            <ul className='flex flex-col lg:flex-row text-center mt-0 sm:mt-10'>
              <li className='m-5'>
                <Link className='textMarmol px-5 py-4 text-2xl rounded-md ' href='/pdf'>
                  Resume
                </Link>
              </li>
              <li className='m-5 '>
                <Link id='projectsLink' className='textMarmol px-5 py-4 text-2xl rounded-md' href="#">
                  Projects
                </Link>
              </li>
            </ul>

            <button
              onClick={toggleLanguage}
              className={`engbg  textMarmol p-4 text-2xl rounded-full mt-10 lg:ml-0`}
            >
              <Image
                src={language === 'it' ? eng : ita}
                className='relative p-0 h-10 w-10 rounded-full'
                alt='eng'
              />
            </button>

          </nav>
          <div className='text-center p-10'>
            <h1 className='bigOrange text-5xl py-2 font-medium'>
              Carlos Sarmiento Baca
            </h1>
            <h1 className='textmovie text-5xl'>
              Full-stack Developer
            </h1>
            <h3 className='description text-2xl py-2'>
              {language === 'it'
                ?
                `Sono uno sviluppatore junior fullstack con una solida competenza in linguaggi come JavaScript e Java,
                ho anche avuto l'opportunità di sperimentare con linguaggi come Python.
                La mia passione per la programmazione mi ha portato a esplorare diversi aspetti dello sviluppo web.`
                :
                `I am a junior full-stack developer with a strong proficiency in languages such as JavaScript and Java. 
                I have also had the opportunity to experiment with languages like Python. 
                My passion for programming has led me to explore various aspects of web development.`
              }
            </h3>

            <div className='max-w-md mx-auto grid grid-cols-2 xl:grid-cols-4 sm:grid-cols-2 gap-8 items-center justify-center'>

              <div className='text-center group relative h-20 w-20'>
                <h3 className='text-lg group-hover:text-md font-burtons transition-transform mb-1'>
                  {language === 'it' ? `Sono` : `I'm`}
                </h3>
                <div className='group-hover:visible invisible absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 bg-gray-800 text-white text-xs p-1 rounded'>
                  <p className='text-lg'>
                    {language ===
                      'it'
                      ? 'Peruviano'
                      : 'Peruvian'}
                  </p>
                </div>
                <Image className='h-8 w-8' src={peru} alt="peru" layout='responsive' loading='eager' />
              </div>

              <div className='text-center group relative h-20 w-20'>
                <h3 className='text-lg group-hover:text-md font-burtons transition-transform mb-1'>
                  {language === 'it' ? `Madrelingua` : `FirtsLanguage`}
                </h3>
                <div className='group-hover:visible invisible absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 bg-gray-800 text-white text-xs p-1 rounded'>
                  <p className='text-lg'>
                    {language ===
                      'it'
                      ? 'Spagnolo'
                      : 'Spanish'
                    }
                  </p>
                </div>
                <Image className='h-8 w-8' src={spa} alt="spainish" layout='responsive' loading='eager' />
              </div>

              <div className='text-center group relative h-20 w-20'>
                <h3 className='text-lg group-hover:text-md font-burtons transition-transform mb-1'>
                  {language === 'it' ? `Fluente` : `Fluent`}
                </h3>
                <div className='group-hover:visible invisible absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 bg-gray-800 text-white text-xs p-1 rounded'>
                  <p className='text-lg'>
                    {language ===
                      'it'
                      ?
                      'Italiano'
                      :
                      'Italian'}
                  </p>
                </div>
                <Image className='h-8 w-8' src={ita} alt="italian" layout='responsive' loading='eager' />
              </div>

              <div className='text-center group relative h-20 w-20'>
                <h3 className='text-lg group-hover:text-md font-burtons transition-transform mb-1'>
                  B2
                </h3>
                <div className='group-hover:visible invisible absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 bg-gray-800 text-white text-xs p-1 rounded'>
                  <p className='text-lg'>
                    {language ===
                      'it'
                      ?
                      'Inglese'
                      :
                      'English'}</p>
                </div>
                <Image className='h-8 w-8' src={eng} alt="english" layout='responsive' loading='eager' />
              </div>
            </div>
          </div>
        </section >

        {/* SECOND SECTION */}
        <section className="flex flex-col items-center md:flex-row md:items-center justify-center">
          <div className="max-w-md md:mr-8">
            <h3 className='text-3xl text-center py-1 my-5'>
              {language === 'it'
                ?
                `Se mi chiedeste cosa posso offrire alla vostra azienda, la mia risposta sarebbe la seguente:`
                :
                `If you asked me what I can offer to your company, my answer would be the following:`
              }
            </h3>
            <p className='text-md text-center py-2 leading-8'>
              {language === 'it'
                ?
                `Posso garantirvi una carica di energia,
                determinazione e una sete insaziabile di apprendimento.`
                :
                `I can guarantee you a charge of energy, 
                determination, and an insatiable thirst for learning.`
              }
            </p>
            <p className='text-md text-center py-2 leading-8'>
              {language === 'it'
                ?
                `Sono convinto che con il mio desiderio di apprendere e la mia predisposizione
                a collaborare con il team, posso diventare un elemento prezioso per la vostra azienda.
                Sono pronto a lavorare duramente per raggiungere gli obiettivi aziendali e per crescere professionalmente lungo il percorso.
                `
                :
                `I am convinced that with my desire to learn and my willingness to collaborate with the team, 
                I can become a valuable asset to your company. 
                I am ready to work hard to achieve the company's goals and to grow professionally along the way.`
              }
            </p>
          </div>
          <div className='relative mx-auto bg-gradient-to-r from-slate-800 to-teal-500 rounded-full w-80 h-80 overflow-hidden md:flex-shrink-0'>
            <Image alt='myPhoto' src={me1} layout='fill' objectFit='cover' />
          </div>
        </section>
        <Skills />



        <h3 className='text-3xl py-1 my-10'>
          Projects
        </h3>

        {/* THIRD SECTION */}
        <section id='myGrid'
          className=' grid grid-cols-1 lg:grid-cols-2 
          md:grid-cols-2 justify-items-center justify-center gap-y-10 gap-x-32 mt-10 mb-40'>

          <Card1 title={language === 'it' ? "App Todo con riconoscimento vocale " : "Todo app with voice recognition"}
            description={
              language === 'it' ?
                `App con Next.js e css Tailwind, sicurezza e persistenza dei dati tramite Firebase. 
                Riconoscimento vocale di React, per semplificare l'interazione.`
                :
                `App with Next.js and Tailwind CSS, data security, and persistence through Firebase.
                React voice recognition to simplify interaction.`
            }
            sources={todoSet} youtube={"http://youtu.be/INe5cxhGYak"}
            link={"http://todo-app-nextjs-8edab.web.app"}
          />

          <Card1 title={language === 'it' ? "Spotify clone in vanilla js" : "Spotify clone with vanilla js"}
            description={
              language === 'it'
                ?
                `Clone di Spotify utilizzando solo vanilla JavaScript senza framework.`
                :
                `Clone of Spotify using only vanilla JavaScript without framework.`
            }
            sources={spotifyVanillaSet}
            youtube={"https://youtu.be/2S7qj6I5eXg"}
            link={"https://github.com/Kaymax99/U2-Project"}
          />
          <Card1 title={language === 'it' ? "Impero romano con python e flask" : "Roman Empire with Python and Flask"}
            description={
              language === 'it'
                ?
                `App interattiva sull'Impero Romano con funzionalità di ricerca, filtri,
                visualizzazione dati storici e utilizzo dell'API di Mapbox`
                :
                `Interactive app about the Roman Empire with search and filter functionalities,
                historical data visualization, and use of the Mapbox API.`
            }
            sources={romeSet}
            youtube={"#"}
            link={"https://github.com/csarmientobaca/capstone_epicode"}
          />
          <Card1 title={language === 'it' ? "Clone di LinkedIn con Bootstrap e React" : "Clone of LinkedIn with Bootstrap and React"}
            description={
              language === 'it'
                ?
                `Piattaforma con registrazione, profili,condivisione di contenuti, creazione di componenti complessi e gestione interazioni utente.`
                :
                `Platform with registration, profiles, content sharing, creation ofcomplex components, 
                and user interaction management.`
            }
            sources={linkedinSet}
            youtube={"#"}
            link={"https://github.com/369-Palma/build-week3-team6new"}
          />
          <Card1 title={language === 'it' ? "Spotify con l'uso dell'API di Spotify(in corso)" : "Spotify w/ Spotify API(in progress)"}
            description={
              language === 'it'
                ?
                `Clone di Spotify utilizzando l'API di Spotify per 
                creare una mia versione personale.`
                :
                `Clone of Spotify using the Spotify API to create my personal version.`
            }
            sources={spotifySet}
            youtube={"http://youtu.be/v6DOdeozrJ0"}
            link={"https://github.com/csarmientobaca/spotify_clone_with_api"}
          />
        </section>
        <section className='flex flex-col justify-center items-center mb-20'>
          <h3>Source code</h3>
          <Link href={'https://github.com/csarmientobaca/csbPortfolio/tree/main/my-app'}>
            <Image className='h-10 w-10' src={github} alt='github' />
          </Link>
          <div>
            <LiaCopyrightSolid className='inline' />
            <h3 className='inline'>
              Carlos Sarmiento Baca
            </h3>
          </div>
        </section>

      </main >
    </div >
  )
}
