import { Box, Container, Text, Link, SimpleGrid } from '@chakra-ui/react'

export const Landing = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <h1 className="text-5xl font-bold">hello, I&apos;m <span className='text-light-blue'>Ganning.</span></h1>

            <Text mt="8" fontSize='xl' fontWeight={600}>I&apos;m a <span className="text-light-purple">high school junior</span> at North Carolina&apos;s School of Science and Mathematics. Since discovering programming in 7th grade, coding has fascinated me with how simple, yet complex it is. In my free time, I like to create applications that have a <span className="text-light-purple">positive</span> impact on the lives of those around me.</Text>

            <Box mt="4">
                <Link href='mailto:xu23g@ncssm.edu' isExternal>
                    <button className="rounded-full bg-light-purple py-2 px-5 font-bold text-xl mr-3 mb-2 text-black ease-in-out duration-300 hover:px-7">Email</button>
                </Link>
                <Link href='https://github.com/ganning127' isExternal>
                    <button className="rounded-full bg-light-purple py-2 px-5 font-bold text-xl mr-3 mb-2 text-black ease-in-out duration-300 hover:px-7">GitHub</button>
                </Link>

                <Link href='https://www.linkedin.com/in/ganningxu/' isExternal>
                    <button className="rounded-full bg-light-purple py-2 px-5 font-bold text-xl mb-2 text-black ease-in-out duration-300 hover:px-7">LinkedIn</button>
                </Link>
            </Box>
        </Container>
    </Box>
)