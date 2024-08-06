import {
  Box,
  Text,
  Heading,
  Link,
  Flex,
  Spacer,
  useColorMode,
  Img,
  Badge
} from '@chakra-ui/react';
import * as React from 'react';
export const BlogPost = ({ title, image, link, desc, isExternal, publishedAt, readingTime }) => {
  const { colorMode } = useColorMode();
  const headingColors = {
    light: '#15161a',
    dark: 'white'
  };

  const bgColors = {
    dark: 'gray.700',
    light: 'gray.100'
  };

  const hoverBgColors = {
    dark: 'gray.800',
    light: 'gray.200'
  };

  const bgBadge = {
    "2024": "purple",
    "2022": "yellow",
    "2021": "green",
  };

  const year = publishedAt.split("-")[0];
  const isNewBlog = year === new Date().getFullYear().toString();



  return (
    <Box
      overflow="hidden"
      mx="auto"
      w={{ sm: "100%" }} // width 100 when larger than sm
      transition="all 0.2s"
      target={isExternal ? "_blank" : "_self"}
      borderWidth="1px"
      borderColor={bgColors[colorMode]}
      _hover={{
        bg: hoverBgColors[colorMode]
      }}
      px={3}
      py={2}
      rounded='md'
    >
      <Link href={link} _hover={{}}>
        <Flex align='center'>
          <Box>

            <Flex align='center' gap={2}>
              {
                isNewBlog ? <Badge fontSize='md' colorScheme={bgBadge[year]}>New</Badge> : ""
              }
              <Heading fontSize="2xl" color={headingColors[colorMode]}>
                {title}
              </Heading>
            </Flex>
            <Text color="gray.500" my={0.5}>{desc}</Text>
            <Flex align='center' gap={1}>
              <Badge colorScheme={bgBadge[year]}>{year}</Badge>
              <Text color={headingColors[colorMode]}>• {readingTime.text}</Text>
            </Flex>
          </Box>
          <Spacer />
          <Box d={{ base: 'none', lg: 'block' }}>
            <Img src={image} maxH="90px" borderRadius="5px" />
          </Box>
        </Flex>
      </Link>
    </Box>
  );
};