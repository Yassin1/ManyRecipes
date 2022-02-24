import React from "react";
import AddRecipie from "./Components/AddRecipie"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recipies from "./Components/Recipies";
import "antd/dist/antd.css"
import "./App.css"
import TopBar from "./Components/TopBar";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import SingleRecipie from "./Components/SignleRecipie";

function App() {
  return (
    <>
    <div
      style={{
        padding: 20,
        boxSizing: "border-box",
      }}
    >
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Recipies />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-recipie" element={<AddRecipie />} />
        <Route path="/recipie/:id" element={<SingleRecipie />} />
      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
