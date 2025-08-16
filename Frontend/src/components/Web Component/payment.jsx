import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Heading from "../heading";
import Button from "../button";
import DropdownButton from "../dropdown";

export default function Payment() {
  const [amount, setAmount] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const user = location.state.user;

  return (
    <div className="relative min-h-screen w-screen">
      {/* Background Image Layer */}
      <div className="absolute inset-0 bg-[url('/src/assets/download.jpg')] bg-cover bg-center"></div>

      {/* Content Layer */}
      <div className="relative z-10 p-4">
        {/* Navbar */}
        <div className="flex justify-between items-center mt-3 pl-5 pr-10 bg-zinc-700/60 backdrop-blur-md rounded-lg w-full h-14  mx-auto">
            <svg onClick={() => navigate("/dashboard")} xmlns="http://www.w3.org/2000/svg" fill="none" 
                viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-6 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>  
          <div className="flex items-center gap-5">
            <div className="text-white">Hello, user</div>
            <DropdownButton />
          </div>
        </div>

        {/* Card Section */}
        <div className="flex justify-center items-center mt-16">
          <div className="flex flex-col justify-between items-center rounded-xl mt-10 bg-zinc-800/80 backdrop-blur-md p-6 w-[400px]">
            {/* Top Section */}
            <div className="flex justify-center items-center w-full">
              <Heading text={"Payment"} />
            </div>
                <button className="text-black text-2xl w-20 h-20 rounded-full bg-white flex items-center justify-center">
                  {user.firstName[0].toUpperCase() +
                    user.firstName[1].toUpperCase()}
                </button>

            {/* Bottom Section */}
            <div className="flex flex-col w-full mt-4 gap-3">
              <div className="flex items-center gap-3">

                <div className="text-white text-lg">
                  {user.firstName} {user.lastName}
                </div>
              </div>
              <div className="text-white text-lg">Amount (in INR)</div>
              <input
                type="number"
                className="bg-zinc-700 rounded-lg pl-2 mt-1 text-white h-8"
                placeholder="Enter amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <div className="flex justify-center items-center pt-4">
                <Button text={"Pay"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
