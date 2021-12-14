import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'

export const AutoGridHTML = ({ list, heading }) => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                {heading}
            </Text>
            <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
                {list.map((item, i) => (
                    <p dangerouslySetInnerHTML={{ __html: item.title }} key={i} className="font-bold"></p>
                )
                )}
            </SimpleGrid>
        </Container>
    </Box>
)