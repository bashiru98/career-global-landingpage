import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo'
import SectionThree from '../components/SectionThree'
import SectionFour from '../components/SectionFour'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Hero />
      <main className="w-full xl:w-[1150px] mx-auto bg-white">
        <SectionOne />
        <SectionTwo />
        <SectionThree />
      </main>

      <SectionFour />

      <Footer />
    </div>
  )
}

export default Home
