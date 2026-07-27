import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Feature from "./page/Feature";
import Blog from "./page/Blog";
import Register from "./page/Register";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

function App() {
  const location = useLocation();

  // Auth-style pages don't need the marketing FAQ/CTA blocks underneath them
  const hideMarketingSections = ["/register"].includes(location.pathname);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Feature />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {!hideMarketingSections && (
        <>
          <FAQ />
          <CTA />
        </>
      )}

      <Footer />
    </>
  );
}

export default App;