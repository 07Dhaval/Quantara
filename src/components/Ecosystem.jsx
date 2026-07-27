import logo from "../assets/images/logo2.png";

const items = [
  {
    number: "01",
    title: "Blockchain Infrastructure",
    desc: "Secure and decentralized foundation.",
  },
  {
    number: "02",
    title: "Smart Contracts",
    desc: "Bank-grade security with offline storage and multi-layer encryption protection.",
  },
  {
    number: "03",
    title: "Community Ecosystem",
    desc: "Collaboration that drives sustainable growth.",
  },
  {
    number: "04",
    title: "Reward Economy",
    desc: "Fair, transparent, and scalable rewards.",
  },
];

const FeatureBlock = ({ item, align = "left" }) => (
  <div
    className={`relative flex flex-col items-center text-center ${
      align === "right" ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
    }`}
  >
    <span className="pointer-events-none select-none text-[48px] xs:text-[56px] sm:text-[80px] lg:text-[96px] font-bold leading-none text-white/[0.06]">
      {item.number}
    </span>
    <h3 className="-mt-4 xs:-mt-5 sm:-mt-8 lg:-mt-9 text-lg xs:text-xl sm:text-2xl font-medium text-white">
      {item.title}
    </h3>
    <p className="mt-3 max-w-[340px] text-sm sm:text-base leading-6 text-gray-400">
      {item.desc}
    </p>
  </div>
);

const Ecosystem = () => {
  return (
    <section
      id="ecosystem"
      className="-mt-10 relative w-full bg-[#000000] px-4 xs:px-5 py-16 sm:py-24 lg:py-28 overflow-hidden"
    >
      <div className="-mt-15 mx-auto max-w-[980px]">

        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[24px] xs:text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.15] font-light text-white">
            Powering{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Decentralized
            </span>{" "}
            Ecosystem
          </h2>
          <p className="mt-2 sm:mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 px-1 xs:px-2">
            This high-performance framework ensures that every operation from
            cross-chain settlements to large-scale asset tokenization is
            executed with ironclad security and predictable,.
          </p>
        </div>

        {/* Quadrants + center logo (desktop) */}
        <div className="relative mt-12 sm:mt-20 lg:mt-4">

          {/* Center logo - desktop only, absolutely centered */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
            <img
              src={logo}
              alt="Quantara"
              className="w-[280px] h-[280px] object-contain drop-shadow-[0_0_60px_rgba(123,97,255,0.45)]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 sm:gap-y-14 lg:gap-y-24 gap-x-10">
            <div className="order-1">
              <FeatureBlock item={items[0]} align="left" />
            </div>
            <div className="order-2">
              <FeatureBlock item={items[1]} align="right" />
            </div>
            <div className="order-3">
              <FeatureBlock item={items[2]} align="left" />
            </div>
            <div className="order-4">
              <FeatureBlock item={items[3]} align="right" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;