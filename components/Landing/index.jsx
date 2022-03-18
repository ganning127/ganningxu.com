import { Box, Text, Link, Heading, Button, chakra, Stack, useColorMode } from '@chakra-ui/react';
import TypeIt from "typeit-react";
import { motion } from "framer-motion"


export const Landing = () => {
    const { colorMode } = useColorMode();
    const textColor = {
        light: "#15161a",
        dark: "white"
    }

    return (
        <Box color={textColor[colorMode]} mt="8">
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: .7, delay: 0.5 }}
            >
                <Heading fontSize="6xl" as="h1" color={textColor[colorMode]}>hello, I&apos;m <chakra.span color="blue.light">Ganning</chakra.span>.</Heading>


                <Text fontSize="xl" fontWeight="semibold" mt="4">
                    <TypeIt
                        element={Heading}
                        options={{
                            startDelay: 2300,
                            speed: 100,
                        }}
                        getBeforeInit={(instance) => {
                            const strings = [
                                "student", "web developer", "mobile app developer", "machine learning engineer", "swimmer", "aviation enthusiast"
                            ]
                            instance
                                .type("I am a ")
                                .pause(750)
                                .type(strings[0])
                                .pause(750)
                                .delete(strings[0].length)
                                .type(strings[1])
                                .pause(750)
                                .delete(strings[1].length)
                                .type(strings[2])
                                .pause(750)
                                .delete(strings[2].length)
                                .type(strings[3])
                                .pause(750)
                                .delete(strings[3].length)
                                .type(strings[4])
                                .pause(750)
                                .delete(strings[4].length)
                                .type(strings[5])
                                .pause(750)
                                .delete(strings[5].length)
                                .type(strings[0] + ", " + strings[1] + ", " + strings[2] + ", " + strings[3] + ", " + strings[4] + ", and " + strings[5] + ".")



                            // Remember to return it!
                            return instance;
                        }}
                    />
                </Text>

                <Text></Text>
            </motion.div>


            <Box>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.9 }}
                >
                    <Text mt="8" fontSize='xl' fontWeight={600}>I&apos;m a <chakra.span color="purple.light">high school junior</chakra.span> at North Carolina&apos;s School of Science and Mathematics. Since discovering programming in 7th grade, coding has fascinated me with how simple, yet complex it is. In my free time, I like to create applications that have a <chakra.span color="purple.light">positive</chakra.span> impact on the lives of those around me. I&apos;ve created <Link color="purple.light" _hover={{ color: 'purple.hover' }} href="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc" isExternal>Chrome extensions</Link>, mobile <Link href="https://price.house.gov/newsroom/press-releases/rep-price-announces-winner-2021-congressional-app-challenge" color="purple.light" _hover={{ color: 'purple.hover' }} isExternal>apps</Link>, <Link href="https://www.bitproject.org/" color="purple.light" _hover={{ color: 'purple.hover' }} isExternal>websites</Link> for non-profits, and <Link href="https://easybag98.qoom.space/~/MaskUp/detect" color="purple.light" _hover={{ color: 'purple.hover' }} isExternal>machine learning</Link> models. Currently, I&apos;m working on an app that helps users track expiration dates for products!
                    </Text>
                </motion.div>
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7, delay: 1.3 }}
                >
                    <Text mt="8" fontSize='xl' fontWeight={600}>In addition to computer science, <chakra.span color="purple.light">business management</chakra.span> and administration is a <chakra.span color="purple.light">passion</chakra.span> of mine. I love being able to lead teams and see projects through from start to finish, creating a quality product in a timely manner. In college, I plan on pursuing a double major of <chakra.span color="purple.light">computer science</chakra.span> and <chakra.span color="purple.light">business management</chakra.span>.
                    </Text>
                </motion.div>


                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7, delay: 1.6 }}
                >
                    <Text mt="8" fontSize='xl' fontWeight={600}>Feel free to <chakra.span color="purple.light">connect</chakra.span> with me below!</Text>

                    <Stack spacing={4} direction={{ base: "column", md: "row" }} mt="1">
                        <Link href='mailto:xu23g@ncssm.edu' _hover={{}} isExternal>
                            <Button bg="blue.dark" fontSize="2xl" _hover={{ bg: 'blue.light' }}>email</Button>
                        </Link>

                        <Link href='https://github.com/ganning127' _hover={{}} isExternal>
                            <Button bg="blue.dark" fontSize="2xl" _hover={{ bg: 'blue.light' }}>github</Button>
                        </Link>

                        <Link href='https://www.linkedin.com/in/ganningxu' _hover={{}} isExternal>
                            <Button bg="blue.dark" fontSize="2xl" _hover={{ bg: 'blue.light' }}>linkedin</Button>
                        </Link>


                        <Link href='/Ganning Xu Resume.pdf' _hover={{}} isExternal>
                            <Button bg="blue.dark" fontSize="2xl" _hover={{ bg: 'blue.light' }}>resume</Button>
                        </Link>

                    </Stack>
                </motion.div>

            </Box>


        </Box >
    )
}