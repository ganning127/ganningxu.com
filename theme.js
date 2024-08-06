import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        yellow: {
            "light": "#ffffe0",
            "dark": "#F2E3AC",
        },
        purple: {
            "light": "#BB86FC",
            "dark": "#531987",
            "hover": "#d3b0ff",
        },
        blue: {
            light: "#02c2ae",
            dark: "#00998a",
            hover: "#018c7e",
        },
        bkg: {
            dark: "#15161a",
            light: "#f5f5f5",
        }
    },
    initalColorMode: 'dark',
    useSystemColorMode: false,
});


export default theme;