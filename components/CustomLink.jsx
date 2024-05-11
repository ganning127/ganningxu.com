import { Link } from "@chakra-ui/react";

export const CustomLink = ({ href, children }) =>
{
    return (
        <Link
            href={href}
            color="purple.light"
            _hover={{ color: "purple.hover" }}
            isExternal
        >
            {children}
        </Link>
    );
};