import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import CoreProtocol from "./components/CoreProtocol";
import Ecosystem from "./components/Ecosystem";
import Security from "./components/Security";
import Community from "./components/Community";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CoreProtocol />
      <Ecosystem />
      <Security />
      <Community />
      <Stats />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;