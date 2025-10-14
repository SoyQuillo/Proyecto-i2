import "./App.css";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Citas from "./pages/Citas";
import Pacientes from "./pages/Pacientes";
import Inventario from "./pages/Inventario";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      
      <Routes>
        <Route path="/pacientes" element={<Pacientes />} />
        <Route path="/*" element={
          <div className="flex flex-1">
            <div className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] border-r bg-white shadow-sm">
              <Sidebar />
            </div>

            <main className="flex-1 ml-64 mt-16 px-8 py-6 space-y-6">
              <Routes>
                <Route path="/dashboard" element={<Home />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/inventario" element={<Inventario />} />
                <Route path="/" element={<Home />} />
              </Routes>
            </main>
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;