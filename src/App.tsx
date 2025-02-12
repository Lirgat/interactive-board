import React from "react";
import HeaderComponent from "./components/Header/Header.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Kafedry from "./pages/Kafedry/Kafedry.tsx";
import Facultets from "./pages/Facultets/Facultets.tsx";
import FacultyDetail from "./pages/Facultets/FacultyDetail/FacultyDetail.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/interactive-board" element={<Navigate to={"/facultets"}/>}/>
          <Route path="/facultets" element={<Facultets />}/>
          <Route path="/kafedry" element={<Kafedry />}/>
          <Route path="/facultets/fac-detail/:id" element={<FacultyDetail />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
