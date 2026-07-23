import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Feature from "./page/Feature";
import Blog from "./page/Blog";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
