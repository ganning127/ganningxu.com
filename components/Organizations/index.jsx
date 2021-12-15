import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import OrganizationsList from "./orgs.json"

export const Organizations = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                organizations
            </Text>
            {
                OrganizationsList.map((organization, i) => (
                    <div key={i} className='mt-2'>
                        <h4 className="font-bold text-light-purple hover:text-hover-purple inline text-xl">{organization.name}:</h4>
                        <p className="inline font-semibold text-xl"> {organization.desc}</p>
                    </div>
                ))
            }
        </Container>
    </Box>
)