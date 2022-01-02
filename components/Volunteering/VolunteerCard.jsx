import { Box, Text } from '@chakra-ui/react'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
export const VolunteerCard = (props) => (
    <Box bg="black" color="white">
        <Text fontSize='2xl' fontWeight={800} className="text-light-purple">{props.position}</Text>
        <Text fontSize='sm' fontWeight={500} className="text-dark-yellow italic">{props.org}</Text>
        <UnorderedList p="2">

            {
                props.bullets.map((bullet, i) => (
                    <ListItem fontSize='lg' fontWeight="semibold" color="white" key={i}>{bullet}</ListItem>
                ))
            }
        </UnorderedList>

    </Box >
)