import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Home from "./pages/Home"

function App() {
  return (
    <div className=" bg-primary min-h-screen w-screen font-sometypeMono flex flex-col items-center gap-y-10 text-navtext">
      <Header />
      <Home />
      {/* <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes> */}
    </div>
  )
}

export default App