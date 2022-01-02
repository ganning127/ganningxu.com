import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import VolunteeringList from "./volunteering.json"
import { VolunteerCard } from './VolunteerCard'
export const Volunteering = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
            volunteering
        </Text>
        <SimpleGrid minChildWidth='300px' spacingX='40px' spacingY="20px">
            {
                VolunteeringList.map((volunteer, i) => (
                    <VolunteerCard key={i} position={volunteer.position} org={volunteer.org} desc={volunteer.desc} bullets={volunteer.bullets} />
                ))
            }
        </SimpleGrid>
    </Box>
)