import { useState } from "react"
import Heading from "../heading"
import Subheading from "../subheading"
import InputField from "../input"
import Button from "../button"
import Bottom from "../bottom"


export default function Signin({url}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return(
        <>
            <div className="flex justify-center items-center h-screen w-screen bg-[url('/src/assets/download.jpg')] bg-cover">
                <div className="flex flex-col rounded-xl h-96 w-100 bg-zinc-800/80 backdrop-blur-md ">
                    <div className="flex justify-center">
                        <Heading text={"Sign In"}/>
                    </div>
                    <div>
                        <Subheading text={"Enter your information to Login"}/>
                    </div>
                    <div className="pl-4 pr-4 space-y-4">
                        <InputField heading={"Email"} onChange={e=>{setEmail(e.target.value)}} placeholder={"Email"} type={"text"}/>
                        <InputField heading={"Password"} onChange={e=>{setPassword(e.target.value)}} placeholder={"Password"} type={"password"}/>
                    </div>
                    <div className="flex justify-center items-center pt-4">
                        <button><Button text={"Sign In"}/></button>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Bottom text={"Donot have an account? "} link={"Sign Up"} url={"/signup"}/>
                    </div>
                </div>
            </div>

        </>
    )
}