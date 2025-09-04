import AboutInfo from "../components/AboutInfo";
import Hero from "../components/Hero";
import CarrouselCustomers from "../components/CarrouselCustomers";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";


const Home = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutInfo/>
      <Presentation/>
      <div className="min-h-screen">

      </div>
      {/* <CarrouselCustomers/> */}
    </div>
  );
};

export default Home;