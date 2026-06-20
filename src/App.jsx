import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureSection/>
      <Services />
      <Testimonials/>
      <Footer/>
    </>
  );
}

export default App;

