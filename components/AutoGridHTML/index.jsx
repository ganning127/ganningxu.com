import { Box, Text, Link, SimpleGrid, Image, Heading, useColorMode, Divider } from '@chakra-ui/react';

export const AutoGridHTML = ({ list, heading }) => {

  const { colorMode } = useColorMode();
  const textColors = {
    light: '#15161a',
    dark: 'white'
  };
  return (
    <Box color={textColors[colorMode]} mt="8">
      <Heading fontSize="4xl" fontWeight="bold" color="blue.light">
        {heading}
      </Heading>
      <Divider my={2} borderColor={{
        light: 'gray.200',
        dark: 'gray.500'
      }} />
      <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
        {list.map((item, i) => {
          if (item.link)
            return (
              <Box key={i}>
                <Link href={item.link} _hover={{ color: "#F2E3AC" }} isExternal>
                  <Box d="flex">
                    <Text dangerouslySetInnerHTML={{ __html: item.title }} fontSize="lg" alignSelf="center" />
                    {item.img &&

                      <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                  </Box>
                </Link>
              </Box>
            );
          else
            return (
              <Box key={i}>
                <Box d="flex">
                  <Text dangerouslySetInnerHTML={{ __html: item.title }} fontSize="lg" d="inline" mr="2" />
                  {item.img && <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                </Box>
              </Box>
            );
        }
        )}
      </SimpleGrid>
    </Box>
  );
};