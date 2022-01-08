import { Box, Heading, Text } from '@chakra-ui/react'
import OrganizationsList from "./orgs.json"

export const Organizations = () => (
    <Box bg="black" color="white" mt="8">
        <Heading fontSize="5xl" fontWeight="bold" mt="8" color="blue.light" mb="1">
            organizations
        </Heading>
        {
            OrganizationsList.map((organization, i) => (
                <Box key={i} mt="2">
                    <Text
                        fontWeight="semibold"
                        color="purple.light"
                        d="inline"
                        fontSize="lg">
                        {organization.name}
                    </Text>

                    <Text
                        fontWeight="semibold"
                        color="white"
                        d="inline"
                        fontSize="lg">
                        : {organization.desc}
                    </Text>
                </Box>
            ))
        }
    </Box >
)