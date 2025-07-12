import {Route, Routes} from "react-router-dom";
import React from "react";
import EmptyPage from "../pages/EmptyPage";
import EditorPage from "../pages/EditorPage";

const HomeRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<EmptyPage />} />
      <Route path="articles" element={<EditorPage />} />
      <Route path="about" element={<EmptyPage />} />
    </Routes>
  )
}

export default HomeRoutes;