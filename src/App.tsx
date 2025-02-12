import React from "react";
import HeaderComponent from "./components/Header/Header.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Kafedry from "./pages/Kafedry/Kafedry.tsx";
import Facultets from "./pages/Facultets/Facultets.tsx";
import FacultyDetail from "./pages/Facultets/FacultyDetail/FacultyDetail.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          <Route path="/kafedry" element={<Kafedry />}></Route>
          <Route index path="/facultets" element={<Facultets />}></Route>
          <Route path="/facultets/fac-detail/:id" element={<FacultyDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
