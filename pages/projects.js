import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { ProjectsDisplay } from '../components/ProjectsDisplay'
export default function Home() {
    return (
        <>
            <Head>
                <title>Projects</title>
                <meta property="og:title" content="Projects" />
                <meta property="og:site_name" content="ganning.me/projects" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <ProjectsDisplay />

        </>
    )
}
