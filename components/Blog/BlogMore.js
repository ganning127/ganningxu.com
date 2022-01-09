import Head from 'next/head'
import React, { useState } from 'react'
import { getAllFilesFrontMatter } from '../../lib/mdx'
import {
    Container,
    Box,
    Heading,
    Text,
    InputGroup,
    InputRightElement,
    VStack,
    StackDivider,
    useColorMode,
    chakra
} from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion'


export function BlogMore({ posts }) {
    const [searchValue, setSearchValue] = useState('')
    const { colorMode } = useColorMode()
    const headingColors = {
        light: '#15161a',
        dark: 'white'
    }

    let filteredBlogPosts = posts
        .sort(
            (a, b) =>
                Number(new Date(a.publishedAt)) - Number(new Date(b.publishedAt))
        )
        .filter((frontMatter) =>
            frontMatter.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
            frontMatter.summary?.toLowerCase()?.includes(searchValue.toLowerCase())
        )

    return (
        <>
            <Text>{posts}</Text>



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