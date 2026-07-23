import { useRef, useState } from "react";
import heroVideo from "../../assets/video/about.mp4";

const Hero = () => {
  const videoRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#050B14]"
    >
      {/* Video background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark overlay so text stays readable over the video */}
      <div className="absolute inset-0 bg-[#050B14]/70" />

      {/* Radial glow accent, matches navbar's purple/blue accents */}
      <div className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#2A5CFF]/25 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#5B3FE0]/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 max-w-[900px] mx-auto px-5 lg:px-8 pt-[110px] text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-[56px] leading-[1.15] font-semibold text-white tracking-tight">
          Empowering The Future
          <br />
          Through{" "}
          <span className="bg-gradient-to-r from-[#7B61FF] to-[#5B3FE0] bg-clip-text text-transparent">
            Blockchain
          </span>{" "}
          Innovation
        </h1>

        <p className="mt-6 text-[15px] sm:text-base text-white/60 max-w-[720px] mx-auto leading-relaxed">
          Quantara Technology is a decentralized digital ecosystem that connects
          individuals, communities, and businesses through transparent smart
          contracts. We are building a secure, scalable, and community-driven
          platform where every contribution creates sustainable value.
        </p>
      </div>
    </section>
  );
};

export default Hero;