import { NextApiRequest, NextApiResponse } from "next";

let totalBalance = 1110;
let totalClient = 900000000000000;

let availableNotes = [
    { bill: 100, quantity: 5 },
    { bill: 50, quantity: 8 },
    { bill: 20, quantity: 6 },
    { bill: 10, quantity: 9 },
];

let usedNotes: any[] = [];

const Withdraw = (req: NextApiRequest, res: NextApiResponse) => {
    const {
        query: { withdrawValue },
    } = req;

    let number = Number(withdrawValue as string);
    usedNotes = [];
    if (withdrawValue) {
        for (const availableNote of availableNotes) {
            let usedQuantity = 0;
            while (number >= availableNote.bill && availableNote.quantity > 0) {
                usedQuantity++;
                availableNote.quantity--;
                number -= availableNote.bill;
            }

            usedNotes.push({
                bill: availableNote.bill,
                quantity: usedQuantity,
            });
        }

        totalBalance -= Number(withdrawValue);
        totalClient -= Number(withdrawValue);
    }

    return res.status(200).json({ totalClient, totalBalance, usedNotes });
};

export default Withdraw;
