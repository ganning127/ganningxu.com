import Head from 'next/head'
import React, { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import { BlogCard } from '../components/Blog/BlogCard'
import { getAllFilesFrontMatter } from '../lib/mdx'
import {
    SimpleGrid,
    Container,
    Box,
} from '@chakra-ui/react'
import BlogLayout from '../layouts/blog'
import PageViews from './api/getBlogViews'
export default function BlogPosts({ posts }) {
    const [searchValue, setSearchValue] = useState('')
    const filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title.toLowerCase().includes(searchValue.toLowerCase()) ||
            frontMatter.summary.toLowerCase().includes(searchValue.toLowerCase())
        )

    return (
        <div>
            <Head>
                <title>Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar active="blog" />
            <Container
                maxW="container.xl"
                px="8"
            >
                <h1 className="text-5xl text-light-blue font-bold text-center mb-5">blog count:  <span className="text-white">{filteredBlogPosts.length}</span></h1>
                <Box as="section" bg="black" color="white">
                    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing="40px" bg="black" justify="center" >
                        {filteredBlogPosts.map((frontMatter) => {
                            const views = PageViews(frontMatter.slug);
                            return (
                                <BlogCard key={frontMatter.title} views={views} title={frontMatter.title} image={frontMatter.image} desc={frontMatter.summary} link={`blog/${frontMatter.slug}`} isTrunc={true} />
                            )
                        })}
                    </SimpleGrid>

                </Box>
                <Footer />
            </Container>


        </div>
    )
}


export function Blog({ mdxSource, frontMatter }) {
    const content = hydrate(mdxSource, {
        components: MDXComponents
    })

    return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>
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