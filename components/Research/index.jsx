import { Box, Text, Link, Heading, useColorMode } from '@chakra-ui/react';
import ResearchList from "../../data/research.json";

export const Research = () => {
  const { colorMode } = useColorMode();
  const textColors = {
    light: 'purple.dark',
    dark: 'yellow.dark'
  };

  return (
    <Box color="white" mt="8">
      <Heading fontSize="4xl" fontWeight="bold" mt="8" color="blue.light" mb="1">
        Research
      </Heading>
      {
        ResearchList.map((item, i) => {
          if (item.link !== "") {
            return (
              <Box key={i} mt="2">
                <Link mt="2" href={item.link} _hover={{}} isExternal>
                  <Text
                    color={textColors[colorMode]}
                    d="inline" fontSize="lg" _hover={{ color: 'purple.hover' }}>{item.title}</Text>
                </Link>
              </Box>
            );

          }
          return (
            <Box key={i} mt="2">
              <Text
                color={textColors[colorMode]}
                d="inline" fontSize="lg">{item.title}</Text>
            </Box>
          );

        })
      }
    </Box>
  );
};