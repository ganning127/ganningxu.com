import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { AutoGridHTML } from "../components/AutoGridHTML";
import { Organizations } from "../components/Organizations";
import { Volunteering } from "../components/Volunteering";
import SkillList from "../data/skills.json";
import AwardsList from "../data/awards.json";
import CourseList from "../data/courses.json";
import { Research } from "../components/Research";
import { Footer } from "../components/Footer";
import { Container, Img, SimpleGrid, Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
export default function LifeAtNCSSM() {
  let fileNames = [];
  let captions = [
    "the first night",
    "unique classes",
    "stress",
    "ping pong",
    "food = happiness",
    "forgetting parents",
    "tight-knit (landscape)",
    "prison",
    "the best clubs",
    '"oops"',
    "bedtime buddies (secret)",
    "oh, more friends",
    "make yourself happy (portrait)",
    "college apps suck",
    "opportunity",
    "unihacks '23 (< 3 ft away)",
    "student pilot",
    "getting old (reflection)",
  ];
  for (let i = 1; i <= 18; i++) {
    fileNames.push(`XuGanning_finalproject_${i}.jpg`);
  }

  return (
    <>
      <Head>
        <title>Life At NCSSM - Ganning Xu</title>
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
      <NavBar active="" />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Container maxW="container.xl" px="8">
          {/* <AutoGridHTML list={aList} heading="awards" />
          <AutoGridHTML list={SkillList} heading="tools" />
          <AutoGridHTML list={CourseList} heading="courses" /> */}
          {/* <Research />
          <Organizations />
          <Volunteering /> */}

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            {fileNames.map((fileName) => {
              let i = fileNames.indexOf(fileName);
              return (
                <Box>
                  <Img
                    src={`/photos/${fileName}`}
                    alt="NCSSM"
                    width="100%"
                    //   height="100%"
                    mb="4"
                    _hover={{
                      transform: "scale(1.05)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <Text textAlign="center" fontStyle="italic">
                    {captions[i]}
                  </Text>
                </Box>
              );
            })}
          </SimpleGrid>
          <Footer />
        </Container>
      </motion.div>
    </>
  );
}
