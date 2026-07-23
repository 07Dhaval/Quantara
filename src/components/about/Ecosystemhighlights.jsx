const highlights = [
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Smart Contract Automation",
    description:
      "Experience secure, transparent, and automated transactions powered by blockchain smart contracts.",
  },
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Decentralized Infrastructure",
    description:
      "Built on a secure blockchain foundation that ensures transparency, reliability, and scalability.",
  },
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Interdependent Rewards",
    description:
      "Earn ecosystem rewards through participation, collaboration, and long-term engagement.",
  },
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Community-Driven Growth",
    description:
      "Every contribution strengthens the ecosystem and creates value for all participants.",
  },
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Cryptographic Protection",
    description:
      "Advanced encryption and decentralized architecture safeguard every transaction and digital asset.",
  },
  {
    date: "April 27, 2026",
    category: "Technology",
    title: "Sustainable Digital Ecosystem",
    description:
      "Continuously evolving through innovation, transparent governance, and community collaboration.",
  },
];

const HighlightItem = ({ date, category, title, description }) => (
  <div className="py-8 sm:py-10 border-b border-white/10">
    <div className="flex items-center gap-3 text-white/40 text-xs sm:text-[13px]">
      <span>{date}</span>
      <span className="w-px h-3.5 bg-white/20" />
      <span>{category}</span>
    </div>
    <h3 className="mt-3 text-white text-xl sm:text-2xl font-semibold">
      {title}
    </h3>
    <p className="mt-3 text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-[480px]">
      {description}
    </p>
  </div>
);

const EcosystemHighlights = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-28">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight">
            <span className="bg-gradient-to-r from-[#5B8DFF] via-[#B15BFF] via-40% to-[#FFA85B] bg-clip-text text-transparent">
              Quantara
            </span>{" "}
            Ecosystem Highlights
          </h2>
          <p className="mt-5 text-white/50 text-sm sm:text-base leading-relaxed">
            Stay informed with the latest blockchain innovations, ecosystem
            developments, smart contract technology, and community updates
            from Quantara.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-x-16">
          {highlights.map((item, i) => (
            <HighlightItem key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcosystemHighlights;