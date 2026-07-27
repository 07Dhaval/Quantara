import { useEffect, useRef, useState } from "react";
import {
  Bitcoin,
  ShieldCheck,
  AudioWaveform,
  Sparkles,
  Grid2x2,
} from "lucide-react";

// Fades + slides an element up into place once it scrolls into view.
// Wrap any block in this to reveal it on scroll, with an optional stagger delay.
const Reveal = ({ children, delay = 0, className = "" }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Orbiting icon ring: an SVG dashed orbit path with the icons rotating
// continuously around the center, each icon counter-rotated so it stays upright.
// Circle/orbit size reduced (170px -> 130px container, r=70 -> r=52) so the
// ring reads smaller inside the Blockchain Infrastructure card.
const OrbitIconRing = () => {
  const orbitIcons = [
    { Icon: Bitcoin, color: "#F7931A", angle: -10 },
    { Icon: ShieldCheck, color: "#5B61FF", angle: 95 },
    { Icon: AudioWaveform, color: "#5B61FF", angle: 190 },
    { Icon: Sparkles, color: "#7B61FF", angle: 280 },
  ];

  return (
    <div className="relative -translate-x-1 translate-y-1 sm:translate-x-0 sm:translate-y-0">
      <div
        style={{
          transform: "scale(clamp(0.5, calc(100vw / 640px), 1))",
          transformOrigin: "center",
        }}
      >
        <div className="orbit-wrap relative h-[114px] w-[130px]">
          {/* soft ambient glow behind the ring */}
          <div className="orbit-glow absolute inset-0 rounded-full" />

          {/* dashed orbit path */}
          <svg viewBox="0 0 130 130" className="absolute inset-0 h-full w-full">
            <circle
              cx="65"
              cy="65"
              r="52"
              fill="none"
              stroke="url(#orbitStroke)"
              strokeWidth="1"
              strokeDasharray="2 6"
            />
            <defs>
              <linearGradient id="orbitStroke" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7B61FF" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#5B61FF" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>

          {/* rotating group holding the icon nodes */}
          <div className="orbit-spin absolute inset-0">
            {orbitIcons.map(({ Icon, color, angle }, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 h-9 w-9 sm:h-10 sm:w-10"
                style={{
                  transform: `rotate(${angle}deg) translate(52px) rotate(-${angle}deg) translate(-50%, -50%)`,
                }}
              >
                <div className="orbit-counter-spin flex h-full w-full items-center justify-center rounded-full bg-white shadow-[0_0_12px_rgba(123,97,255,0.35)]">
                  <Icon size={16} style={{ color }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CoreProtocol = () => {
  return (
    <section
      id="core-protocol"
      className="relative w-full bg-[#000000] px-4 sm:px-5 py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      <style>{`
        @property --border-angle {
          syntax: '<angle>';
          initial-value: 0deg;
          inherits: false;
        }
        @keyframes orbit-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-counter-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.7; }
        }
        .orbit-spin {
          animation: orbit-spin 14s linear infinite;
        }
        .orbit-spin > div > .orbit-counter-spin {
          animation: orbit-counter-spin 14s linear infinite;
        }
        .orbit-glow {
          background: radial-gradient(closest-side, rgba(123,97,255,0.25), transparent 70%);
          animation: glow-pulse 4s ease-in-out infinite;
        }
        @keyframes wire-flow {
          0% { stroke-dashoffset: 100; opacity: 0.35; }
          50% { stroke-dashoffset: 0; opacity: 1; }
          100% { stroke-dashoffset: -100; opacity: 0.35; }
        }
        @keyframes node-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.6); opacity: 1; }
        }
        .wire-path {
          stroke-dasharray: 100 100;
          animation: wire-flow 3.2s ease-in-out infinite;
          filter: drop-shadow(0 0 3px rgba(180,180,255,0.9));
        }
        .wire-path.wire-path-delay {
          animation-delay: 0.4s;
        }
        .wire-node {
          transform-box: fill-box;
          transform-origin: center;
          animation: node-pulse 3.2s ease-in-out infinite;
        }
        @keyframes border-rotate {
          to { --border-angle: 360deg; }
        }
        .glow-border-card {
          position: relative;
          isolation: isolate;
        }
        .glow-border-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from var(--border-angle),
            #3ED1D1,
            #4F7CFF 30%,
            #7B61FF 55%,
            #3a4a8f00 75%,
            #3ED1D1 100%
          );
          -webkit-mask:
            linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
          opacity: 0.95;
          animation: border-rotate 2.2s linear infinite;
        }
      `}</style>

      <div className="mx-auto max-w-[980px]">
        {/* Heading */}
        <Reveal className="mx-auto max-w-[720px] text-center px-1">
          <h2 className="text-[26px] xs:text-[28px] sm:text-[40px] lg:text-[48px] leading-[1.15] font-light text-white">
            Core{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Protocol
            </span>{" "}
            Capabilities
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 px-1">
            Quantara combines blockchain infrastructure, autonomous smart
            contracts, and community-driven participation to build a secure,
            transparent, and scalable digital ecosystem for sustainable growth.
          </p>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-5 sm:gap-6">
            {/* Smart Contract Automation */}
            <Reveal
              delay={100}
              className="glow-border-card relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20"
            >
              <h3 className="text-lg sm:text-2xl font-medium text-white">
                Smart Contract Automation
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400 max-w-[280px]">
                Automated, transparent, and secure transactions.
              </p>

              <div className="mt-6 sm:mt-8 flex flex-col xs:flex-row items-center justify-center sm:justify-between gap-5 sm:gap-4">
                {/* <button className="w-full xs:w-auto shrink-0 rounded-lg bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] px-6 py-3 text-sm sm:text-[15px] font-medium text-white transition-transform duration-300 hover:scale-105">
                  Learn More
                </button> */}

                {/* Node diagram */}
                <div className="relative block w-full max-w-[150px] xs:max-w-[120px] sm:max-w-[180px] h-[80px] sm:h-[100px] shrink-0 opacity-90 mx-auto xs:mx-0">
                  <svg
                    viewBox="0 0 180 100"
                    className="absolute inset-0 w-full h-full"
                    fill="none"
                  >
                    <path
                      d="M28 50 H70 L70 20 H130"
                      stroke="#D8DAF0"
                      strokeWidth="1"
                      pathLength="100"
                      className="wire-path"
                    />
                    <path
                      d="M28 50 H70 L70 80 H130"
                      stroke="#D8DAF0"
                      strokeWidth="1"
                      pathLength="100"
                      className="wire-path wire-path-delay"
                    />
                    <circle
                      cx="20"
                      cy="50"
                      r="2"
                      fill="#7B61FF"
                      className="wire-node"
                    />
                    <circle
                      cx="130"
                      cy="20"
                      r="3"
                      fill="#7B61FF"
                      className="wire-node"
                    />
                    <circle
                      cx="130"
                      cy="80"
                      r="3"
                      fill="#7B61FF"
                      className="wire-node"
                    />
                  </svg>

                  <div className="absolute left-[10px] top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#0A0C14]">
                    <Grid2x2 size={16} className="text-[#7B61FF]" />
                  </div>
                  <div className="absolute left-[112px] top-[4px] flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#0A0C14]">
                    <Grid2x2 size={16} className="text-[#7B61FF]" />
                  </div>
                  <div className="absolute left-[112px] bottom-[4px] flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-[#0A0C14]">
                    <Grid2x2 size={16} className="text-[#7B61FF]" />
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Blockchain Infrastructure */}
            <Reveal
              delay={200}
              className="glow-border-card relative rounded-2xl border border-[#3a4a8f]/60 bg-white/[0.02] p-4 xs:p-5 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[#3a4a8f]"
            >
              <div className="flex flex-row items-center justify-between gap-3 sm:gap-4">
                <div className="min-w-0 flex-1 sm:max-w-[280px]">
                  <h3 className="text-base xs:text-lg sm:text-2xl font-medium text-white">
                    Blockchain Infrastructure
                  </h3>
                  <p className="mt-1.5 xs:mt-2 sm:mt-3 text-xs xs:text-sm sm:text-base text-gray-400">
                    Decentralized technology built for trust and reliability.
                  </p>
                </div>

                {/* orbiting SVG icon ring, always pinned to the right of the text */}
                <div className="shrink-0">
                  <OrbitIconRing />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right column */}
          <Reveal
            delay={300}
            className="glow-border-card relative rounded-2xl border border-[#3a4a8f]/70 bg-white/[0.02] p-5 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[#3a4a8f]"
          >
            <h3 className="text-lg sm:text-2xl font-medium text-white">
              Community Rewards
            </h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">
              Earn rewards through participation and growth.
            </p>

            <h3 className="mt-6 sm:mt-8 text-lg sm:text-2xl font-medium text-white">
              Cryptographic Security
            </h3>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">
              Advanced protection for every transaction.
            </p>

            <div className="mt-6 sm:mt-8 border-t border-white/10 pt-5 sm:pt-6">
              <div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#1c1440]/60 to-transparent p-4 sm:p-6">
                <ul className="space-y-3">
                  {[
                    "Scalable Ecosystem",
                    "Transparent Governance",
                    "Military-Grade Hardware Security",
                    "Dynamic Real-Time Threat Mitigation",
                    "End-to-End Encrypted Data Streams",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default CoreProtocol;