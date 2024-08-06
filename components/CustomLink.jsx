import { Link } from "@chakra-ui/react";

export const CustomLink = ({ href, children }) => {
    return (
        <Link
            href={href}
            color="blue.light"
            _hover={{ color: "blue.hover" }}
            isExternal={href.startsWith("http")}
        >
            {children}
        </Link>
    );
};