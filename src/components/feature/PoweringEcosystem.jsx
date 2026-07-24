import smartContractIcon from "../../assets/images/f1.png";
import blockchainSecurityIcon from "../../assets/images/f2.png";
import transparentRewardsIcon from "../../assets/images/f3.png";
import communityGrowthIcon from "../../assets/images/f4.png";
import scalableInfraIcon from "../../assets/images/f5.png";

const bigCards = [
  {
    icon: smartContractIcon,
    glow: "bg-[#5B3FE0]/30",
    title: "Smart Contract Automation",
    description:
      "Execute transactions automatically with transparent, secure, and tamper-proof smart contracts.",
  },
  {
    icon: blockchainSecurityIcon,
    glow: "bg-[#2A5CFF]/25",
    title: "Blockchain Security",
    description:
      "Enterprise-grade cryptographic protection ensures secure and reliable ecosystem operations.",
  },
];

// iconPosition: "top" | "bottom" — where the icon sits in the card
// iconAlign: "left" | "right" — horizontal alignment of the icon
const smallCards = [
  {
    icon: transparentRewardsIcon,
    title: "Transparent Rewards",
    description:
      "Automated reward distribution through blockchain-powered smart contracts.",
    iconPosition: "top",
    iconAlign: "left",
    border: "from-[#5B8DFF] to-[#7B61FF]",
  },
  {
    icon: communityGrowthIcon,
    title: "Community Growth",
    description:
      "A collaborative ecosystem where participation strengthens the network and creates lasting value.",
    iconPosition: "bottom",
    iconAlign: "right",
    border: "from-[#FF7A45] to-[#FF7A45]",
  },
  {
    icon: scalableInfraIcon,
    title: "Scalable Infrastructure",
    description:
      "Built to support continuous ecosystem expansion while maintaining performance and reliability.",
    iconPosition: "top",
    iconAlign: "right",
    border: "from-[#FF7A45] via-[#B15BFF] to-[#7B61FF]",
  },
];

const BigCard = ({ icon, glow, title, description }) => (
  <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-10 min-h-[420px] sm:min-h-[480px] overflow-hidden flex flex-col">
    <div
      className={`pointer-events-none absolute left-[15%] top-[30%] w-52 h-52 rounded-full blur-[80px] ${glow}`}
    />
    <div className="relative z-10 flex-1 flex items-center justify-center">
      <img
        src={icon}
        alt={title}
        className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 object-contain"
      />
    </div>
    <div className="relative z-10">
      <h3 className="text-white text-xl sm:text-2xl font-semibold">
        {title}
      </h3>
      <p className="mt-3 text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-[420px]">
        {description}
      </p>
    </div>
  </div>
);

const SmallCard = ({
  icon,
  title,
  description,
  iconPosition,
  iconAlign,
  border,
}) => {
  const alignClass = iconAlign === "right" ? "justify-end" : "justify-start";

  const IconBlock = (
    <div className={`flex ${alignClass}`}>
      <img
        src={icon}
        alt={title}
        className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
      />
    </div>
  );

  const TextBlock = (
    <div>
      <h3 className="text-white text-base sm:text-lg font-semibold">
        {title}
      </h3>
      <p className="mt-2 text-white/50 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );

  return (
    <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${border}`}>
      <div className="h-full rounded-2xl bg-[#070B14] p-6 flex flex-col justify-between min-h-[300px] sm:min-h-[320px]">
        {iconPosition === "top" ? (
          <>
            {IconBlock}
            <div className="mt-6">{TextBlock}</div>
          </>
        ) : (
          <>
            {TextBlock}
            <div className="mt-6">{IconBlock}</div>
          </>
        )}
      </div>
    </div>
  );
};

const PoweringEcosystem = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[980px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[760px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white leading-tight">
            Powering The{" "}
            <span className="bg-gradient-to-r from-[#5B8DFF] via-[#B15BFF] via-40% to-[#FFA85B] bg-clip-text text-transparent">
              Quantara
            </span>{" "}
            Ecosystem
          </h2>
          <p className="mt-5 text-white/50 text-sm sm:text-base leading-relaxed">
            Built on blockchain technology, smart contracts, and community
            participation to deliver transparency, security, and scalable
            digital innovation.
          </p>
        </div>

        {/* Big cards */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {bigCards.map((card) => (
            <BigCard key={card.title} {...card} />
          ))}
        </div>

        {/* Small cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
          {smallCards.map((card) => (
            <SmallCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PoweringEcosystem;