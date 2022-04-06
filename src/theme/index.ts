import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  fonts: {
    heading: "red",
    body: "Inter",
    bg:"red",
  },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: 'gray.800',
            },
            // styles for the `a`

        },
    },
});
