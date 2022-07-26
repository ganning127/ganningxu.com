import Head from "next/head";
import { NavBar } from "../components/NavBar";
import { ProjectsDisplay } from "../components/ProjectsDisplay";
import { Footer } from "../components/Footer";
import {
  Container,
  Heading,
  Box,
  Link,
  Text,
  useColorMode,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Home() {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#15161a",
    dark: "white",
  };
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta property="og:title" content="Projects" />
        <meta property="og:site_name" content="ganning.me" />
        <meta property="og:url" content="http://ganning.me/projects" />
        <meta
          property="og:description"
          content="Projects that I've completed over the years."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="projects" />

      <Container maxW="container.xl" px="8">
        <Heading fontSize="5xl" as="h1" color={textColor[colorMode]}>
          <chakra.span color="blue.light">projects</chakra.span>
        </Heading>
        <Text mt="2" fontSize="xl" fontWeight={600}>
          I&apos;d love to work on a project with you! Whether it be creating a
          website, developing an app, or just creating something for fun, all
          you have to do is{" "}
          <Link
            color="purple.light"
            _hover={{ color: "purple.hover" }}
            href="mailto:xu23g@ncssm.edu"
          >
            {" "}
            reach out
          </Link>
          :)
        </Text>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <ProjectsDisplay title="websites" itemType="website" />

          <Box h={1} my={5} />

          <ProjectsDisplay title="apps" itemType="app" />

          <Box h={1} my={5} />

          <ProjectsDisplay title="bots" itemType="bot" />

          <Box h={1} my={5} />

          <ProjectsDisplay title="algorithms" itemType="algo" />

          <Box h={1} my={5} />

          <ProjectsDisplay title="misc" itemType="misc" />
        </motion.div>

        <Footer />
      </Container>
    </>
  );
}
