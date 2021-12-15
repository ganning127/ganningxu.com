import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { Landing } from '../components/Landing'
import { TimelineComponent } from '../components/TimelineComponent'
import { Footer } from '../components/Footer'
export default function Timeline() {
    return (
        <>
            <Head>
                <title>Ganning Xu</title>
                <meta property="og:title" content="Ganning Xu" />
                <meta property="og:site_name" content="ganning.me" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="" />
            <TimelineComponent />
            <Footer />
        </>
    )
}
