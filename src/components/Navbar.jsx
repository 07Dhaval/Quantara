import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // "to" ab actual page routes hain, "#" anchors nahi
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Features", to: "/features" },
    { name: "Blog", to: "/blog" },
  ];

  return (
    <header
      className={`absolute top-0 left-0 w-full z-20 transition-all duration-500 ${
        scrolled
          ? "bg-[#071221]/20 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar - only visible once the user starts scrolling */}
      <div
        className={`absolute top-0 left-0 h-[3px] w-full bg-[#5B3FE0]/20 transition-opacity duration-300 ${
          scrollProgress > 0 ? "opacity-100" : "opacity-0"
        }`}
      >
        <div
          className="h-full bg-[#5B3FE0] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-[980px] mx-auto px-5 lg:px-8">
        <div className="h-[110px] flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Quantara"
              className="h-10 sm:h-11 md:h-28 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `relative text-[16px] font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-[#7B61FF] after:transition-all after:duration-300 ${
                    isActive
                      ? "text-white after:w-full"
                      : "text-white/90 hover:text-white after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA */}

          <div className="hidden lg:block">
            <button className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-xl px-8 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:border-[#7B61FF] hover:bg-[#7B61FF]/15 hover:shadow-[0_0_30px_rgba(123,97,255,0.35)]">
              Explore Quantara
            </button>
          </div>

          {/* Mobile Toggle */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white"
          >
            {menuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-500 lg:hidden ${
          menuOpen ? "max-h-[400px]" : "max-h-0"
        }`}
      >
        <div className="border-t border-white/10 bg-[#071221]/95 backdrop-blur-xl px-6 py-6">

          <div className="flex flex-col gap-5">

            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setMenuOpen(false)}
                className="text-white text-lg"
              >
                {item.name}
              </NavLink>
            ))}

            <button className="mt-4 rounded-xl border border-white/15 bg-white/5 py-3 text-white backdrop-blur-xl">
              Explore Quantara
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};

export default Navbar;