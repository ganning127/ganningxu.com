import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import ResearchList from "../../data/research.json"

export const Research = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                research
            </Text>
            {
                ResearchList.map((item, i) => (
                    <div key={i} className='mt-2'>
                        <Link className='mt-2' href={item.link} _hover={{}} isExternal>
                            <h4 className="font-bold text-light-yellow hover:text-hover-purple inline text-xl">{item.title}</h4>
                        </Link>
                    </div>
                ))
            }
        </Container>
    </Box>
)