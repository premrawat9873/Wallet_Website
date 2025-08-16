import { useState } from "react";
import Button from "./button";
import { useNavigate } from "react-router-dom";

export default function Person() {
    const navigate = useNavigate();

    const [person] = useState([
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Prem",
            lastName: "Rawat"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Arunabha",
            lastName: "Paul"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Prem",
            lastName: "Rawat"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Arunabha",
            lastName: "Paul"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Prem",
            lastName: "Rawat"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Arunabha",
            lastName: "Paul"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Prem",
            lastName: "Rawat"
        },
        {
            username: "premrawat9873@gmail.com",
            password: "Prem@9873",
            firstName: "Ayush",
            lastName: "Lal"
        },
    ]);

    const handlePaymentClick = (user) => {
        navigate("/payment", { state: { user } });
    };

    return (
        <div className="flex flex-col items-center">
            {person.map((p, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center h-20 w-350 pl-10 pr-5 mt-5 bg-zinc-700/50 backdrop-blur-md rounded-2xl"
                >
                    <AllUsers p={p} onClick={() => handlePaymentClick(p)} />
                </div>
            ))}
        </div>
    );
}

function AllUsers({ p, onClick }) {
    return (
        <>
            <div className="flex items-center gap-3">
                <button className="text-black text-2xl w-10 h-10 rounded-full bg-white">
                    {p.firstName[0].toUpperCase() + p.firstName[1].toUpperCase()}
                </button>
                <h1 className="text-white text-lg">
                    {p.firstName} {p.lastName}
                </h1>
            </div>
            <Button text={"Make Payment"} onClick={onClick} />
        </>
    );
}
