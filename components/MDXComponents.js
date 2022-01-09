/* eslint-disable react/display-name */
import {
    Box,
    Alert,
    Code,
    Heading,
    Link,
    Divider,
    useColorMode,
    OrderedList,
    UnorderedList,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React from "react"

const CustomLink = (props) => {

    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color="#BB86FC" {...props} />
            </NextLink>
        )
    }

    return <Link color="#BB86FC" isExternal {...props} />
}

const Quote = (props) => {
    return (
        <Alert
            mt={4}
            w="98%"
            bg={"#222326"}
            variant="left-accent"
            status="info"
            css={{
                '> *:first-of-type': {
                    marginTop: 0,
                    marginLeft: 8
                }
            }}
            {...props}
        />
    )
}

const DocsHeading = (props) => {
    const { colorMode } = useColorMode()
    const headingColors = {
        light: '#15161a',
        dark: 'blue.light'
    }


    return (
        <Heading
            color={headingColors[colorMode]}
            css={{
                // scrollMarginTop: '100px',
                scrollSnapMargin: '100px', // Safari
                '&[id]': {
                    pointerEvents: 'none'
                },
                '&[id]:before': {
                    display: 'block',
                    height: ' 6rem',
                    marginTop: '-6rem',
                    // marginBottom: '-6rem',
                    visibility: 'hidden',
                    content: `""`
                },
                '&[id]:hover a': { opacity: 1 }
            }}
            {...props}
        >
            <Box pointerEvents="auto">
                {props.children}
                {props.id && (
                    <Box
                        aria-label="anchor"
                        as="a"
                        fontWeight="normal"
                        outline="none"
                        _focus={{
                            opacity: 1,
                            boxShadow: 'outline'
                        }}
                        opacity="0"
                        ml="0.375rem"
                        href={`#${props.id}`}
                    >
                        #
                    </Box>
                )}
            </Box>
        </Heading>
    )
}

const Hr = () => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}

const Ptag = (props) => {

    const { colorMode } = useColorMode()
    const textColors = {
        light: '#15161a',
        dark: 'white'
    }

    return (
        <Text as="p" fontWeight="semibold"
            css={{
                '&[id]:before': {
                    display: 'block',
                    // marginTop: '-6rem',
                    marginBottom: '-4rem',
                    visibility: 'hidden',
                },
            }}
            color={textColors[colorMode]}
        >{props.children}</Text>
    )
}

const ColoredUnorderedList = (props) => {

    const { colorMode } = useColorMode()
    const buttonColors = {
        light: '#15161a',
        dark: 'white'
    }
    return (
        <UnorderedList as="ul" pl={4} color={buttonColors[colorMode]} fontWeight="bold" {...props} />
    )
}

const ColoredOrderedList = (props) => {

    const { colorMode } = useColorMode()
    const buttonColors = {
        light: '#15161a',
        dark: 'white'
    }
    return (
        <OrderedList as="ul" pl={4} color={buttonColors[colorMode]} fontWeight="bold" {...props} />
    )
}



const MDXComponents = {
    h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold"  {...props} />,
    h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold"  {...props} />,
    h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" {...props} />,
    h5: (props) => <DocsHeading as="h5" size="sm" fontWeight="bold"  {...props} />,
    h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold"  {...props} />,
    inlineCode: (props) => <Code colorScheme="purple" fontSize="0.84em" {...props} />,
    br: (props) => <Box height="24px" {...props} />,
    hr: Hr,
    a: CustomLink,
    p: (props) => <Ptag {...props} />,
    ul: (props) => <ColoredUnorderedList as="ul" pl={4} {...props} />,
    ol: (props) => <ColoredOrderedList as="ol" pl={4}  {...props} />,
    li: (props) => <li as="li" pb={1} fontSize="md" {...props} />,
    code: (props) => <code {...props} />,
    blockquote: Quote
}

export default MDXComponents