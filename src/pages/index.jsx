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
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
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
