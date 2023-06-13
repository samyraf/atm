import { Container, Text } from "@chakra-ui/react";

const Header = () => {
    return (
        <Container p={"0"} m={"0"} bg={"blue.100"}>
            <Text
                color={"yellow.100"}
                fontSize={"60px"}
                fontWeight={"800"}
                textAlign={"center"}
            >
                ATM
            </Text>
        </Container>
    );
};

export default Header;
