import heroBlob from "../assets/video/hero-blob.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center  overflow-hidden bg-[#05060B]"
    >
      {/* Video Blob - shifted right/up and enlarged to match reference */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-[1000px] md:w-[1300px] lg:w-[5000px] object-contain pointer-events-none select-none"
      >
        <source src={heroBlob} type="video/mp4" />
      </video>

      {/* Dark Overlay so text stays readable over the glow */}
      

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-[980px] mx-auto text-center px-6">
        <h1 className="mx-auto max-w-[850px] text-[44px] leading-[1.1] font-light text-white md:text-[64px] lg:text-[58px]">
          Building The Future Of
          <br />
          <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
            Decentralized
          </span>{" "}
          Digital Trust.
        </h1>

        <p className="mx-auto mt-8 max-w-[900px] text-base leading-8 text-gray-300 md:text-lg">
          Quantara Technology is a blockchain-powered ecosystem connecting
          individuals, communities, and businesses through transparent smart
          contracts. Our platform creates a secure, scalable, and
          community-driven environment where participation generates long-term
          value.
        </p>

        <button className="mt-10 rounded-lg bg-[#6B46F6] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#7B5CFF]">
          Explore Quantara
        </button>
      </div>
    </section>
  );
};

export default Hero;