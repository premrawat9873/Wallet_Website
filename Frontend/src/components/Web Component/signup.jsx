import InputField from "../input"
import { useState } from "react"
import Button from "../button";
import Heading from "../heading";
import Subheading from "../subheading";
import Bottom from "../bottom";



export default function Signup({Url}){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");   
    return(
        <>

        <div className="flex justify-center items-center h-screen w-screen bg-[url('/src/assets/download.jpg')] bg-cover">


            <div className="flex flex-col rounded-xl h-142 w-100 bg-zinc-800/80 backdrop-blur-md ">

                    <div className="flex justify-center">
                        <Heading text={"Sign Up"}/>
                    </div>

                    <div className="flex justify-center items-center pl-2 pr-2">
                        <Subheading text={"Enter your information to create an account"}/>
                    </div>

                    <div className="pl-4 pr-4 space-y-3">
                    <InputField heading="First Name" placeholder={"First Name"} type={"text"} onChange={e=>{
                        setFirstName(e.target.value);
                    }}/>
                    <InputField heading="Last Name" placeholder={"Last Name"} type={"text"} onChange={e=>{
                        setLastName(e.target.value);
                    }}/>
                    <InputField heading="Email" placeholder={"Email"} type={"email"} onChange={e=>{
                        setEmail(e.target.value);
                    }}/>
                    <InputField heading="Password" placeholder={"Password"} type={"password"} onChange={e=>{
                        setPassword(e.target.value);
                    }}/>
                    </div>

                    <div className="flex justify-center items-center pt-4">
                        <Button text={"Sign Up"}/>
                    </div>
                    <div className="flex justify-center items-center ">
                        <Bottom text={"Already have an account?"} link={"Sign In"} url={"/signin"}/>
                    </div>
 
            </div>
        </div>
        </>
    )
}