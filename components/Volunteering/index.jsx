import { Box, Heading, SimpleGrid } from '@chakra-ui/react'
import VolunteeringList from "./volunteering.json"
import { VolunteerCard } from './VolunteerCard'
export const Volunteering = () => {

    return (
        <Box color="white" mt="8">
            <Heading fontSize="5xl" fontWeight="bold" mt="8" color="blue.light" mb="1">
                volunteering
            </Heading>
            <SimpleGrid minChildWidth='300px' spacingX='40px' spacingY="20px">
                {
                    VolunteeringList.map((volunteer, i) => (
                        <VolunteerCard key={i} position={volunteer.position} org={volunteer.org} desc={volunteer.desc} bullets={volunteer.bullets} />
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}