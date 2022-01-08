import {
    Box,
    Text,
    Heading,
    Link,
    Flex,
    Spacer,
    Img
} from '@chakra-ui/react'
import * as React from 'react'
import PageViews from '../../pages/api/getBlogViews'
export const BlogPost = ({ title, image, link, desc, isExternal, publishedAt, slug }) => {
    let bkgUrl = `url(${image})`
    let views = PageViews(slug);
    return (
        <Box
            overflow="hidden"
            mx="auto"
            as="a"
            w={{ sm: "100%" }} // width 100 when larger than sm
            // borderRadius="5px"
            href={link}
            transition="all 0.2s"
            // pb="6"
            target={isExternal ? "_blank" : "_self"}
        >
            <Link href={link} _hover={{}}>
                <Flex>
                    <Box>
                        <Heading fontSize="3xl" _hover={{ color: "purple.light" }}>{title}</Heading>
                        <Text color="gray.500" fontSize="md" noOfLines={1}>{desc}</Text>
                        <Text fontWeight="semibold" color="gray.300">{views} • {publishedAt}</Text>
                    </Box>
                    <Spacer />
                    {/* only display the image when greater than sm device size */}
                    <Box d={{ base: 'none', lg: 'block' }}>
                        <Img src={image} maxH="90px" borderRadius="5px" />
                    </Box>
                </Flex>



            </Link>



        </Box>

    )
}