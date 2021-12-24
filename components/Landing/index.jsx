import { Box, Container, Text, Link } from '@chakra-ui/react';
import { Button } from '../Button';
import TypeIt from "typeit-react";

export const Landing = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <TypeIt
                options={{
                    cursor: false,
                    speed: 75,
                    afterComplete: async () => {
                        // Will fire after the entire instance has completed typing.
                        // NOTE: If "loop" is enabled, this will never fire.
                        console.log('done');
                        document.getElementById("wait").classList.add("visible");
                    },
                }}
            >
                <h1 className="text-5xl font-bold">hello, I&apos;m <span className='text-light-blue'>Ganning</span>.</h1>
            </TypeIt>

            <div id="wait">
                <Text mt="8" fontSize='xl' fontWeight={600}>I&apos;m a <span className="text-light-purple">high school junior</span> at North Carolina&apos;s School of Science and Mathematics. Since discovering programming in 7th grade, coding has fascinated me with how simple, yet complex it is. In my free time, I like to create applications that have a <span className="text-light-purple">positive</span> impact on the lives of those around me. I&apos;ve created <a href="https://chrome.google.com/webstore/detail/focale-study-pal/khjidjdpidalladedmkjibjkklanhcnc" target="_blank" rel="noreferrer" className="text-light-purple hover:text-hover-purple">Chrome extensions</a>, mobile <a href="https://price.house.gov/newsroom/press-releases/rep-price-announces-winner-2021-congressional-app-challenge" target="_blank" rel="noreferrer" className="text-light-purple hover:text-hover-purple">apps</a>, <a href="https://www.bitproject.org/" target="_blank" rel="noreferrer" className="text-light-purple hover:text-hover-purple">websites</a> for non-profits, and <a href="https://easybag98.qoom.space/~/MaskUp/detect" target="_blank" rel="noreferrer" className="text-light-purple hover:text-hover-purple">machine learning</a> models. Currently, I&apos;m working on an app that helps users track expiration dates for products!
                </Text>

                <Text mt="8" fontSize='xl' fontWeight={600}>In addition to computer science, <span className="text-light-purple">business management</span> and administration is a <span className="text-light-purple">passion</span> of mine. I love being able to lead teams and see projects through from start to finish, creating a quality product in a timely manner. In college, I plan on pursuing a double major of <span className="text-light-purple">computer science</span> and <span className="text-light-purple">business management</span>.
                </Text>



                <Text mt="8" fontSize='xl' fontWeight={600}>Feel free to <span className='text-light-purple'>connect</span> with me below!</Text>

                <Box mt="4">
                    <Link href='mailto:xu23g@ncssm.edu' isExternal>
                        <Button color="text-white" bg="bg-dark-blue" hover="hover:bg-light-blue" fontSize="text-2xl" classes="mr-2 my-2 pt-1 pb-2">email</Button>
                    </Link>
                    <Link href='https://github.com/ganning127' isExternal>
                        <Button color="text-white" bg="bg-dark-blue" hover="hover:bg-light-blue" fontSize="text-2xl" classes="mr-2 my-2 pt-1 pb-2">github</Button>
                    </Link>

                    <Link href='https://www.linkedin.com/in/ganningxu/' isExternal>
                        <Button color="text-white" bg="bg-dark-blue" hover="hover:bg-light-blue" fontSize="text-2xl" classes="mr-2 my-2 pt-1 pb-2">linkedin</Button>
                    </Link>

                    <Link href='/Ganning Xu Resume - Final.pdf' isExternal>
                        <Button color="text-white" bg="bg-dark-blue" hover="hover:bg-light-blue" fontSize="text-2xl" classes="my-2 pt-1 pb-2">resume</Button>
                    </Link>

                </Box>
            </div>


        </Container>
    </Box>
)