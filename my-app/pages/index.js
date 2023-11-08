// import { Inter } from 'next/font/google'

//cambiare contrasto 
//mettere tutte le competenze
//imagine a canto alle domande 
//disegni piu chiari


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

import rome from "../public/rome.png"

import java from "../public/java.png"
import js from "../public/js.png"
import next from "../public/next.png"
import react from "../public/react.png"
import spring from "../public/spring.png"
import css3 from "../public/css3.png"
import html5 from "../public/html5.png"
import bootstrap from "../public/bootstrap.png"


import Card from '@/components/Card'
import Logo from "../public/logo_in_FCE38A.png"
import Card1 from '@/components/Card1'
import Link from 'next/link'
import NavFloating from '@/components/NavFloating'
import { useEffect } from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import Intro from '@/components/Intro'
import { FaBootstrap, FaCss3 } from 'react-icons/fa'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const todoSet = [todo1, todo2, todo3];
  const spotifySet = [spotify1, spotify2];
  const linkedinSet = [linkedin1, linkedin2, linkedin3, linkedin4];
  const romeSet = [rome]



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

  return (
    <>
      <Head>
        <title>
          my next js page
        </title>
      </Head>
      <Intro />
      <NavFloating />
      <nav className='py-10 px-10 mb-12 flex lg:justify-between justify-center'>
        <div className='relative rounded-md w-28 h-28 hidden lg:block'>
          <Image alt='myLogo' src={Logo} layout='fill' objectFit='cover' />
        </div>

        <ul className='flex items-center'>
          {/* <li>
                <a onClick={openWhatsApp}>
                  wassap
                </a>
              </li> */}

          <li>
            <Link className='textMarmol px-5 py-4 text-2xl rounded-md ml-8' href='/pdf'>
              Resume
            </Link>
          </li>

          <li>
            <a id='projectsLink' className='textMarmol px-5 py-4 text-2xl rounded-md ml-8' href="#">
              Projects
            </a>
          </li>
        </ul>
      </nav>
      <main className='px-10 '>
        <section className='min-h-screen'>
          <div className='text-center p-10'>
            <h2 className='bigOrange text-5xl py-2 font-medium'>
              Carlos Sarmiento Baca
            </h2>
            <h3 className='text-2xl py-2'>
              Sono uno sviluppatore junior fullstack con una solida competenza in linguaggi come JavaScript e Java,
              ho anche avuto l`opportunità di sperimentare con linguaggi come Python.
              La mia passione per la programmazione mi ha portato a esplorare diversi aspetti dello sviluppo web.</h3>
            <p className='text-md py-5 leading-8'>
              Peruviano / Madrelingua Spagnolo / Inglese
            </p>
          </div>
          <div id='logos' className='flex flex-wrap justify-center space-x-4'>
            <div className='w-32 h-32 mb-4'>
              <Image src={react} alt='reactlogo' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={next} alt='nextjslogo' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={js} alt='jslogo' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={java} alt='javalogo' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={spring} alt='springlogo' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={bootstrap} alt='Bootstrap' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={css3} alt='css3' layout='responsive' width={128} height={128} />
            </div>
            <div className='w-32 h-32 mb-4'>
              <Image src={html5} alt='html5' layout='responsive' width={128} height={128} />
            </div>
          </div>


          <div className='relative mx-auto bg-gradient-to-r from-pink-400 to-orange-400 rounded-full w-80 h-80 overflow-hidden'>
            <Image alt='myPhoto' src={me1} layout='fill' objectFit='cover' />
          </div>
        </section >


        <section>
          <div>

            <h3 className='text-3xl py-1 my-5'>Se mi chiedeste cosa posso offrire alla vostra azienda, la mia risposta sarebbe la seguente:</h3>
            <p className='text-md py-2 leading-8'>
              Non posso offrire un lungo elenco di anni di esperienza lavorativa, ma posso garantirvi una carica di energia, determinazione e una sete insaziabile di apprendimento.
            </p>
            <p className='text-md py-2 leading-8'>


              La mancanza di esperienza può essere colmata con l`impegno e la dedizione, e sono determinato a farlo.
              Sono convinto che con il mio desiderio di apprendere e la mia predisposizione <br></br>a collaborare con il team,
              posso diventare un elemento prezioso per la vostra azienda.
              Sono pronto a lavorare duramente per raggiungere gli
              obiettivi aziendali e per crescere professionalmente lungo il percorso.
            </p>
          </div>
        </section>

        <h3 className='text-3xl py-1 my-10'>Projects</h3>

        <section id='myGrid'
          className='grid grid-cols-1 lg:grid-cols-2 
          md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>

          <Card1 title={"Todo app with voice recognition  "}
            description={`this is a todo app consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut`}
            sources={todoSet} youtube={"http://youtu.be/INe5cxhGYak"}
            link={"http://todo-app-nextjs-8edab.web.app"}
          />
          <Card1 title={"Spotify w/ Spotify API(in progress)"}
            description={`Clone di Spotify utilizzando l'API di Spotify per 
            creare una mia versione personale.`}
            sources={spotifySet}
            youtube={"http://youtu.be/v6DOdeozrJ0"}
            link={"https://github.com/csarmientobaca/spotify_clone_with_api"}
          />
          <Card1 title={"Impero romano con python e flask"}
            description={`App interattiva sull'Impero Romano con funzionalità di ricerca, filtri,
            visualizzazione dati storici e utilizzo dell'API di Mapbox`}
            sources={romeSet}
            youtube={"#"}
            link={"https://github.com/csarmientobaca/capstone_epicode"}
          />
          <Card1 title={"Clone di LinkedIn con Bootstrap e React:"}
            description={`Sviluppo di piattaforma professionale con registrazione, profili,
            condivisione di contenuti, design reattivo, creazione di Problem solving, componenti complessi e gestione interazioni utente`}
            sources={linkedinSet}
            youtube={"#"}
            link={"https://github.com/369-Palma/build-week3-team6new"}
          />
        </section>
      </main >
    </>




  )
}
