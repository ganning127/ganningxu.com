import Head from 'next/head';
import React, { useState } from 'react';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { BlogPost } from '../components/Blog/BlogPost';
import { getAllFilesFrontMatter } from '../lib/mdx';
import {
  Container,
  Box,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  VStack, useColorMode,
  chakra
} from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';


export default function BlogPosts({ posts }) {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const headingColors = {
    light: '#15161a',
    dark: 'white'
  };

  let filteredBlogPosts = posts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title?.toLowerCase()?.includes(searchValue.toLowerCase()) ||
      frontMatter.summary?.toLowerCase()?.includes(searchValue.toLowerCase())
    );

  return (
    <>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar active="blog" />
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .7, delay: 0.5 }}
      >
        <Container
          maxW="container.xl"
          px="8"
        >
          <Heading as="h2" color="blue.light" fontSize="4xl" mb="5" textAlign="center">Blog <chakra.span color="white">({filteredBlogPosts.length} posts)</chakra.span></Heading>

          <Box as="section" color="white">
            <InputGroup mb={4} mr={4} w="100%">
              <Input
                aria-label="Search by post title or summary"
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search by post title or summary"
                color={headingColors[colorMode]}
              />
              <InputRightElement>
                <SearchIcon color="gray.300" />
              </InputRightElement>
            </InputGroup>

            {!filteredBlogPosts.length && 'No posts found.'}
            <VStack
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
                  readingTime={frontMatter.readingTime}
                  link={`blog/${frontMatter.slug}`}
                  publishedAt={frontMatter.publishedAt}
                  isTrunc={true}
                />
              ))}
            </VStack>
          </Box>
          <Footer />
        </Container>
      </motion.div>


    </>
  );
}

export async function getStaticProps() {

  const categories = ['blog'];
  const finalPosts = [];

  for (var i = 0; i < categories.length; i++) {
    const retrievedPosts = await getAllFilesFrontMatter(categories[i]);
    finalPosts.push(...retrievedPosts);
  }
  return { props: { posts: finalPosts } };
}