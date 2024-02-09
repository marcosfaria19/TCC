// Routes.jsx

import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AnimalList from "./pages/AnimalList";
import AnimalDetails from "./pages/AnimalDetails";
import UserProfile from "./pages/UserProfile";
import Entrar from "./pages/Entrar";
import Registrar from "./pages/Registrar";
import AdminDashboard from "./pages/AdminDashboard";
import AdoptionForm from "./pages/AdoptionForm";

import { Protected } from "./components/auth/Protected";

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registro" element={<Registrar />} />
      <Route path="/login" element={<Entrar />} />
      <Route path="/animais" element={<AnimalList />} />
      <Route path="/animais/:animalId" element={<AnimalDetails />} />
      <Route path="/adotar/:animalId" element={<AdoptionForm />} />
      <Route
        path="/perfil/"
        element={<Protected>{() => <UserProfile />}</Protected>}
      />

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
