import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
import Projects from './projects.json'
import { ProjectCard } from './ProjectCard'

export const ProjectsDisplay = () => (
  <Box bg="black" color="white" className='mt-8'>
    <Container maxW='container.xl' px="8">
      <SimpleGrid minChildWidth='300px' spacing='40px' justifyContent="center">
        {Projects.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              title={project.title}
              img={project.img}
              text={project.text}
              link={project.link}
            />
          )
        })}

      </SimpleGrid>
    </Container>
  </Box>
)