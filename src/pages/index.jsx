/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Head from 'next/head'

import NavBar from '@/components/navbar/NavBar'
import Header from '@/components/sections/header/header'
import Main from '@/components/sections/main'
import Footer from '@/components/sections/footer/contact'
import favicon from "../../public/favicon.png"

export default function Home() {

  return (
    <>
      <Head>
        <title>Oğuzhan Gökcekoca</title>
        <link rel="shortcut icon" href={favicon} />
      </Head>
      <main className='bg-slate-800'>
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
