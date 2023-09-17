// import { Inter } from 'next/font/google'

import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'

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
        </section>
      </main>

    </div >




  )
}
