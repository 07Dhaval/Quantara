import quantaraIcon from "../../assets/images/logo2.png";

const features = [
  {
    title: "Blockchain Infrastructure",
    description:
      "A decentralized foundation built for trust and transparency.",
  },
  {
    title: "Smart Contract Execution",
    description: "Automated processes that ensure accuracy and fairness.",
  },
  {
    title: "Community-Driven Innovation",
    description:
      "Every contribution strengthens the ecosystem and supports sustainable growth.",
  },
];

const TrustedEcosystem = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[980px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white leading-tight">
            Building A Trusted{" "}
            <span className="bg-gradient-to-r from-[#5B8DFF] to-[#B15BFF] bg-clip-text text-transparent">
              Digital
            </span>{" "}
            <span className="bg-gradient-to-r from-[#B15BFF] to-[#FFA85B] bg-clip-text text-transparent">
              Ecosystem
            </span>
          </h2>
          <p className="mt-3 text-white/50 text-xs sm:text-sm leading-relaxed">
            Quantara integrates blockchain technology, autonomous smart
            contracts, and decentralized architecture to create a secure,
            transparent, and scalable platform for digital collaboration.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 sm:mt-16 flex flex-col lg:flex-row items-center lg:items-center gap-10 lg:gap-16">
          {/* Icon */}
          <div className="ml-30 shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src={quantaraIcon}
              alt="Quantara"
              className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain"
            />
          </div>

          {/* Feature list */}
          <div className="w-full flex flex-col gap-8 sm:gap-10">
            {features.map((item) => (
              <div key={item.title}>
                <h3 className="text-white text-lg sm:text-xl font-medium">
                  {item.title}
                </h3>
                <p className="mt-2 text-white/50 text-sm leading-relaxed max-w-[440px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedEcosystem;