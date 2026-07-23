const ArchitecturalTrust = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-28">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[820px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-[#5B8DFF] via-[#B15BFF] via-40% to-[#FFA85B] bg-clip-text text-transparent">
              Architectural
            </span>{" "}
            Trust
          </h2>
          <p className="mt-5 text-white/50 text-sm sm:text-base leading-relaxed">
            Quantara is built on a secure blockchain infrastructure that
            combines transparency, smart contracts, and community
            participation to create a scalable and sustainable digital
            ecosystem.
          </p>
        </div>

        {/* Bento grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left card - Transparent Infrastructure */}
          <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 flex flex-col justify-between min-h-[280px] lg:min-h-[460px]">
            <div>
              <h3 className="text-white text-2xl sm:text-[26px] font-semibold">
                Transparent Infrastructure
              </h3>
              <p className="mt-3 text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-[320px]">
                Blockchain-powered architecture ensuring secure, verifiable,
                and autonomous smart contract execution.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <span className="text-white text-4xl sm:text-5xl font-semibold">
                100
                <span className="bg-gradient-to-r from-[#FF8A6B] to-[#7B9BFF] bg-clip-text text-transparent">
                  %
                </span>
              </span>
            </div>
          </div>

          {/* Middle column - two stacked cards */}
          <div className="flex flex-col gap-5">
            {/* $50+ card with gradient border */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#5B8DFF] via-[#B15BFF] to-[#FFA85B] flex-1">
              <div className="h-full rounded-2xl bg-[#070B14] p-7 sm:p-8">
                <span className="text-white text-3xl sm:text-4xl font-semibold">
                  $50+
                </span>
                <p className="mt-3 text-white/50 text-sm sm:text-[15px]">
                  Starting Activation Package
                </p>
              </div>
            </div>

            {/* 24/7 card with gradient border */}
            <div className="rounded-2xl p-[1px] bg-gradient-to-br from-[#5B8DFF] via-[#B15BFF] to-[#FFA85B] flex-1">
              <div className="h-full rounded-2xl bg-[#070B14] p-7 sm:p-8">
                <span className="text-white text-3xl sm:text-4xl font-semibold">
                  24/7 Hours
                </span>
                <p className="mt-3 text-white/50 text-sm sm:text-[15px]">
                  Smart Contract Operations
                </p>
              </div>
            </div>
          </div>

          {/* Right card - Decentralized */}
          <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#111A33] to-[#070B14] p-8 min-h-[280px] lg:min-h-[460px] overflow-hidden flex flex-col">
            <div className="relative z-10">
              <h3 className="text-white text-2xl sm:text-[26px] font-semibold">
                Decentralized
              </h3>
              <p className="mt-3 text-white/50 text-sm sm:text-[15px]">
                Community Governance
              </p>
            </div>

            {/* Glow */}
            <div className="pointer-events-none absolute right-0 bottom-0 w-52 h-52 rounded-full bg-[#5B3FE0]/30 blur-[70px]" />

            {/* Decorative shape */}
            <svg
              viewBox="0 0 200 200"
              className="pointer-events-none absolute right-4 bottom-4 w-28 sm:w-36 h-auto z-10 drop-shadow-[0_10px_30px_rgba(91,63,224,0.5)]"
            >
              <path
                d="M60 10 L150 10 L120 90 L60 90 Z"
                fill="#6B4CFF"
              />
              <path
                d="M45 95 L135 95 L100 185 L55 150 Z"
                fill="#4B32C7"
              />
              <path
                d="M60 90 L120 90 L135 95 L45 95 Z"
                fill="#0A0F1C"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalTrust;