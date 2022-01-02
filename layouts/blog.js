import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import {
    Flex,
    Stack,
    Img,
    Box,
    Container,
    Text,
    Divider,
    Link
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { IoLogoTwitter } from "react-icons/io";
import { useRouter } from 'next/router'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'

const tweetUrl = (title, slug) =>
    `https://twitter.com/intent/tweet?text=Check out this blog by Ganning Xu: ${title} - http://ganning.me/blog${slug}`

export default function BlogLayout({ children, frontMatter }) {

    const router = useRouter();
    const slug = router.asPath.replace('/blog', '')

    const [width, setWidth] = useState(1)
    const handleScroll = () => {
        let scrollTop = window.scrollY;
        let docHeight = document.body.offsetHeight;
        let winHeight = window.innerHeight;
        let scrollPercent = scrollTop / (docHeight - winHeight);
        let scrollPercentRounded = Math.round(scrollPercent * 100);
        setWidth(scrollPercentRounded)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (

        <>

            <Head>
                <title>Blog - {frontMatter.title}</title>
                <meta property="og:title" content={`Blog - ${frontMatter.title}`} />
                <meta property="og:image" content={frontMatter.image} />
                <meta property="og:description" content={frontMatter.summary} />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="blog" />
            <Box as="section" bg="black" pt="24" overflow="hidden" color="white">
                <Container
                    maxW="container.xl"
                    px="8"
                >

                    <Stack
                        as="article"
                        spacing={8}
                        justifyContent="center"
                        alignItems="flex-start"
                        m="0 auto 4rem auto"
                        maxWidth="800px"
                        w="100%"
                        px={2}

                    >
                        <Flex
                            flexDirection="column"
                            justifyContent="center"
                            alignItems="flex-center"
                            maxWidth="800px"
                            w="100%"
                        >
                            <h1 className="text-5xl font-bold text-light-blue">{frontMatter.title}</h1>
                            <Img src={frontMatter.image} className="rounded-md" my="8" />
                            <Flex>
                                <p className="font-bold text-xl inline mr-2 text-slate-500">Written by</p>
                                <p className="font-bold text-xl inline mr-2">Ganning Xu</p>
                                <p className="font-bold text-xl inline mr-2 text-slate-500">({frontMatter.readingTime.text})</p>
                            </Flex>

                        </Flex>
                        <Divider />
                        {children}
                        <Box d="flex" >
                            <Link href={tweetUrl(frontMatter.title, slug)} _hover={{ color: "#00DAC4" }} isExternal>
                                <Icon as={IoLogoTwitter} fontSize="5xl" color="#00DAC4" mr="2" />
                                <Text d="inline" fontSize="xl" fontStyle="italic" alignSelf="center">Share this blog on Twitter!</Text>
                            </Link>
                        </Box>
                        <Divider />
                        <Footer />
                    </Stack>

                </Container>

            </Box>

        </>
    )
}