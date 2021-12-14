import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Awards } from '../components/Awards'
import { Skills } from '../components/Skills'
import { Organizations } from '../components/Organizations'
import { Volunteering } from '../components/Volunteering'

export default function Experience() {
    return (
        <>
            <Head>
                <title>Ganning Xu</title>
                <meta property="og:title" content="Ganning Xu" />
                <meta property="og:site_name" content="ganning.me/experience" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="" />
            <Awards />
            <Skills />
            <Organizations />
            <Volunteering />


        </>
    )
}
