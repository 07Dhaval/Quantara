import ctaVideo from "../assets/video/cta.mp4";
const CTA = () => {
  return (
    <section
      id="cta"
      className="w-full bg-[#05060B] px-5 py-20 sm:py-24 lg:py-28"
    >
      <div className="glow-border-card relative mx-auto max-w-[980px] h-[450px] text-center overflow-hidden rounded-2xl border border-[#3a4a8f]/70">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={ctaVideo} type="video/mp4" />
        </video>

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12">
          <h2 className="mt-20 text-[32px] sm:text-[44px] lg:text-[52px] leading-[1.2] font-light text-white">
            Start Managing Crypto
            <br />
            With{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Quantara
            </span>{" "}
            Today
          </h2>

          <button className="mt-8 sm:mt-10 rounded-lg bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] px-8 py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(123,97,255,0.5)]">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
