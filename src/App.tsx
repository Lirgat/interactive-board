import React from "react";
import HeaderComponent from "./components/Header/Header.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Kafedry from "./pages/Kafedry/Kafedry.tsx";
import Facultets from "./pages/Facultets/Facultets.tsx";
import FacultyDetail from "./pages/Facultets/FacultyDetail/FacultyDetail.tsx";
// import NotFound from "./pages/404/NotFound.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          <Route path="/interactive-board" element={<Navigate to={"/interactive-board/facultets"}/>}/>
          <Route path="/interactive-board/facultets" element={<Facultets />}/>
          <Route path="/interactive-board/kafedry" element={<Kafedry />}/>
          <Route path="/interactive-board/facultets/fac-detail/:id" element={<FacultyDetail />}/>
          <Route path="*" element={<Navigate to={"/interactive-board/facultets"}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
