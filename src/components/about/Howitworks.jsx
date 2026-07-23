import phase1Img from "../../assets/images/a1.png";
import phase2Img from "../../assets/images/a2.png";
import phase3Img from "../../assets/images/a3.png";
import phase4Img from "../../assets/images/a4.png";
import phase5Img from "../../assets/images/a5.png";
import phase6Img from "../../assets/images/a6.png";

// Right column: text-first phases (odd)
const rightPhases = [
  {
    phase: "Phase 01",
    title: "Join Quantara",
    description: "Start with the $50 Activation Package.",
    image: phase1Img,
  },
  {
    phase: "Phase 03",
    title: "Earn Interdependent Rewards",
    description: "Receive transparent rewards based on ecosystem participation.",
    image: phase3Img,
  },
  {
    phase: "Phase 05",
    title: "Reach Higher Ecology Tier",
    description:
      "Advance through Seed, Sprout, Sapling, Canopy, Forest, Biome, Ecosphere, and Genesis.",
    image: phase5Img,
  },
];

// Left column: image-first phases (even)
const leftPhases = [
  {
    phase: "Phase 02",
    title: "Activate Smart Contract",
    description:
      "Launch activation packages and enable transparent participation through autonomous smart contracts.",
    image: phase2Img,
  },
  {
    phase: "Phase 04",
    title: "Grow Your Network",
    description: "Expand your community and unlock contribution rewards.",
    image: phase4Img,
  },
  {
    phase: "Phase 06",
    title: "Achieve Sustainable Growth",
    description: "Continue earning rewards while strengthening the ecosystem.",
    image: phase6Img,
  },
];

// All phases in true top-to-bottom order, for mobile stacking
const allPhasesInOrder = [
  rightPhases[0],
  leftPhases[0],
  rightPhases[1],
  leftPhases[1],
  rightPhases[2],
  leftPhases[2],
];

const PhaseText = ({ phase, title, description }) => (
  <div>
    <span className="text-white/40 text-xs sm:text-[13px] tracking-wide">
      {phase}
    </span>
    <h3 className="mt-1 text-white text-xl sm:text-2xl font-semibold">
      {title}
    </h3>
    <p className="mt-2 text-white/50 text-sm sm:text-[15px] leading-relaxed max-w-[420px]">
      {description}
    </p>
  </div>
);

const PhaseImage = ({ image, title }) => (
  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-white/5">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover"
    />
  </div>
);

const HowItWorks = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-28">
      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[720px] mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white">
            How{" "}
            <span className="bg-gradient-to-r from-[#7B61FF] to-[#5B3FE0] bg-clip-text text-transparent">
              Quantara
            </span>{" "}
            Works
          </h2>
          <p className="mt-4 text-white/50 text-sm sm:text-base leading-relaxed">
            Our roadmap outlines the key stages of building a transparent,
            secure, and community-driven blockchain ecosystem. Each phase
            strengthens the foundation for sustainable digital growth.
          </p>
        </div>

        {/* Mobile / Tablet: single column, true order, small dotted line on the left */}
        <div className="mt-14 sm:mt-16 lg:hidden relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-white/15" />
          <div className="flex flex-col gap-14">
            {allPhasesInOrder.map((p) => (
              <div key={p.phase} className="relative">
                <div className="absolute -left-6 top-2 w-[9px] h-[9px] rounded-full bg-[#7B61FF] shadow-[0_0_12px_rgba(123,97,255,0.8)]" />
                <PhaseImage image={p.image} title={p.title} />
                <div className="mt-5">
                  <PhaseText {...p} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: two-column zigzag, matches reference layout */}
        <div className="hidden lg:grid grid-cols-2 gap-x-16 mt-16 relative">
          {/* center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/15 -translate-x-1/2" />

          {/* small glowing dots along the line */}
          <div className="absolute left-1/2 top-[6%] w-2 h-2 rounded-full bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
          <div className="absolute left-1/2 top-[46%] w-2 h-2 rounded-full bg-white -translate-x-1/2 shadow-[0_0_10px_rgba(255,255,255,0.8)]" />

          {/* Left column: image-first phases */}
          <div className="flex flex-col gap-20">
            {leftPhases.map((p) => (
              <div key={p.phase}>
                <PhaseImage image={p.image} title={p.title} />
                <div className="mt-5">
                  <PhaseText {...p} />
                </div>
              </div>
            ))}
          </div>

          {/* Right column: text-first phases */}
          <div className="flex flex-col gap-20">
            {rightPhases.map((p) => (
              <div key={p.phase}>
                <PhaseText {...p} />
                <div className="mt-5">
                  <PhaseImage image={p.image} title={p.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;