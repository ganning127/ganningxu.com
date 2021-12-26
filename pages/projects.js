import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { ProjectsDisplay } from '../components/ProjectsDisplay'
import { Footer } from '../components/Footer'
import { Container } from '@chakra-ui/react'

export default function Home() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta property="og:title" content="Projects" />
                <meta property="og:site_name" content="ganning.me" />
                <meta property="og:url" content="http://ganning.me/projects" />
                <meta property="og:description" content="Projects that I've completed over the years." />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="projects" />
            <Container maxW='container.xl' px="8">
                <ProjectsDisplay />
                <Footer />
            </Container>


        </>
    )
}
