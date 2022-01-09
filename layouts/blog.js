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
    Spacer,
    Link,
    Heading,
    useColorMode,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { IoLogoTwitter } from "react-icons/io";
import { useRouter } from 'next/router'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import PageViews from '../pages/api/getBlogViews'
import { motion } from 'framer-motion'
import { NextSeo, ArticleJsonLd } from 'next-seo'

const tweetUrl = (title, slug) =>
    `https://twitter.com/intent/tweet?text=Check out this blog by Ganning Xu: ${title} - http://ganning.me/blog${slug}`

export default function BlogLayout({ children, frontMatter }) {
    const router = useRouter();
    const slug = router.asPath.replace('/blog', '')

    useEffect(() => {
        fetch(`/api/views/${slug}`, {
            method: 'POST'
        });
    }, [slug]);

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

    const views = PageViews(frontMatter.slug);
    const date = new Date(frontMatter.publishedAt).toISOString()
    const { colorMode } = useColorMode()
    const descColors = {
        light: '#15161a',
        dark: 'white'
    }

    const titleColors = {
        dark: 'blue.light',
        light: '#15161a'
    }



    return (

        <>
            <Head>
                <title>{`${frontMatter.title} – Ganning Xu`}</title>
                <NextSeo
                    title={`${frontMatter.title} – Ganning Xu`}
                    description={frontMatter.summary}
                    canonical={frontMatter.url}
                    openGraph={{
                        type: 'article',
                        article: {
                            publishedTime: date
                        },
                        url: frontMatter.url,
                        title: `${frontMatter.title} – Ganning Xu`,
                        description: frontMatter.summary,
                        images: [frontMatter.image]
                    }}
                />
                <ArticleJsonLd
                    authorName="Ganning Xu"
                    dateModified={date}
                    datePublished={date}
                    description={frontMatter.summary}
                    images={[frontMatter.image]}
                    publisherLogo="/favicon.ico"
                    publisherName="Ganning Xu"
                    title={frontMatter.title}
                    url={frontMatter.url}
                />


            </Head>
            <NavBar active="blog" />
            <Box as="section" pt="24" overflow="hidden" color="white">

                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: .7, delay: 0.5 }}
                >
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
                                <Heading as="h1" color={titleColors[colorMode]} fontWeight="bold" fontSize={{ base: '2xl', md: '5xl' }}>{frontMatter.title}</Heading>
                                <Img src={frontMatter.image} borderRadius="10" my="8" />
                                <Flex color={descColors[colorMode]}>
                                    <Box >
                                        <Text fontWeight="semibold" fontSize="xl">{frontMatter.readingTime.text}</Text>
                                    </Box>
                                    <Spacer />
                                    <Box>
                                        <Text alignSelf="center" fontWeight="semibold" fontSize="xl">{views}</Text>
                                    </Box>
                                </Flex>

                            </Flex>

                            <Divider />
                            {children}
                            <Link href={tweetUrl(frontMatter.title, slug)} _hover={{ color: "#00DAC4" }} isExternal>
                                <Flex d="flex" >
                                    <Icon as={IoLogoTwitter} fontSize="5xl" color="#00DAC4" mr="2" alignSelf="center" />
                                    <Text d="inline" fontSize="xl" fontStyle="italic" alignSelf="center" fontWeight="semibold" color={descColors[colorMode]}>Share this blog on Twitter!</Text>
                                </Flex>
                            </Link>

                            <Divider />
                            <Footer />
                        </Stack>

                    </Container>
                </motion.div>
            </Box>

        </>
    )
}