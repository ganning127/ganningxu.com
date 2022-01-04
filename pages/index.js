import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Landing } from '../components/Landing'
import { Footer } from '../components/Footer'
import { Container } from '@chakra-ui/react'

export default function Home() {
  return (
    <>

      <Head>
        <title>Ganning Xu</title>
        <meta property="og:title" content="Ganning Xu" />
        <meta property="og:site_name" content="ganning.me" />
        <meta property="og:url" content="http://ganning.me/" />
        <meta property="og:description" content="Welcome to my website, feel free to take a look around!" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="home" />
      <Container maxW='container.xl' px="8">
        <Landing />
        <Footer />
      </Container>
    </>
  )
}
