import { Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cedula100 from "./images/nota100.jpg";
import Cedula50 from "./images/nota50.jpg";
import Cedula20 from "./images/nota20.jpg";
import Cedula10 from "./images/nota10.jpg";

const Bills = ({ value, quantity }: { value: number; quantity: number }) => {
    const [src, setSrc] = useState("");
    useEffect(() => {
        switch (value) {
            case 100:
                setSrc(Cedula100.src);
                break;
            case 50:
                setSrc(Cedula50.src);
                break;
            case 20:
                setSrc(Cedula20.src);
                break;
            case 10:
                setSrc(Cedula10.src);
                break;
            default:
                break;
        }
    }, []);

    const returnImage = () => {
        let images = [];
        if (quantity > 0) {
            for (let i = 0; i < quantity; i++) {
                images.push(
                    <Image key={i} src={src} width={"140px"} height={"60px"} />
                );
            }
        }
        return images;
    };

    return <>{returnImage()}</>;
};

export default Bills;
