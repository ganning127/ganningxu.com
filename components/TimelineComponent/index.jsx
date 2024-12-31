import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { MdWork, MdSchool, MdStars } from "react-icons/md";
import { FaBaby } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import timelineData from "../../data/timelineData";
import {
  Image,
  Heading,
  Text,
  Stack,
  Box,
  Badge,
  chakra,
  useColorMode,
  SimpleGrid,
  Img,
  Code,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
export const TimelineComponent = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  const { colorMode } = useColorMode();
  const lineColors = {
    light: "#15161a",
    dark: "#4a4a4a",
  };

  const textColors = {
    light: "#15161a",
    dark: "white",
  };

  const bgColors = {
    dark: "#242323",
    light: "#faf7f7",
  };

  const typeIcons = {
    school: <MdSchool />,
    work: <MdWork />,
  };

  return (
    <>
      <Stack maxW='container.md' mx='auto' gap={2}>
        {timelineData
          .slice(0)
          .reverse()
          .map((item, index) => {
            if (item.noShow) return;
            return (
              <Box key={index} border={`1px solid ${lineColors[colorMode]}`}
                p={2}
                rounded="md">
                <Box d="flex" alignItems="center" gap={4}
                >
                  <Img
                    d="inline"
                    src={item.img}
                    alt={item.alt}
                    maxH='70px'
                    rounded='md'
                  />
                  <Box>
                    <Text
                      fontSize="lg"
                      fontWeight="bold"
                    >
                      {item.headline}
                    </Text>
                    <Text
                      color={textColors[colorMode]}
                      fontSize='sm'
                    >
                      {item.company}
                    </Text>
                    <Stack
                      spacing={2}
                      mt={1}
                      justify="flex-end"
                      wrap="wrap"
                      direction="row-reverse"
                      p={0}
                    >
                      {item.skills?.reverse().map((skill, index) => {
                        return (
                          <Box key={index} p={0} m={0}>
                            <Code colorScheme="teal" fontSize='xs'>{skill}</Code>
                          </Box>
                        );
                      })}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            );
          })}
      </Stack>
    </>
  );
};