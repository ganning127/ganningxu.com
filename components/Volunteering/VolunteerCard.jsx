import { Box, Text, useColorMode } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
export const VolunteerCard = (props) => {
    const { colorMode } = useColorMode()
    const headingColors = {
        light: 'purple.dark',
        dark: 'purple.light'
    }

    const subColors = {
        light: "#8c8c8c",
        dark: "yellow.dark"
    }

    const bulletColors = {
        light: "#15161a",
        dark: "white"
    }

    return (
        <Box color="white">
            <Text fontSize='2xl' fontWeight={800} color={headingColors[colorMode]}>{props.position}</Text>
            <Text fontSize='sm' fontWeight={500} fontStyle="italic" color={subColors[colorMode]}>{props.org}</Text>
            <UnorderedList p="2">
                {
                    props.bullets.map((bullet, i) => (
                        <ListItem fontSize='lg' fontWeight="semibold" color={bulletColors[colorMode]} key={i}>{bullet}</ListItem>
                    ))
                }
            </UnorderedList>

        </Box >
    )
}