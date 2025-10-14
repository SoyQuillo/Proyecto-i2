import WelcomeBanner from "../components/WelcomeBanner";
import HealthAlerts from "../components/HealthAlerts";
import Cards from "../components/Cards";

function Home() {
  return (
    <>
      <WelcomeBanner
        userName="María González Fernández"
        userId="MED-2024-004"
        lastVisit="25/09/2024"
      />
      <HealthAlerts />
      <Cards />
    </>
  );
}

export default Home;