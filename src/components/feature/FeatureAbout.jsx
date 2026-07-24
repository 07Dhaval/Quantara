const FeatureAbout = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 pt-20 sm:pt-24 lg:pt-28 pb-16 sm:pb-20">
      <div className="mt-10 max-w-[900px] mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.2] font-semibold text-white tracking-tight">
          Infinite Growth For The
          <br />
          <span className="bg-gradient-to-r from-[#7B61FF] via-[#FF8A5B] to-white bg-clip-text text-transparent">
            Global
          </span>{" "}
          Ecosystem
        </h1>

        <p className="mt-5 text-sm sm:text-base text-white/60 max-w-[620px] mx-auto leading-relaxed">
          Experience a decentralized blockchain ecosystem designed to connect
          communities, automate trust through smart contracts, and enable
          sustainable digital growth worldwide.
        </p>
      </div>
    </section>
  );
};

export default FeatureAbout;