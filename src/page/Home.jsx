import Hero from "../components/Hero";
import CoreProtocol from "../components/CoreProtocol";
import Ecosystem from "../components/Ecosystem";
import Security from "../components/Security";
import Community from "../components/Community";
import Stats from "../components/Stats";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import HowItWorks from "../components/about/Howitworks";

const Home = () => {
  return (
    <>
      <Hero />
      <CoreProtocol />
      <HowItWorks />
      <Ecosystem />
      <Security />
      <Community />
      <Stats />
    </>
  );
};

export default Home;