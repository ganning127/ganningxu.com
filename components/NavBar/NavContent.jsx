import {
    Box,
    Center,
    HStack,
    Stack,
    StackDivider,
    useDisclosure,
} from '@chakra-ui/react'
import * as React from 'react'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { NavLink } from './NavLink'
import { NavList } from './NavList'
import { NavListItem } from './NavListItem'

const links = [
    {
        label: 'projects',
        href: '/projects',
    },
    {
        label: 'experience',
        href: '/experience',
    },
    {
        label: 'timeline',
        href: '/timeline',
    },
    {
        label: 'blog',
        href: '/blog',
    },
]

const MobileNavContent = (props) => {
    const { isOpen, onToggle } = useDisclosure()
    return (
        <Box {...props}>
            <Center
                as="button"
                p="2"
                fontSize="2xl"
                onClick={onToggle}
                color="white"
            >
                {isOpen ? <HiX /> : <HiOutlineMenu />}
            </Center>
            <NavList
                pos="absolute"
                insetX="0"
                bg="black"
                top="64px"
                animate={isOpen ? 'enter' : 'exit'}
            >
                <Stack spacing="0" divider={<StackDivider borderColor="black" />}>
                    {links.map((link, index) => {
                        let color = "white";
                        if (props.active === link.label.toLowerCase()) {
                            color = "blue.light";
                        }

                        return (
                            <NavListItem key={index} >
                                <NavLink.Mobile href={link.href} color={color} _hover={{ color: 'blue.light' }}>{link.label}</NavLink.Mobile>
                            </NavListItem>
                        )
                    })}
                    <NavListItem
                        style={{
                            flex: '1',
                        }}
                    >
                    </NavListItem>
                </Stack>
            </NavList>
        </Box>
    )
}

const DesktopNavContent = (props) => {
    return (
        <HStack spacing="8" align="stretch" {...props}>
            {links.map((link, index) => {
                let color = "white";
                if (props.active === link.label.toLowerCase()) {
                    color = "blue.light";
                }
                return (
                    <NavLink.Desktop key={index} href={link.href} fontSize="2xl" fontWeight="bold" color={color} _hover={{ color: 'blue.light' }}>
                        {link.label}
                    </NavLink.Desktop>
                )
            })}
        </HStack>
    )
}

export const NavContent = {
    Mobile: MobileNavContent,
    Desktop: DesktopNavContent,
}