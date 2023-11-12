import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import SignOutAndUsername from "./components/SignOutAndUsername";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="bg-primary min-h-screen w-screen font-sometypeMono flex flex-col items-center gap-y-2 text-navtext">
      <Header />

      <Routes>
        <Route index element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home" element={<SignOutAndUsername />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
