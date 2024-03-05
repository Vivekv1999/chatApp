import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy } from "react";
const Home=lazy(()=>import("./pages/Home"))
const Login=lazy(()=>import("./pages/Login"))
const Chat=lazy(()=>import("./pages/Chat"))
const Groups=lazy(()=>import("./pages/Groups"))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/" element={<Home/>} />
          <Route path="/chat" element={<Chat/>} />
          <Route path="/groups" element={<Groups/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
