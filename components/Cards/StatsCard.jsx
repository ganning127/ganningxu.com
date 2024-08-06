import {
  Box,
  Text,
  useColorMode
} from "@chakra-ui/react";
import * as React from "react";
const shadowColors = {
  swim: {
    light: "#c391ed",
    dark: "#6f2ca8",
  },
  ride: {
    light: "#affad6",
    dark: "#76e8b1",
  },
};
const titleColors = {
  light: "gray.800",
  dark: "gray.300",
};
const descColors = {
  light: "gray.600",
  dark: "white",
};
export const StatsCard = ({ title, value, url, color, type }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="a"
      href={url}
      target="_blank"
      transition="all 0.2s"
      boxShadow={`0px 0px 20px 1px ${shadowColors[type][colorMode]} `}
      _hover={{
        boxShadow: `0px 0px 40px 1px ${shadowColors[type][colorMode]}`,
      }}
      p={4}
      rounded="md"
    >
      <Text fontSize="xl" fontWeight="semibold" color={titleColors[colorMode]}>
        {title}
      </Text>
      <Text fontSize="3xl" fontWeight="black" color={descColors[colorMode]}>
        {value}
      </Text>
    </Box>
  );
};
