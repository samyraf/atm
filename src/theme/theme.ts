import { extendTheme } from "@chakra-ui/react";
import Button from "./button";
import Colors from "./colors";
import Styles from "./styles";

const theme = {
    colors: Colors,
    styles: Styles,
    components: {
        Button,
    },
};

export default extendTheme(theme);
