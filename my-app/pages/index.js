// import { Inter } from 'next/font/google'

import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'
import Image from 'next/image'
import me1 from "../public/me1.png"

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
            <h1 className='font-burtons'>
              Developed by csarmientobaca
            </h1>
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
              Developer and designer
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              Junior Web Dev, always learning, because programing is a way of life.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden'>
            <Image alt='myPhoto' src={me1} layout='fill' objectFit='cover' />
          </div>
        </section>


        <section>
          <div>
            <h3 className='text-3xl py-1'>Services i offer</h3>
            <p>
              Im new in this world, im pasionate and full of energy to learn a lot.
              Right now i take any remote work and i could work even overseas.
            </p>
          </div>


        </section>
      </main>

    </div >




  )
}
