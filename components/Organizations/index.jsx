import { Box, Heading, Text, useColorMode } from '@chakra-ui/react';
import OrganizationsList from "../../data/orgs.json";

export const Organizations = () =>
{
    const { colorMode } = useColorMode();
    const textColors = {
        light: "purple.light",
        dark: "white"
    };
    const headingColors = {
        light: 'purple.dark',
        dark: 'purple.light'
    };
    return (
        <Box color="white" mt="8">
            <Heading fontSize="5xl" fontWeight="bold" mt="8" color="blue.light" mb="1">
                Organizations
            </Heading>
            {
                OrganizationsList.map((organization, i) => (
                    <Box key={i} mt="2">
                        <Text
                            fontWeight="semibold"
                            color={headingColors[colorMode]}
                            d="inline"
                            fontSize="lg">
                            {organization.name}
                        </Text>

                        <Text
                            fontWeight="semibold"
                            color={textColors[colorMode]}
                            d="inline"
                            fontSize="lg">
                            : {organization.desc}
                        </Text>
                    </Box>
                ))
            }
        </Box >
    );
};