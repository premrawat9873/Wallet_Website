import Dashboard from "./components/Web Component/dashboard"
import Signin from "./components/Web Component/signin"
import Signup from "./components/Web Component/signup"
import Payment from "./components/Web Component/payment"
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom"



function App() {
  // hello

  return (
    <>
     <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
