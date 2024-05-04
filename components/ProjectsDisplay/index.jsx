import { Box, SimpleGrid, Heading, Button } from "@chakra-ui/react";
import Projects from "../../data/projects.json";
import { ProjectCard } from "../Cards/ProjectCard";
import { useState } from "react";
export const ProjectsDisplay = ({ title, itemType }) =>
{
  const INIT_NUM = 3;

  const [items, setItems] = useState(
    Projects.filter((project) => project.type === itemType)
      .reverse()
      .slice(0, INIT_NUM)
  );

  const totalNum = Projects.filter(
    (project) => project.type === itemType
  ).length;

  const handleItem = () =>
  {
    if (items.length === INIT_NUM)
    {
      setItems(
        Projects.filter((project) => project.type === itemType).reverse()
      );
    } else
    {
      setItems(
        Projects.filter((project) => project.type === itemType)
          .reverse()
          .slice(0, INIT_NUM)
      );
    }
  };
  return (
    <Box mt="8">
      <Heading
        fontSize="5xl"
        fontWeight="bold"
        mt="8"
        color="blue.light"
        mb="1"
      >
        {title}
      </Heading>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing="60px"
        justifyContent="center"
      >
        {items.map((project, i) => (
          <ProjectCard
            key={i}
            title={project.title}
            desc={project.text}
            link={project.link}
            image={project.img}
            timeframe={project.timeframe}
            isExternal={true}
            type={project.type}
            github={project.github}
            glow={true}
          />
        ))}
      </SimpleGrid>
      {totalNum > 3 && (
        <Button colorScheme="blue" onClick={handleItem} mt={4} mx="auto">
          {items.length === 3 ? `show more ${title.toLowerCase()}` : `show less ${title.toLowerCase()}`}
        </Button>
      )}
    </Box>
  );
};
