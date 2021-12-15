import { Box, Container, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'

export const AutoGridHTML = ({ list, heading }) => (
    <Box bg="black" color="white" className='mt-8'>
        <Container maxW='container.xl' px="8">
            <Text fontSize="5xl" fontWeight="bold" className='mt-8 text-light-blue'>
                {heading}
            </Text>
            <SimpleGrid minChildWidth='200px' spacingX='40px' justifyContent="center" spacingY="20px">
                {list.map((item, i) => {
                    if (item.link)
                        return (
                            <div key={i}>
                                <Link href="bob" _hover={{ color: "#F2E3AC" }}>
                                    <p dangerouslySetInnerHTML={{ __html: item.title }} className="font-bold text-xl inline mr-2"></p>
                                    {item.img && <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                                </Link>
                            </div>
                        )
                    else
                        return (
                            <div key={i}>
                                <p dangerouslySetInnerHTML={{ __html: item.title }} className="font-bold text-xl inline mr-2"></p>
                                {item.img && <Image d="inline" src={item.img} alt={item.title} boxSize='30px' objectFit='cover' />}
                            </div>
                        )
                }
                )}
            </SimpleGrid>
        </Container>
    </Box>
)