import { Button, Container, Grid, GridItem } from "@chakra-ui/react";

interface NumberKeyboardProps {
    onNumberClick: (number: number) => void;
    onConfirmClick: () => void;
}

const NumberKeyboard: React.FC<NumberKeyboardProps> = ({
    onNumberClick,
    onConfirmClick,
}) => {
    const handleClick = (number: number) => {
        onNumberClick(number);
    };

    return (
        <Container p={"0"} m={"30px 0 0 0"}>
            <Grid templateColumns={"repeat(4, 1fr)"} gap={"20px"}>
                <GridItem>
                    <Button onClick={() => handleClick(1)} variant={"numbers"}>
                        1
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(2)} variant={"numbers"}>
                        2
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(3)} variant={"numbers"}>
                        3
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant={"gray"}></Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(4)} variant={"numbers"}>
                        4
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(5)} variant={"numbers"}>
                        5
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(6)} variant={"numbers"}>
                        6
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant={"yellow"}></Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(7)} variant={"numbers"}>
                        7
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(8)} variant={"numbers"}>
                        8
                    </Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(9)} variant={"numbers"}>
                        9
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant={"red"}></Button>
                </GridItem>
                <GridItem>
                    <Button variant={"gray"}></Button>
                </GridItem>
                <GridItem>
                    <Button onClick={() => handleClick(0)} variant={"numbers"}>
                        0
                    </Button>
                </GridItem>
                <GridItem>
                    <Button variant={"gray"}></Button>
                </GridItem>
                <GridItem>
                    <Button variant={"green"} onClick={onConfirmClick}>
                        Confirmar
                    </Button>
                </GridItem>
            </Grid>
        </Container>
    );
};

export default NumberKeyboard;
