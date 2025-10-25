import "./App.css";
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import EmployeeLayout from "./shared/layouts/EmployeeLayout";
import ClientLayout from "./shared/layouts/ClientLayout";
import { usuarios } from "./features/auth/data/usuarios";

function App() {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("authUser");
      if (raw) setAuthUser(JSON.parse(raw));
    } catch (e) {
      console.error("Error loading user:", e);
    }
  }, []);

  const handleLogin = ({ documento, usuario, contrasena, tipoUsuario }) => {
    const matched = usuarios.find(
      (u) =>
        ((usuario && u.usuario === usuario) || (documento && u.documento === documento)) &&
        u.rol === tipoUsuario
    );
    if (!matched) {
      alert(`No se encontró un ${tipoUsuario} con esas credenciales`);
      return;
    }
    if (matched.contrasena !== contrasena) {
      alert("Contraseña incorrecta");
      return;
    }
    setAuthUser(matched);
    localStorage.setItem("authUser", JSON.stringify(matched));
  };

  if (!authUser) {
    return (
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Login onSubmit={handleLogin} />} />
      </Routes>
    );
  }

  if (authUser.rol === "cliente") {
    return <ClientLayout user={authUser} />;
  }

  return <EmployeeLayout />;
}

export default App;