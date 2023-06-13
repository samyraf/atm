const Button = {
    variants: {
        numbers: {
            bg: "gray.100",
            height: "50px",
            width: "100%",
            fontSize: "30px",
            fontWeight: "900",
        },
        gray: {
            bgColor: "gray.90",
            height: "50px",
            width: "100%",
            _hover: {
                bgColor: "gray.90",
                cursor: "not-allowed",
            },
        },
        yellow: {
            bgColor: "yellow.100",
            height: "50px",
            width: "100%",
            _hover: {
                bgColor: "yellow.100",
                cursor: "not-allowed",
            },
        },
        red: {
            bgColor: "red.100",
            height: "50px",
            width: "100%",
            _hover: {
                bgColor: "red.100",
                cursor: "not-allowed",
            },
        },
        green: {
            bgColor: "green.100",
            height: "50px",
            width: "100%",
            _hover: {
                bgColor: "green.100",
                cursor: "pointer",
            },
        },
    },
};

export default Button;
