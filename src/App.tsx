import React from "react";
import HeaderComponent from "./components/Header/Header.tsx";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Kafedry from "./pages/Kafedry/Kafedry.tsx";
// import Facultets from "./pages/Facultets/Facultets.tsx";
import FacultyDetail from "./pages/Facultets/FacultyDetail/FacultyDetail.tsx";
import KafedryDetail from "./pages/Kafedry/KafedryDetail/KafedryDetail.tsx";
import Academy from "./pages/Academy/Academy.tsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.tsx";
import VFacs from "./pages/VFacs/VFacs.tsx";
// import NotFound from "./pages/404/NotFound.tsx";
import GeorgLent from "./components/GeorgLent/GeorgLents.tsx";

function App() {
  return (
    <>
      <BrowserRouter basename="/interactive-board">
        <GeorgLent />
        <ScrollToTop /> {/* Компонент, который ничего не рендерит просто отрабатывает условия поднятие стр вверх*/}
        <HeaderComponent/>
        <Routes>
          <Route path="/interactive-board/facultets" element={<VFacs />}/>
          <Route path="/interactive-board" element={<Navigate to={"/interactive-board/facultets"}/>}/>
          {/* <Route path="/interactive-board/facultets" element={<Facultets />}/> */}
          <Route path="/interactive-board/about" element={<Academy />} />
          <Route path="/interactive-board/kafedry" element={<Kafedry />}/>
          <Route path="/interactive-board/facultets/fac-detail/:id" element={<FacultyDetail />}/>
          <Route path="/interactive-board/kafedry/kafedra-detail/:id" element={<KafedryDetail />}/>
          {/* Вместо ошибки 404 нас будет перекидывать на главную страницу, т.к с pages что-то не то */}
          <Route path="*" element={<Navigate to={"/interactive-board/facultets"}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
