import {
  Box,
  Text,
  Link,
  Heading,
  Button,
  chakra,
  Stack,
  useColorMode,
  SimpleGrid,
  Badge,
  Flex,
  Avatar,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ProjectCard } from "../Cards/ProjectCard";
import { useEffect, useState } from "react";
import { CustomLink } from "../CustomLink";
export const Landing = () => {
  const { colorMode } = useColorMode();
  const textColor = {
    light: "#15161a",
    dark: "white",
  };

  return (
    <Box color={textColor[colorMode]} mt="8">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Flex align='center' gap={4}>
          <Avatar src="/Xu.Ganning.Headshot.jpg" name="Ganning Xu" size="lg" />

          <Heading fontSize={{ base: "3xl", md: "6xl" }} as="h1" color={textColor[colorMode]}>
            Hello, I&apos;m <chakra.span color="blue.light">Ganning Xu</chakra.span>.
          </Heading>

        </Flex>

        <Badge py={1} mr={2} mt={2} fontSize='sm' colorScheme='green'>SWE Intern @ Fidelity Investments</Badge>

        <Badge py={1} mt={2} fontSize='sm' colorScheme='yellow'>Google Summer of Code (Apache Software Foundation)</Badge>
        <Text></Text>
      </motion.div>

      <Box>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            I&apos;m a <CustomLink
              href="https://www.tacobellfoundation.org/live-mas-scholarship/"
            >Live Más Scholar</CustomLink> and Computer Science student at the{" "}
            <CustomLink
              href="https://www.gatech.edu/"
            >
              Georgia Institute of Technology {" "}
            </CustomLink>
            (spring 2026 graduation). At Fidelity, I&apos;m on the Brokerage Technology team, working on unit test coverage for an internal tool. At Google Summer of Code, I&apos;m working with the Apache Software Foundation by developing a desktop application to transfer files to and manage files on supercomputers.
          </Text>

          <Text mt="4" fontSize="xl" fontWeight={600}>
            At Georgia Tech, I&apos;m part of the tech team at <CustomLink
              href="https://hexlabs.org/"
            >HexLabs</CustomLink> and an officer for <CustomLink
              href="https://gt-webdev-website.vercel.app/"
            >Web Development Club</CustomLink>. I fell in love with programming in 9th grade, and I love being
            able to make a difference in the lives of others through code. These
            days, I&apos;m developing{" "}
            <CustomLink
              href="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc"
            >
              Chrome extensions
            </CustomLink>
            , mobile{" "}
            <CustomLink
              href="https://price.house.gov/newsroom/press-releases/rep-price-announces-winner-2021-congressional-app-challenge"
            >
              apps
            </CustomLink>
            ,{" "}
            <CustomLink
              href="https://www.bitproject.org/"
            >
              websites
            </CustomLink>{" "}
            for non-profits, and{" "}
            <CustomLink
              href="https://easybag98.qoom.space/~/MaskUp/detect"
            >
              machine learning
            </CustomLink>{" "}
            models. In my free time, I love{" "}
            <CustomLink
              href="/statistics"
            >
              swimming, biking, and running
            </CustomLink>
            ! I also really love airplanes and want to get my private pilot license one day. Anyways, I&apos;ll let you get back to what you came here for.
            Feel free to poke around this site, and please{" "}
            <CustomLink
              href="mailto:ganning.xu@gatech.edu"
            >
              reach out
            </CustomLink>{" "}
            if you want to talk about anything :)
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            Feel free to connect with me!
          </Text>

          <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="1">
            <Link href="mailto:ganning.xu@gatech.edu" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                Email
              </Button>
            </Link>

            <Link href="https://github.com/ganning127" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                GitHub
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/ganningxu"
              _hover={{}}
              isExternal
            >
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                LinkedIn
              </Button>

            </Link>

            <Link
              href="/gxu_resume.pdf"
              _hover={{}}
              isExternal
            >
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                Resume
              </Button>

            </Link>
          </Stack>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.7 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            Some fun projects I&apos;ve built (you can find more{" "}
            <CustomLink
              href="/projects"
            >
              here
            </CustomLink>
            ):
          </Text>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing="60px"
            justifyContent="center"
            mt="4"
          >
            <ProjectCard
              title="Focale"
              glow={false}
              image="/project-focale.png"
              alt="Picture of the Focale chrome extension popup"
              desc="Focale is a chrome extension designed to help students time and pace their studies efficiently. 1000+ active users."
              github="https://github.com/ganning127/focale"
              link="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc"
              timeframe="Summer 2021"
              type="misc"
            />
            <ProjectCard
              title="UNCW Wang Lab Website"
              glow={false}
              image="/project-wang-lab.png"
              alt="Picture of The Wang Lab's home page"
              desc="Designed, developed, and tested The Wang Lab's website in collaboration with another developer."
              github="https://github.com/ganning127/uncw-wang-lab"
              link="https://www.thewanglab.org/"
              timeframe="Spring 2022"
              type="website"
            />
            <ProjectCard
              title="CounselorBot"
              glow={false}
              alt="Picture of The Wang Lab's home page"
              image="/project-counselorbot.png"
              desc="Helped develop the serverless version of CounselorBot, a GitHub bot that autonomously guides students through GitHub learning repositories."
              github="https://github.com/bitprj/counselor"
              link="https://github.com/apps/counselorbot"
              timeframe="Summer 2021"
              type="bot"
            />
          </SimpleGrid>
        </motion.div>
      </Box>
    </Box>
  );
};
