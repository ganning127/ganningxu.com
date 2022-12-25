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
} from "@chakra-ui/react";
import TypeIt from "typeit-react";
import { motion } from "framer-motion";
import { ProjectCard } from "../Cards/ProjectCard";

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
        <Heading fontSize="6xl" as="h1" color={textColor[colorMode]}>
          hello, I&apos;m <chakra.span color="blue.light">Ganning</chakra.span>.
        </Heading>

        {/* <Text fontSize="xl" fontWeight="semibold" mt="4">
          <TypeIt
            element={Heading}
            options={{
              startDelay: 2300,
              speed: 100,
            }}
            getBeforeInit={(instance) => {
              instance.type(
                "I am the Co-Founder @ Verste, Director of Engineering @ Bit Project, Director of IT @ NCSSM SG, and SG representative in NCSSM's Web Advisory Council."
              );

              // Remember to return it!
              return instance;
            }}
          />
        </Text> */}

        <Text></Text>
      </motion.div>

      <Box>
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            I&apos;m a high school senior at{" "}
            <Link
              href="https://www.ncssm.edu/"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              North Carolina&apos;s School of Science and Mathematics
            </Link>
            . I fell in love with programming in 9th grade, and I love being
            able to make a difference in the lives of others through code. These
            days, I&apos;m developing{" "}
            <Link
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              href="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc"
              isExternal
            >
              Chrome extensions
            </Link>
            , mobile{" "}
            <Link
              href="https://price.house.gov/newsroom/press-releases/rep-price-announces-winner-2021-congressional-app-challenge"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              apps
            </Link>
            ,{" "}
            <Link
              href="https://www.bitproject.org/"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              websites
            </Link>{" "}
            for non-profits, and{" "}
            <Link
              href="https://easybag98.qoom.space/~/MaskUp/detect"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              machine learning
            </Link>{" "}
            models. Specifically, I&apos;m redesigning the{" "}
            <Link
              href="https://www.acsl.org/"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              American Computer Science League&apos;s website
            </Link>
            , and working with our school&apos;s webmaster to redesign our{" "}
            <Link
              href="https://www.ncssm.edu/"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              isExternal
            >
              school&apos;s official site
            </Link>
            . In my free time, I love{" "}
            <Link
              href="/statistics"
              color="purple.light"
              _hover={{ color: "purple.hover" }}
            >
              swimming, biking, and running
            </Link>
            ! Anyways, I&apos;ll let you get back to what you came here for.
            Feel free to poke around this site, and please{" "}
            <Link
              color="purple.light"
              _hover={{ color: "purple.hover" }}
              href="mailto:xu23g@ncssm.edu"
            >
              reach out
            </Link>{" "}
            if you want to talk about anything :)
          </Text>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            Some fun projects I&apos;ve built:
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
              desc="Focale is a chrome extension designed to help students time and pace their studies efficiently."
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

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.7 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}></Text>
        </motion.div>

        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 2.1 }}
        >
          <Text mt="8" fontSize="xl" fontWeight={600}>
            Feel free to <chakra.span color="purple.light">connect</chakra.span>{" "}
            with me below!
          </Text>

          <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="1">
            <Link href="mailto:xu23g@ncssm.edu" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                email
              </Button>
            </Link>

            <Link href="https://github.com/ganning127" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                github
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
                linkedin
              </Button>
            </Link>

            <Link href="/Ganning Xu Resume.pdf" _hover={{}} isExternal>
              <Button
                bg="blue.dark"
                fontSize="2xl"
                _hover={{ bg: "blue.light" }}
              >
                resume
              </Button>
            </Link>
          </Stack>
        </motion.div>
      </Box>
    </Box>
  );
};
