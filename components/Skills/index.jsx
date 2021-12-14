import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import SkillsList from "./skills.json"

export const Skills = () => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                skills
            </Text>
            <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
                {
                    SkillsList.map((skill, i) => (
                        <div key={i}>
                            <div dangerouslySetInnerHTML={{ __html: skill.title }} key={i} className="font-bold text-light-purple hover:text-hover-purple" ></div>
                        </div>
                    ))

                }
            </SimpleGrid>
        </Container>
    </Box>
)