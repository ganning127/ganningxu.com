import { Box, SimpleGrid } from '@chakra-ui/react'
import Projects from '../../data/projects.json'
import { BlogCard } from '../Blog/BlogCard'

export const ProjectsDisplay = () => (
  <Box mt="8">

    <SimpleGrid minChildWidth='300px' spacing='40px' justifyContent="center">
      {Projects.slice(0).reverse().map((project, i) => {
        return (
          <BlogCard
            key={i}
            title={project.title}
            image={project.img}
            desc={project.text}
            link={project.link}
            isExternal={true}
          />
        )
      })}

    </SimpleGrid>
  </Box>
)