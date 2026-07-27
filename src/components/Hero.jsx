import heroBlob from "../assets/video/hero-blob.mp4";

const Hero = () => {
  return (
    <section
      id="home"
      className="mb-[-150px] relative min-h-screen flex items-center justify-center  overflow-hidden bg-[#000000  ]"
    >
      {/* Video Blob - enlarged specifically on mobile, unchanged on tablet/desktop */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-[clamp(1700px,600vw,2400px)] md:w-[clamp(1800px,220vw,2800px)] lg:w-[clamp(3200px,300vw,5200px)] object-contain pointer-events-none select-none"
      >
        <source src={heroBlob} type="video/mp4" />
      </video>

      {/* Dark Overlay so text stays readable over the glow */}
      

      {/* Hero Content */}
      <div className="relative w-full max-w-[980px] mx-auto text-center px-6">
        <h1 className="mx-auto max-w-[850px] text-[38px] leading-[1.1] font-light text-white md:text-[64px] lg:text-[58px]">
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

        {/* <button className="mt-10 rounded-lg bg-[#6B46F6] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:bg-[#7B5CFF]">
          Explore Quantara
        </button> */}
      </div>
    </section>
  );
};

export default Hero;