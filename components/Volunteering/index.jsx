import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import VolunteeringList from "./volunteering.json"
import { VolunteerCard } from './VolunteerCard'
export const Volunteering = () => {

    return (
        <Box color="white" mt="8">
            <Heading fontSize="5xl" fontWeight="bold" mt="8" color="blue.light">
                volunteering
            </Heading>

            <Text my="2" fontWeight="semibold" fontSize="lg" fontStyle="italic">(210+ hours)</Text>

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