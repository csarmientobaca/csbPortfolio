// import { Inter } from 'next/font/google'
import Head from 'next/head'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          my next js page
        </title>
      </Head>
      <main>
        <h1>
          this is my page
        </h1>
        <section className='min-h-screen'>
          <nav>
            <h1>
              dev by carlos
            </h1>
          </nav>
        </section>
      </main>

    </div >




  )
}
