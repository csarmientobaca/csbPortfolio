// import { Inter } from 'next/font/google'

import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image'

import me1 from "../public/me1.png"
import todo1 from "../public/todo1.png"
import todo2 from "../public/todo2.png"
import todo3 from "../public/todo3.png"


import Card from '@/components/Card'
import Logo from "../public/logo_in_FCE38A.png"
import Card1 from '@/components/Card1'
import Link from 'next/link'
import NavFloating from '@/components/NavFloating'
import { useEffect } from 'react'
import { gsap } from "gsap";

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  const todoSet = [todo1, todo2, todo3];




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
    <div>
      <Head>
        <title>
          my next js page
        </title>
      </Head>
      <NavFloating />

      <main className='px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <div className='relative bg-gradient-to-b  rounded-md w-20 h-20 overflow-hidden'>
              <Image alt='myLogo' src={Logo} layout='fill' objectFit='cover' />
            </div>
            {/* <h1 className='font-burtons'>
              Developed by csarmientobaca
            </h1> */}
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
              </li>

              <li>
                <a id='resume' className='textMarmol px-4 py-2 rounded-md ml-8' href="#">
                  Resume
                </a>
              </li>

              <li>
                <a id='projectsLink' className='textMarmol px-4 py-2 rounded-md ml-8' href="#">
                  Projects
                </a>
              </li>
            </ul>

          </nav>
          <div className='text-center p-10'>
            <h2 className='bigOrange text-5xl py-2 font-medium'>
              Carlos Sarmiento Baca
            </h2>
            <h3 className='text-2xl py-2'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </h3>
            <p className='text-md py-5 leading-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>

          <div className='relative mx-auto bg-gradient-to-r from-pink-400 to-orange-400 rounded-full w-80 h-80 overflow-hidden'>
            <Image alt='myPhoto' src={me1} layout='fill' objectFit='cover' />
          </div>
        </section >


        <section>
          <div>
            <h3 className='text-3xl py-1'>What I offer</h3>
            <p className='text-md py-2 leading-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <p className='text-md py-2 leading-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </section>

        <h3 className='text-3xl py-1'>Projects</h3>

        <section id='myGrid' className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>
          <Card1 title={"Todo app with voice recognition"} description={"this is a todo app"}
            sources={todoSet} />
          <Card1 title={"Spotify with Spotify API (in progress)"} description={"this is the description for card2"}
            sources={todoSet} />
        </section>
      </main >


    </div >




  )
}
