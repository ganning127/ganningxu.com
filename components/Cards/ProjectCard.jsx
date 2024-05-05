import
{
  Box,
  Text,
  useColorMode,
  Icon,
  HStack,
  Flex,
  Badge,
  Spacer,
} from "@chakra-ui/react";
import { AiOutlineLink, AiOutlineGithub } from "react-icons/ai";
import * as React from "react";
export const ProjectCard = ({
  title,
  glow,
  image,
  link,
  github,
  desc,
  isExternal,
  type,
  timeframe,
}) =>
{
  let bkgUrl = `url(${image})`;
  const { colorMode } = useColorMode();
  const titleColors = {
    light: "gray.800",
    dark: "blue.light",
  };
  const descColors = {
    light: "gray.600",
    dark: "gray",
  };
  const timeColors = {
    light: "gray.500",
    dark: "blue.light",
  };

  const bgColors = {
    light: "#faf7f7",
    dark: "#242323",
  };

  const shadowColors = {
    website: {
      light: "#c391ed",
      dark: "#6f2ca8",
    },
    app: {
      light: "#affad6",
      dark: "#76e8b1",
    },
    bot: {
      light: "#c7cdfc",
      dark: "#7785f7",
    },
    workshops: {
      light: "#fab1df",
      dark: "#f765c1",
    },
    misc: {
      light: "#ffc03d",
      dark: "#fad078",
    },
  };
  return (
    <Box>
      <Box
        mx="auto"
        w={{ sm: "100%" }} // width 100 when larger than sm
        borderRadius="5px"
        bg={bgColors[colorMode]}
        transition="all 0.2s"
        boxShadow={
          glow ? `0px 0px 20px 1px ${shadowColors[type][colorMode]} ` : ""
        }
        _hover={{
          boxShadow: `0px 0px 40px 1px ${shadowColors[type][colorMode]}`,
        }}
        pb="6"
        target={isExternal ? "_blank" : "_self"}
      >
        {image && (
          <Box
            h="15rem"
            bgImage={bkgUrl}
            bgPosition="center"
            bgRepeat="no-repeat"
            backgroundSize="cover"
          ></Box>
        )}
        {!image && <Box h={1} />}
        <Box fontWeight="semibold" mx="4" mt={image ? "6" : "2"}>
          <Text fontSize="2xl" fontWeight="800" color={titleColors[colorMode]}>
            {title}
          </Text>
          <Text fontSize="md" color={descColors[colorMode]}>
            {desc}
          </Text>

          <Flex alignItems="center" mt={2}>
            <Badge mt={2} fontSize="md" color={timeColors[colorMode]}>
              {timeframe}
            </Badge>
            <Spacer />
            <HStack justify="center" spacing={4}>
              {github && (
                <Box as="a" href={github} target="_blank">
                  <Icon
                    as={AiOutlineGithub}
                    fontSize="2xl"
                    _hover={{
                      color: "purple.300",
                      fontSize: "3xl",
                    }}
                    transition="all .2s"
                  />
                </Box>
              )}
              {link && (
                <Box as="a" href={link} target="_blank">
                  <Icon
                    as={AiOutlineLink}
                    fontSize="2xl"
                    color="blue.light"
                    _hover={{
                      color: "blue.600",
                      fontSize: "3xl",
                    }}
                    transition="all .2s"
                  />
                </Box>
              )}
            </HStack>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};
