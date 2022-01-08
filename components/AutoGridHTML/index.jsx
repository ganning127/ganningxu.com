import { Box, Text, Link, SimpleGrid, Image, Heading, chakra, useColorMode } from '@chakra-ui/react'

export const AutoGridHTML = ({ list, heading }) => {

    const { colorMode } = useColorMode()
    const textColors = {

        light: '#15161a',
        dark: 'white'
    }
    return (
        <Box color={textColors[colorMode]} mt="8">
            <Heading fontSize="5xl" fontWeight="bold" color="blue.light" mt="8" mb="1">
                {heading}
            </Heading>
            <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
                {list.map((item, i) => {
                    if (item.link)
                        return (
                            <Box key={i}>
                                <Link href={item.link} _hover={{ color: "#F2E3AC" }} isExternal>
                                    <Box d="flex">
                                        <Text dangerouslySetInnerHTML={{ __html: item.title }} fontWeight="bold" fontSize="lg" alignSelf="center" />
                                        {item.img &&

                                            <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                                    </Box>
                                </Link>
                            </Box>
                        )
                    else
                        return (
                            <Box key={i}>
                                <Box d="flex">
                                    <Text dangerouslySetInnerHTML={{ __html: item.title }} fontWeight="bold" fontSize="lg" d="inline" mr="2" />

                                    {item.img && <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                                </Box>
                            </Box>
                        )
                }
                )}
            </SimpleGrid>
        </Box>
    )
}