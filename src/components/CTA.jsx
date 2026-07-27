import ctaVideo from "../assets/video/cta.mp4";

const CTA = () => {
  return (
    <section
      id="cta"
      className="mt-[-100px] w-full bg-[#000000] px-5 py-20 sm:py-24 lg:py-28"
    >
      <div className="glow-border-card relative mx-auto max-w-[980px] h-[450px] text-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20">
        {/* Animated moving glow border */}
        <div className="cta-glow-ring pointer-events-none absolute inset-0 rounded-2xl" />

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

          {/* <button className="mt-8 sm:mt-10 rounded-lg bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] px-8 py-3.5 text-sm sm:text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(123,97,255,0.5)]">
            Get Started Now
          </button> */}
        </div>
      </div>

      <style>{`
        @property --cta-angle {
          syntax: '<angle>';
          inherits: false;
          initial-value: 0deg;
        }

        .cta-glow-ring {
          z-index: 5;
          padding: 2px;
          background: conic-gradient(
            from var(--cta-angle),
            #7D5CFF,
            #6F7BFF,
            #BBA6FF,
            #4FA6E8,
            #7D5CFF
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: cta-rotate-border 4s linear infinite;
          filter: drop-shadow(0 0 10px rgba(123, 97, 255, 0.6));
        }

        @keyframes cta-rotate-border {
          to {
            --cta-angle: 360deg;
          }
        }
      `}</style>
    </section>
  );
};

export default CTA;