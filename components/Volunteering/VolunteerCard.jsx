import { Box, Text } from '@chakra-ui/react'
import {
    ListItem,
    UnorderedList,
} from '@chakra-ui/react'
export const VolunteerCard = (props) => (
    <Box bg="black" color="white">
        <Text fontSize='2xl' fontWeight={800} color="purple.light">{props.position}</Text>
        <Text fontSize='sm' fontWeight={500} fontStyle="italic" color="yellow.dark">{props.org}</Text>
        <UnorderedList p="2">
            {
                props.bullets.map((bullet, i) => (
                    <ListItem fontSize='lg' fontWeight="semibold" color="white" key={i}>{bullet}</ListItem>
                ))
            }
        </UnorderedList>

    </Box >
)