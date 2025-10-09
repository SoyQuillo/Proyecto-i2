import "./App.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import WelcomeBanner from "./components/WelcomeBanner";
import HealthAlerts from "./components/HealthAlerts";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <div className="w-64 fixed top-16 left-0 h-[calc(100vh-4rem)] border-r bg-white shadow-sm">
          <Sidebar />
        </div>

        <main className="flex-1 ml-64 mt-16 px-8 py-6 space-y-6">
          <WelcomeBanner
            userName="María González Fernández"
            userId="MED-2024-004"
            lastVisit="25/09/2024"
          />

          <HealthAlerts />

          <Cards />
        </main>
      </div>
    </div>
  );
}

export default App;
