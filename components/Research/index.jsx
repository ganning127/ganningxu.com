import { Box, Text, Link, Heading, useColorMode } from '@chakra-ui/react'
import ResearchList from "../../data/research.json"

export const Research = () => {
    const { colorMode } = useColorMode()
    const textColors = {
        light: 'purple.dark',
        dark: 'yellow.dark'
    }

    return (
        <Box color="white" mt="8">
            <Heading fontSize="5xl" fontWeight="bold" mt="8" color="blue.light" mb="1">
                research
            </Heading>
            {
                ResearchList.map((item, i) => (
                    <Box key={i} mt="2">
                        <Link mt="2" href={item.link} _hover={{}} isExternal>
                            <Text
                                fontWeight="bold"
                                color={textColors[colorMode]}
                                d="inline" fontSize="lg" _hover={{ color: 'purple.hover' }}>{item.title}</Text>
                        </Link>
                    </Box>
                ))
            }
        </Box>
    )
}