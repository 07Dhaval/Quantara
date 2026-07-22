import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="w-full bg-[#05060B] px-5 pt-16 sm:pt-20 pb-8">
      <div className="mx-auto max-w-[980px]">

        {/* Logo + tagline */}
        <div className="flex flex-col items-center text-center">
          <img
            src={logo}
            alt="Quantara"
            className="h-24 sm:h-50 w-auto object-contain"
          />
          <p className="mt-5 max-w-[560px] text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 px-2">
            Quantara is an elite blockchain infrastructure engineered for the
            next generation of global finance. By bridging the gap between
            decentralized innovation
          </p>
        </div>

        {/* Gradient divider */}
        <div className="mt-12 sm:mt-16 h-px w-full bg-gradient-to-r from-transparent via-[#7B61FF] to-transparent" />

        {/* Bottom row */}
        <div className="mt-6 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-sm text-gray-400">
            © 2026 Quantara. All rights reserved.
          </p>

          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="#privacy"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="text-sm text-gray-400 transition-colors duration-300 hover:text-white"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;