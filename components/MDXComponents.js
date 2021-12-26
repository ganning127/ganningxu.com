/* eslint-disable react/display-name */
import {
    Box,
    Alert,
    Code,
    Heading,
    Link,
    Text,
    Divider,
    useColorMode
} from '@chakra-ui/react'
import { jsx } from '@emotion/react'
import NextLink from 'next/link'
import React from "react"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const CustomLink = (props) => {
    const { colorMode } = useColorMode()
    const color = {
        light: 'hsl(208, 99%, 44%)',
        dark: 'hsl(208, 95%, 68%)'
    }

    const href = props.href
    const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

    if (isInternalLink) {
        return (
            <NextLink href={href} passHref>
                <Link color={color[colorMode]} {...props} />
            </NextLink>
        )
    }

    return <Link color={color[colorMode]} isExternal {...props} />
}

const Quote = (props) => {
    const { colorMode } = useColorMode()
    const bgColor = {
        light: 'blue.50',
        dark: 'blue.900'
    }

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

const DocsHeading = (props) => (
    <Heading
        css={{
            scrollMarginTop: '100px',
            scrollSnapMargin: '100px', // Safari
            '&[id]': {
                pointerEvents: 'none'
            },
            '&[id]:before': {
                display: 'block',
                height: ' 6rem',
                marginTop: '-6rem',
                visibility: 'hidden',
                content: `""`
            },
            '&[id]:hover a': { opacity: 1 }
        }}
        {...props}
        mb="0"
        mt="0"
    >
        <Box pointerEvents="auto">
            {props.children}
            {props.id && (
                <Box
                    aria-label="anchor"
                    as="a"
                    color="blue.500"
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

const Hr = () => {
    const { colorMode } = useColorMode()
    const borderColor = {
        light: 'gray.200',
        dark: 'gray.600'
    }

    return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />
}






const MDXComponents = {
    h1: (props) => <Heading as="h1" size="xl" my={4} {...props} />,
    h2: (props) => <DocsHeading as="h2" size="lg" fontWeight="bold" className="text-light-blue" {...props} />,
    h3: (props) => <DocsHeading as="h3" size="md" fontWeight="bold" className="text-light-purple" {...props} />,
    h4: (props) => <DocsHeading as="h4" size="sm" fontWeight="bold" className="text-light-blue" {...props} />,
    h5: (props) => <DocsHeading as="h5" size="sm" fontWeight="bold" className="text-light-blue" {...props} />,
    h6: (props) => <DocsHeading as="h6" size="xs" fontWeight="bold" className="text-light-blue" {...props} />,
    inlineCode: (props) => (
        <Code colorScheme="yellow" fontSize="0.84em" {...props} />
    ),
    br: (props) => <Box height="24px" {...props} />,
    hr: Hr,
    a: CustomLink,
    p: (props) => <p as="p" className="text-md font-semibold" lineHeight="tall" {...props} />,
    ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
    ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
    li: (props) => <Box as="li" pb={1} {...props} />,
    code: (props) => <code border="2px solid red" {...props} />,
    blockquote: Quote
}

export default MDXComponents