import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import AwardsList from "./awards.json"

export const Awards = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                awards
            </Text>
            <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
                {AwardsList.map((award, i) => (
                    <div dangerouslySetInnerHTML={{ __html: award.title }} key={i} className="font-bold"></div>
                )
                )}
            </SimpleGrid>
        </Container>
    </Box>
)