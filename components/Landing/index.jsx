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
        <Flex align='center' gap={4} mb={2}>
          <Avatar src="/Xu.Ganning.Headshot.jpg" name="Ganning Xu" size="lg" />

          <Heading fontSize={{ base: "3xl", md: "6xl" }} as="h1" color={textColor[colorMode]}>
            Hello, I&apos;m <chakra.span color="blue.light">Ganning Xu</chakra.span>.
          </Heading>
        </Flex>

        <Badge py={1} mr={2} mt={2} fontSize='sm' colorScheme='blue'>CS 2110 Teaching Assistant @ Georgia Tech</Badge>

        <Text mt={4} fontWeight='bold'>
          Previously:
        </Text>

        <Stack
          spacing={2}
          direction={{
            base: "column", md: "row"
          }}
          mt={2}
        >
          <Box>
            <Badge py={1} size='xs' colorScheme='green'>SWE Intern @ Fidelity Investments</Badge>
          </Box>
          <Box>
            <Badge py={1} size='xs' colorScheme='yellow'>SWE Intern @ Apache Software Foundation</Badge>
          </Box>
          <Box>
            <Badge py={1} size='xs' colorScheme='purple'>SWE Intern @ iRODS</Badge>
          </Box>
        </Stack>
        <Text></Text>
      </motion.div>

      <Box>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Text mt="8" fontSize='lg'>
            I&apos;m a <CustomLink
              href="https://www.tacobellfoundation.org/live-mas-scholarship/"
            >Live Más Scholar</CustomLink> and Computer Science student at the{" "}
            <CustomLink
              href="https://www.gatech.edu/"
            >
              Georgia Institute of Technology {" "}
            </CustomLink>
            (spring 2026 graduation). This past summer I was on the Fidelity Investments Brokerage Technology team, working on unit test coverage for an internal tool. I also worked with the Apache Software Foundation by developing a desktop application to transfer files to and manage files on supercomputers. Last summer, at iRODS, I was heavily upgraded the Zone Management Tool and NFSRODS.
          </Text>

          <Text mt="4" fontSize="lg" >
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
            , mobile apps, {" "}
            <CustomLink
              href="https://www.bitproject.org/"
            >
              websites
            </CustomLink>{" "}
            for non-profits, and{" "}
            <CustomLink
              href="https://devfolio.co/projects/aire-f70b"
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
          <Text mt="8" fontSize='lg'>
            Feel free to connect with me!
          </Text>

          <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="1">
            <Link href="mailto:ganning.xu@gatech.edu" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                size='md'
                px={2}
                _hover={{ bg: "blue.light" }}
                color='white'
              >
                Email
              </Button>
            </Link>

            <Link href="https://github.com/ganning127" _hover={{}} isExternal>
              <Button
                px={2}
                bg="blue.dark"
                _hover={{ bg: "blue.light" }}
                color='white'
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
                px={2}
                _hover={{ bg: "blue.light" }}
                color='white'
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
                px={2}
                _hover={{ bg: "blue.light" }}
                color='white'
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
          <Text mt="8" fontSize="lg">
            Some fun projects I&apos;ve built (
            <CustomLink
              href="/projects"
            >
              more
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
              desc="1,000 weekly users. Chrome extension to help students time and pace their studies efficiently."
              github="https://github.com/ganning127/focale"
              link="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc"
              timeframe="Summer 2021"
              type="misc"
            />
            <ProjectCard
              title="GT Academic Calendars"
              glow={false}
              image="/project-gtacademiccalendars.png"
              alt="Picture of The Wang Lab's home page"
              desc="Used by 5,000 Georgia Tech students. Visualizes GT's Academic Calendar."
              github="https://github.com/ganning127/gt-academic-calendars"
              link="https://gtacademiccalendar.ganningxu.com"
              timeframe="Summer 2024"
              type="website"
            />
            <ProjectCard
              title="Cybershuttle Local Agent"
              glow={false}
              alt="Picture of Cybershuttle Local Agent UI"
              image="/project-cybershuttle.png"
              desc="Used by 300 computational scientists. Built for Apache Software Foundation."
              github="https://github.com/apache/airavata/tree/master/airavata-local-agent"
              link=""
              timeframe="Summer 2024"
              type="bot"
            />
          </SimpleGrid>
        </motion.div>
      </Box>
    </Box >
  );
};
