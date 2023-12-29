import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import CreateAnimal from "./pages/CreateAnimal";
import AnimalList from "./pages/AnimalList";
import AnimalDetails from "./pages/AnimalDetails";
import AdoptionRequest from "./pages/AdoptionRequest";
import UserProfile from "./pages/UserProfile";

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/registro"
        element={<SignUp />}
      />
      <Route
        path="/login"
        element={<Login />}
      />
      <Route
        path="/criar-animal"
        element={<CreateAnimal />}
      />
      <Route
        path="/animais"
        element={<AnimalList />}
      />
      <Route
        path="/animais/:animalId"
        element={<AnimalDetails />}
      />
      <Route
        path="/adotar/:animalId"
        element={<AdoptionRequest />}
      />
      <Route
        path="/perfil/"
        element={<UserProfile />}
      />
    </Routes>
  );
};

export default Rotas;
