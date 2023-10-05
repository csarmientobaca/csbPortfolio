// import { Inter } from 'next/font/google'

import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image'
import me1 from "../public/me1.png"
import Card from '@/components/Card'
import Logo from "../public/logo.png"
import Card1 from '@/components/Card1'
import Link from 'next/link'

// const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div>
      <Head>
        <title>
          my next js page
        </title>
      </Head>
      <main className='bg-white px-10'>
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
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>

              <li>
                <a className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Projects</a>
              </li>
            </ul>

          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>
              Carlos Sarmiento Baca
            </h2>
            <h3 className='text-2xl py-2'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <Link href={'https://twitter.com/CSarmientobaca'}>
              <AiFillTwitterCircle />
            </Link>
            <Link href={'https://www.linkedin.com/in/carlos-sarmiento-baca-64409bb6'}>
              <AiFillLinkedin />
            </Link>
            <Link href={'https://github.com/csarmientobaca'}>
              <AiFillGithub />
            </Link>
            <Link href="/pdf" target="_blank">
              <div>
                Click here to view the PDF
              </div>
            </Link>


          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image alt='myPhoto' src={me1} layout='fill' objectFit='cover' />
          </div>
        </section >


        <section>
          <div>
            <h3 className='text-3xl py-1'>What I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
            <p className='text-md py-2 leading-8 text-gray-800'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            </p>
          </div>
        </section>

        <h3 className='text-3xl py-1'>Projects</h3>

        <section id='myGrid'

          className='w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5'>

          <Card1 title={"myCard1"} description={"this is the description form card1"} />
          <Card1 title={"myCard2"} description={"this is the description form card2"} />

        </section>
      </main >


    </div >




  )
}
