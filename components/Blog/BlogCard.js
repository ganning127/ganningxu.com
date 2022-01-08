import {
    Box,
    Text,
} from '@chakra-ui/react'
import * as React from 'react'
import PageViews from '../../pages/api/getBlogViews'
export const BlogCard = ({ title, image, link, desc, isExternal, isTrunc, slug }) => {
    let bkgUrl = `url(${image})`
    let views = PageViews(slug);
    return (
        <Box
            overflow="hidden"
            mx="auto"
            as="a"
            w={{ sm: "100%" }} // width 100 when larger than sm
            borderRadius="5px"
            href={link}
            bg="#363636"
            transition="all 0.2s"
            pb="6"
            _hover={{ bg: '#4a4a4a' }}
            target={isExternal ? "_blank" : "_self"}
        >
            <Box h="15rem" bgImage={bkgUrl} bgPosition="center"
                bgRepeat="no-repeat" backgroundSize="cover">
            </Box>
            <Box
                fontWeight="semibold"
                mx="4"
                mt="6"
            >
                {((desc && isTrunc) &&
                    <>
                        <Text fontSize="2xl" fontWeight="800" color="purple.light">
                            {title}
                        </Text>
                        <Text fontSize="md" color="gray" noOfLines={1}>{desc}</Text>
                    </>
                )}

                {((desc && !isTrunc) &&
                    <>
                        <Text fontSize="2xl" fontWeight="800" color="purple.light">
                            {title}
                        </Text>
                        <Text fontSize="md" color="gray">{desc}</Text>
                    </>
                )}

                {(!desc &&
                    <>
                        <Text fontSize="2xl" fontWeight="800">
                            {title}
                        </Text>
                    </>
                )}
                {
                    slug &&
                    <Text fontSize="md" color="#eee0ff" noOfLines={1} fontStyle="italic">{views}</Text>
                }



            </Box>

        </Box>

    )
}