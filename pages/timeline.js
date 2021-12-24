import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { TimelineComponent } from '../components/TimelineComponent'
import { Footer } from '../components/Footer'
export default function Timeline() {
    return (
        <>
            <Head>
                <title>Timeline</title>
                <meta property="og:title" content="Timeline" />
                <meta property="og:site_name" content="ganning.me" />
                <meta property="og:url" content="http://ganning.me/timeline" />
                <meta property="og:description" content="My work experience and education!" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="timeline" />
            <TimelineComponent />
            <Footer />
        </>
    )
}
