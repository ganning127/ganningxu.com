import {
  Box,
  Center,
  HStack,
  Stack,
  StackDivider,
  useDisclosure,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import * as React from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { NavLink } from "./NavLink";
import { NavList } from "./NavList";
import { NavListItem } from "./NavListItem";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const links = [
  {
    label: "projects",
    href: "/projects",
  },
  {
    label: "experience",
    href: "/experience",
  },
  {
    label: "timeline",
    href: "/timeline",
  },
  {
    label: "blog",
    href: "/blog",
  },
  {
    label: "statistics",
    href: "/statistics",
  },
];

const MobileNavContent = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let icon = colorMode === "light" ? BsFillSunFill : BsMoonFill;

  let bkgColors = {
    dark: "#15161a",
    light: "#f5f5f5",
  };

  let textColors = {
    dark: "white",
    light: "#15161a",
  };

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box {...props}>
      <Icon
        as={icon}
        color={textColors[colorMode]}
        fontSize="lg"
        alignSelf="center"
        mr="8"
        _hover={{ color: "blue.light", cursor: "pointer" }}
        onClick={toggleColorMode}
      />
      <Center as="button" p="2" fontSize="2xl" onClick={onToggle} color="white">
        {isOpen ? (
          <HiX color={textColors[colorMode]} />
        ) : (
          <HiOutlineMenu color={textColors[colorMode]} />
        )}
      </Center>

      <NavList
        pos="absolute"
        bg={bkgColors[colorMode]}
        insetX="0"
        top="64px"
        animate={isOpen ? "enter" : "exit"}
      >
        <Stack spacing="0" divider={<StackDivider borderColor="gray.300" />}>
          {links.map((link, index) => {
            let color = textColors[colorMode];
            if (props.active === link.label.toLowerCase()) {
              color = "blue.light";
            }

            return (
              <NavListItem key={index}>
                <NavLink.Mobile
                  href={link.href}
                  color={color}
                  _hover={{ color: "blue.light" }}
                >
                  {link.label}
                </NavLink.Mobile>
              </NavListItem>
            );
          })}
        </Stack>
      </NavList>
    </Box>
  );
};

const DesktopNavContent = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  let icon = colorMode === "light" ? BsFillSunFill : BsMoonFill;
  const textColors = {
    light: "#15161a",
    dark: "white",
  };

  return (
    <HStack spacing="8" align="stretch" {...props}>
      {links.map((link, index) => {
        let color = textColors[colorMode];
        if (props.active === link.label.toLowerCase()) {
          color = "blue.light";
        }
        return (
          <NavLink.Desktop
            key={index}
            href={link.href}
            fontSize="2xl"
            fontWeight="bold"
            color={color}
            _hover={{ color: "blue.light" }}
          >
            {link.label}
          </NavLink.Desktop>
        );
      })}

      <NavLink.Desktop
        fontSize="2xl"
        fontWeight="bold"
        _hover={{ color: "blue.light", cursor: "pointer" }}
        onClick={toggleColorMode}
      >
        <Icon as={icon} alignSelf="center" />
      </NavLink.Desktop>
    </HStack>
  );
};

export const NavContent = {
  Mobile: MobileNavContent,
  Desktop: DesktopNavContent,
};
