import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Flex, Img,
  Box,
  Container,
  Text, Spacer, Heading,
  useColorMode
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { NavBar } from '../components/NavBar';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { NextSeo, ArticleJsonLd } from 'next-seo';

export default function BlogLayout({ children, frontMatter }) {
  const date = new Date(frontMatter.publishedAt).toISOString();
  const { colorMode } = useColorMode();
  const descColors = {
    light: '#15161a',
    dark: 'white'
  };

  const titleColors = {
    dark: 'white',
    light: '#15161a'
  };

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
          }}
        />
        <ArticleJsonLd
          authorName="Ganning Xu"
          dateModified={date}
          datePublished={date}
          description={frontMatter.summary}
          publisherLogo="/favicon.ico"
          publisherName="Ganning Xu"
          title={frontMatter.title}
          url={frontMatter.url}
        />
      </Head>
      <NavBar active="blog" />
      <Box as="section" pt="8" overflow="hidden" color="white">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: .7, delay: 0.5 }}
        >
          <Container
            maxW="container.md"
            px="8"
          >
            <Flex
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-center"
              w="100%"
            >
              <Heading as="h1" color={descColors[colorMode]} fontWeight="bold" fontSize={{ base: '2xl', md: '4xl' }}>{frontMatter.title}</Heading>
              <Flex color={titleColors[colorMode]} mt={2}>
                <Box>
                  <Text fontSize="lg">{frontMatter.readingTime.text}</Text>
                </Box>
                <Spacer />
                <Box>
                  <Text alignSelf="center" fontSize="lg">{frontMatter.publishedAt}</Text>
                </Box>
              </Flex>
              {
                frontMatter.image &&
                <Img src={frontMatter.image} borderRadius="10" mt={4} />
              }
            </Flex>

            {children}

            <Footer />


          </Container>
        </motion.div>
      </Box>

    </>
  );
}