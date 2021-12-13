import { Box, Button, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
export const ProjectCard = ({ title, img, text, link }) => (
    <Box bg="black" color="white" maxW="300px" align="center" mx="auto" p="3" className="border-solid border-2 border-light-blue rounded-md">
        <Box>
            <Text fontSize='2xl' fontWeight={600} align="center" className="text-light-purple">{title}</Text>
            <Image
                objectFit='cover'
                src={img}
                alt='Project Image'
                borderRadius={5}
                mx="auto"
            />
            <Text fontSize="md" fontWeight={600} my="4">
                {text}
            </Text>
            <Link href={link} isExternal mx="auto">
                <Button colorScheme='blue'>See Project</Button>
            </Link>
        </Box>

    </Box>
)