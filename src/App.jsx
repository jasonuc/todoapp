import { Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Home from "./pages/Home"
import SignOutAndUsername from "./components/SignOutAndUsername"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className=" bg-primary min-h-screen w-screen font-sometypeMono flex flex-col items-center gap-y-2 text-navtext pb-5">
      <Header />

      <Routes>
        <Route path="/home" element={<SignOutAndUsername />} />
      </Routes>

      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App