import { Box, Flex, Text, Img } from '@chakra-ui/react'
import * as React from 'react'
import { NavContent } from './NavContent'
import { motion } from "framer-motion"

export const NavBar = (props) => (
    <Box bg="black" color="white" pt="1" position="sticky" top="0" zIndex="100">
        <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: .7, delay: 0 }}
        >
            <Box as="header" height="16" position="relative" color="white">
                <Box
                    height="100%"
                    px={{
                        base: '8',
                        md: '8',
                    }}
                    pe={{
                        base: '8',
                        md: '8',
                    }}
                >
                    <Flex
                        as="nav"
                        aria-label="Site navigation"
                        align="center"
                        justify="space-between"
                        height="100%"
                    >
                        <motion.a href="/" whileHover={{ scale: 1.1, }}>
                            <Text
                                as="h1"
                                color="blue.light"
                                fontSize="3xl"
                                fontWeight="extrabold"
                                maxW="48rem"
                                display="inline"
                            >ganning</Text>
                            <Text
                                as="h1"
                                // size="3xl"
                                fontSize="3xl"
                                fontWeight="extrabold"
                                maxW="48rem"
                                display="inline"

                            >.me</Text>
                        </motion.a>


                        <NavContent.Desktop
                            display={{
                                base: 'none',
                                md: 'flex',
                            }}
                            active={props.active}
                        />
                        <NavContent.Mobile
                            display={{
                                base: 'flex',
                                md: 'none',
                            }}
                            active={props.active}
                        />
                    </Flex>
                </Box>
            </Box>
        </motion.div>
    </Box>
)