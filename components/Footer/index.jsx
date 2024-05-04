import { Text, Box } from '@chakra-ui/react';
export const Footer = () => (
    <Box mt="10" mb="8">
        <Text d="inline" fontWeight="semibold" fontSize="2xl" color="gray.600">~ Ganning Xu &copy; {new Date().getFullYear()}</Text>
    </Box>
);
