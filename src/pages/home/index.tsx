import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "@/src/components/header";
import Display from "@/src/components/display";

const Home = () => {
    return (
        <Flex justifyContent={"center"}>
            <Container p={"0"} m={"0"} bg={"gray.80"} width={"900px"}>
                <Header />
                <Box m={"30px"}>
                    <Display />
                </Box>
            </Container>
        </Flex>
    );
};

export default Home;
