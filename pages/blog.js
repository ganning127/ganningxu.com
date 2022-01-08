import Head from 'next/head'
import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { BlogCard } from '../components/Blog/BlogCard'
import { BlogPost } from '../components/Blog/BlogPost'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
    SimpleGrid,
    Container,
    Box,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Stack, HStack, VStack, StackDivider,
    chakra
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'


export default function BlogPosts({ posts }) {
    const [searchValue, setSearchValue] = useState('')

    let filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            frontMatter.summary?.toLowerCase()?.includes(searchValue.toLowerCase())
        )



    return (
        <>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="blog" />
            <Container
                maxW="container.xl"
                px="8"
            >
                <Heading as="h2" color="blue.light" fontSize="5xl" mb="5" textAlign="center">blog <chakra.span color="white">({filteredBlogPosts.length} posts)</chakra.span></Heading>

                <Box as="section" bg="black" color="white">
                    <InputGroup mb={4} mr={4} w="100%">
                        <Input
                            aria-label="Search by post title or summary"
                            onChange={(e) => setSearchValue(e.target.value)}
                            placeholder="Search by post title or summary"
                        />
                        <InputRightElement>
                            <SearchIcon color="gray.300" />
                        </InputRightElement>
                    </InputGroup>

                    {/* {!filteredBlogPosts.length && 'No posts found.'} */}
                    <VStack
                        divider={<StackDivider borderColor='gray.200' />}
                        spacing={4}
                        align='stretch'

                    >
                        {filteredBlogPosts.map((frontMatter) => (
                            <BlogPost
                                key={frontMatter.title}
                                title={frontMatter.title}
                                slug={frontMatter.slug}
                                image={frontMatter.image}
                                desc={frontMatter.summary}
                                link={`blog/${frontMatter.slug}`}
                                publishedAt={frontMatter.publishedAt}
                                isTrunc={true}
                            />
                        ))}
                    </VStack>
                </Box>
                <Footer />
            </Container>


        </>
    )
}

export async function getStaticProps() {

    const categories = ['blog'];
    const finalPosts = [];

    for (var i = 0; i < categories.length; i++) {
        const retrievedPosts = await getAllFilesFrontMatter(categories[i])
        finalPosts.push(...retrievedPosts)
    }
    return { props: { posts: finalPosts } }
}