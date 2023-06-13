import { Box, Container, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Bills from "../bills";
import NumberKeyboard from "../numberKeyboard";

interface UsedNotesProps {
    bill: number;
    quantity: number;
}

const Display = () => {
    const [inputValue, setInputValue] = useState<string>("");
    const [totalClient, setTotalClient] = useState("");
    const [totalBalance, setTotalBalance] = useState("");
    const [usedNotes, setUsedNotes] = useState<UsedNotesProps[]>([]);

    useEffect(() => {
        consumeApi();
    }, []);

    const handleNumberClick = (number: number) => {
        const updateValue = inputValue + number.toString();
        setInputValue(updateValue);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const cleanInput = () => {
        setInputValue("");
    };

    const consumeApi = async () => {
        const { data } = await axios.get(
            `/api/ATM/Withdraw?withdrawValue=${inputValue}`
        );
        setTotalClient(data.totalClient);
        setTotalBalance(data.totalBalance);
        setUsedNotes(data.usedNotes);
    };

    const updateValues = () => {
        consumeApi();
        cleanInput();
    };

    const FormatMoney: React.FC<{ value: number }> = ({ value }) => {
        const formatted = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(value);

        return formatted;
    };

    return (
        <>
            <Container
                p={"30px 15px"}
                m={"0"}
                bg={"gray.200"}
                border={"1px solid black"}
                borderRadius={"20px"}
                h={"auto"}
            >
                <Flex flexDirection={"column"} gap={"15px"}>
                    <Box
                        bg={"gray.80"}
                        borderRadius={"20px"}
                        h={"109px"}
                        w={"100%"}
                        p={"20px"}
                    >
                        <Text
                            color={"black"}
                            fontSize={"16px"}
                            fontWeight={"800"}
                        >
                            Saldo Total Cliente
                        </Text>
                        <Text
                            color={"gray.300"}
                            fontSize={"30px"}
                            fontWeight={"500"}
                        >
                            <FormatMoney value={Number(totalClient)} />
                        </Text>
                    </Box>
                    <Flex gap={"15px"}>
                        <Box
                            bg={"gray.80"}
                            borderRadius={"20px"}
                            h={"109px"}
                            w={"50%"}
                            p={"20px"}
                        >
                            <Text
                                color={"black"}
                                fontSize={"16px"}
                                fontWeight={"800"}
                            >
                                Saldo Disponível p/ Saque
                            </Text>
                            <Text
                                color={"gray.300"}
                                fontSize={"30px"}
                                fontWeight={"500"}
                            >
                                <FormatMoney value={Number(totalBalance)} />
                            </Text>
                        </Box>
                        <Box
                            bg={"gray.80"}
                            borderRadius={"20px"}
                            h={"109px"}
                            w={"50%"}
                            p={"20px"}
                        >
                            <Text
                                color={"black"}
                                fontSize={"16px"}
                                fontWeight={"800"}
                            >
                                Valor do Saque
                            </Text>
                            <Text
                                color={"gray.300"}
                                fontSize={"30px"}
                                fontWeight={"500"}
                            >
                                <FormatMoney value={Number(inputValue)} />
                            </Text>
                            <Input
                                type="number"
                                value={inputValue}
                                onChange={handleInputChange}
                                hidden={true}
                            />
                        </Box>
                    </Flex>
                </Flex>
            </Container>
            <Container p={"0"} m={"0"} position={"relative"}>
                <NumberKeyboard
                    onNumberClick={handleNumberClick}
                    onConfirmClick={updateValues}
                />
            </Container>

            <Container
                bg={"gray.100"}
                border={"1px solid black"}
                borderRadius={"20px"}
                h={"auto"}
                minHeight={"100px"}
                p={"10px 25px"}
                mt={"25px"}
            >
                <Text fontSize={"20px"} fontWeight={"700"} textAlign={"center"}>
                    Notas Retiradas
                </Text>
                <Flex
                    gap={"20px"}
                    flexWrap={"wrap"}
                    justifyContent={"center"}
                    m={"15px 0"}
                >
                    {usedNotes.map((item) => {
                        return (
                            <Bills value={item.bill} quantity={item.quantity} />
                        );
                    })}
                </Flex>
            </Container>
        </>
    );
};

export default Display;
