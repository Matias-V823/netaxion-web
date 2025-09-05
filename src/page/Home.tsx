import AboutInfo from "../components/AboutInfo";
import Hero from "../components/Hero";
import CarrouselCustomers from "../components/CarrouselCustomers";
import Navbar from "../components/Navbar";
import Presentation from "../components/Presentation";
import Footer from "../components/Footer";
import ContactHome from "../components/ContactHome";


const Home = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <AboutInfo />
        <Presentation />
        <CarrouselCustomers />
        <ContactHome />
      </main>
      <Footer />
    </div>

  );
};

export default Home;