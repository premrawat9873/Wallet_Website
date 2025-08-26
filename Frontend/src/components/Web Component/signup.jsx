import InputField from "../input";
import { useRecoilState, useRecoilValue } from "recoil";
import Button from "../button";
import Heading from "../heading";
import Subheading from "../subheading";
import Bottom from "../bottom";
import { emailState, passwordState, firstNameState, lastNameState } from "../atoms/signupAtoms";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup({ Url }) {
  const email = useRecoilValue(emailState);
  const password = useRecoilValue(passwordState);
  const firstName = useRecoilValue(firstNameState);
  const lastName = useRecoilValue(lastNameState);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await axios.post("http://localhost:3000/api/v1/users/signup", {
        username: email,
        password,
        firstName,
        lastName
      });

      // ✅ Save token in localStorage
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }

      console.log("Signup success:", res.data);

      // ✅ Redirect to dashboard after signup
      navigate("/dashboard");

    } catch (err) {
      console.error("Signup failed:", err);
      alert("Signup failed, please try again");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-[url('/src/assets/download.jpg')] bg-cover">
      <div className="flex flex-col rounded-xl h-142 w-100 bg-zinc-800/80 backdrop-blur-md ">
        <div className="flex justify-center">
          <Heading text={"Sign Up"} />
        </div>

        <div className="flex justify-center items-center pl-2 pr-2">
          <Subheading text={"Enter your information to create an account"} />
        </div>

        <div className="pl-4 pr-4 space-y-3">
          <Inputs />
        </div>

        <div className="flex justify-center items-center pt-4">
          <Button text={"Sign Up"} onClick={handleSignup} />
        </div>

        <div className="flex justify-center items-center ">
          <Bottom text={"Already have an account?"} link={"Sign In"} url={"/signin"} />
        </div>
      </div>
    </div>
  );
}

function Inputs() {
  const [firstName, setFirstName] = useRecoilState(firstNameState);
  const [lastName, setLastName] = useRecoilState(lastNameState);
  const [email, setEmail] = useRecoilState(emailState);
  const [password, setPassword] = useRecoilState(passwordState);

  return (
    <>
      <InputField
        heading="First Name"
        placeholder="First Name"
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <InputField
        heading="Last Name"
        placeholder="Last Name"
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <InputField
        heading="Email"
        placeholder="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        heading="Password"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}
