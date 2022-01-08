import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    /*
        light = .300
        dark = .600
    */
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
            light: "#00DAC4",
            dark: "#00998a",
        },
    },
})


export default theme