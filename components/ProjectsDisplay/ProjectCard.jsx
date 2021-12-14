import { Box, Button, Text, Link, SimpleGrid, Image } from '@chakra-ui/react'
export const ProjectCard = ({ title, img, text, link }) => (
    <Box bg="black" color="white" maxW="300px" align="center" mx="auto" p="3" className="border-solid border-2 border-light-blue rounded-md">
        <Box>
            <Text fontSize='2xl' fontWeight={800} align="center" className="text-light-purple">{title}</Text>
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
            <Link href={link} isExternal mx="auto" _hover={{ textDecoration: "none" }}>
                <button className="rounded-full bg-light-purple py-2 px-5 font-bold text-xl mr-3 mb-2 ease-in-out duration-300 hover:px-7">See Project</button>
            </Link>
        </Box>

    </Box >
)