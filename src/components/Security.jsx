import CircuitAnimatedBg from "./CircuitAnimatedBg";

const Security = () => {
  return (
    <section
      id="security"
      className="w-full bg-[#05060B] px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A0B12]">

          {/* Right-side animated svg (desktop) */}
          <div
            className="pointer-events-none absolute inset-y-0 right-0 hidden w-[55%] overflow-hidden pr-8 sm:block lg:pr-12"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 25%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 25%)",
            }}
          >
            <CircuitAnimatedBg className="h-full w-full object-contain object-right" />
          </div>

          {/* Same animated svg, mobile version (top strip) */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[140px] overflow-hidden sm:hidden"
            style={{
              maskImage: "linear-gradient(to bottom, black 60%, transparent)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 60%, transparent)",
            }}
          >
            <CircuitAnimatedBg className="h-full w-full object-contain object-top" />
          </div>

          {/* Content */}
          <div className="glow-border-card relative rounded-2xl border border-[#3a4a8f]/70 bg-white/[0.02] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[#3a4a8f] relative flex flex-col sm:min-h-[380px] sm:flex-row">
            <div className="relative z-10 flex flex-col justify-center px-6 py-10 pt-[150px] sm:w-[55%] sm:px-10 sm:py-12 sm:pt-12 lg:px-14">
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.15] font-light text-white">
                Our{" "}
                <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
                  Security
                </span>{" "}
                Guarantee
              </h2>

              <p className="mt-4 max-w-[420px] text-sm sm:text-base leading-6 text-gray-400">
                We will never ask for your private keys, seed phrase, or
                passwords. Quantara employees have zero access to your funds
                or personal data.
              </p>

              <button className="mt-8 w-fit rounded-lg bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] px-8 py-3.5 text-sm sm:text-[15px] font-medium text-white transition-transform duration-300 hover:scale-105">
                Learn More
              </button>
            </div>

            <div className="hidden sm:block sm:w-[45%]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;