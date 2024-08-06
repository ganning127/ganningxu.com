import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { AutoGridHTML } from "../components/AutoGridHTML";
import SkillList from "../data/skills.json";
import AwardsList from "../data/awards.json";
import CourseList from "../data/courses.json";
import ScholarshipList from "../data/scholarships.json";

import { Research } from "../components/Research";
import { Footer } from "../components/Footer";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function Experience() {
  return (
    <>
      <Head>
        <title>Experience</title>
        <meta property="og:title" content="Experience" />
        <meta property="og:site_name" content="ganning.me" />
        <meta property="og:url" content="http://ganning.me/experience" />
        <meta
          property="og:description"
          content="Skills and languages I know!"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="experience" />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Container maxW="container.xl" px="8">
          <AutoGridHTML list={AwardsList} heading="Awards" />
          <AutoGridHTML list={ScholarshipList} heading="Scholarships" />
          <AutoGridHTML list={SkillList} heading="Tools" />
          <AutoGridHTML list={CourseList} heading="Courses" />
          <Research />
          <Footer />
        </Container>
      </motion.div>
    </>
  );
}
