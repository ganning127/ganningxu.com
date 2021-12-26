import { Box, Text, Link, Image } from '@chakra-ui/react';
import { Button } from "../Button";

export const ProjectCard = ({ title, img, text, link }) => (
    <Box bg="black" color="white" maxW="300px" align="center" mx="auto" p="3" className="border-solid border-2 rounded-md">
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
            <Link href={link} isExternal mx="auto">
                <Button bg="bg-dark-purple" hover="hover:bg-light-purple" color="text-white" fontSize="text-xl" classes="my-2 py-1">View Project</Button>
            </Link>
        </Box>

    </Box >
)