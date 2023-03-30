/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'

import NavBar from '@/components/navbar/NavBar'
import Header from '@/components/sections/header/header'
import Main from '@/components/sections/main'
import Footer from '@/components/sections/footer/contact'

export default function Home() {

  return (
    <>
      <Head>
        <title>Oğuzhan Gökcekoca</title>
        <meta name="description" content="Welcome to my website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon3.ico" />
      </Head>
      <main className='bg-white dark:bg-slate-800'>
        <section className=' min-h-screen'>
          <NavBar />
          <Header />
          <Main />
          <Footer />
        </section>
      </main>
    </>
  )
}
