import Head from 'next/head'
import { NavBar } from '../components/NavBar'
import { AutoGridHTML } from '../components/AutoGridHTML'
import { Organizations } from '../components/Organizations'
import { Volunteering } from '../components/Volunteering'
import SkillList from "../data/skills.json";
import AwardsList from "../data/awards.json";
import CourseList from "../data/courses.json";
import { Research } from '../components/Research'
import { Footer } from '../components/Footer'

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
            <AutoGridHTML list={AwardsList} heading="awards" />
            <AutoGridHTML list={SkillList} heading="languages" />
            <AutoGridHTML list={CourseList} heading="courses" />
            <Research />
            <Organizations />
            <Volunteering />
            <Footer />


        </>
    )
}
