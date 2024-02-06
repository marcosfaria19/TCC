import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AnimalList from "./pages/AnimalList";
import AnimalDetails from "./pages/AnimalDetails";
import AdoptionRequest from "./pages/AdoptionRequest";
import UserProfile from "./pages/UserProfile";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar";
import AdminDashboard from "./pages/AdminDashboard";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registrar />} />
      <Route path="/login" element={<Entrar />} />
      <Route path="/animais" element={<AnimalList />} />
      <Route path="/animais/:animalId" element={<AnimalDetails />} />
      <Route path="/adotar/:animalId" element={<AdoptionRequest />} />
      <Route path="/perfil/" element={<UserProfile />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route
        path="/*"
        element={
          <>
            <Navigate to="/" replace />
          </>
        }
      />
    </Routes>
  );
};

export default Rotas;
