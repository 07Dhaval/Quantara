import { useEffect, useRef, useState } from "react";
import { BarChart3, Target, ShieldCheck } from "lucide-react";
import ecosystemImg from "../assets/images/ecosystem1.png";

const tabs = [
  { name: "Digital Ecosystem", icon: BarChart3 },
  { name: "Smart Contracts", icon: Target },
  { name: "Blockchain Security", icon: ShieldCheck },
];

const features = [
  "Transparent Smart Contracts",
  "Secure Blockchain Network",
  "Community-Driven Growth",
];

// Counts up from 0 to `end` every time the element scrolls into view.
const Counter = ({ end, suffix = "", duration = 1500 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const animate = () => {
      cancelAnimationFrame(frameRef.current);
      const startTime = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        // ease-out for a natural finish
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * end));
        if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      };

      frameRef.current = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
        } else {
          cancelAnimationFrame(frameRef.current);
          setValue(0); // reset so it replays next time it scrolls into view
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameRef.current);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const Community = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      id="community"
      className="w-full bg-[#05060B] px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">

        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[28px] sm:text-[38px] lg:text-[46px] leading-[1.15] font-light text-white">
            Built For{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Communities
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400 px-2">
            Empowering individuals, businesses, and communities through a
            transparent blockchain ecosystem.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-8 sm:mt-10 flex justify-start sm:justify-center gap-3 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const active = activeTab === i;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(i)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] text-white"
                    : "border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06]"
                }`}
              >
                <Icon size={16} />
                {tab.name}
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left column */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-medium text-white">
              Real-Time Ecosystem Intelligence
            </h3>
            <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400">
              Monitor, manage, and grow within the Quantara ecosystem through
              transparent smart contracts, secure blockchain infrastructure,
              and community-driven participation.
            </p>

            <ul className="mt-6 flex flex-col gap-4">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <span className="h-3 w-3 shrink-0 rounded-full bg-gradient-to-br from-[#F7B0FF] to-[#7B61FF]" />
                  <span className="text-base text-white">{f}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="glow-border-card relative rounded-2xl border border-[#3a4a8f]/70 bg-white/[0.02] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:border-[#3a4a8f] mt-8 grid grid-cols-3 divide-x divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
              <div className="flex flex-col items-center justify-center px-2 py-5 text-center">
                <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#C084FC] to-[#7B61FF] bg-clip-text text-transparent">
                  <Counter end={50} suffix="+" />
                </span>
                <span className="mt-1 text-[11px] sm:text-xs text-gray-400">
                  Activation Packages
                </span>
              </div>

              <div className=" flex flex-col items-center justify-center px-2 py-5 text-center">
                <span className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-[#7B9CFF] to-[#5B8CFF] bg-clip-text text-transparent">
                  <Counter end={1000} suffix="+" />
                </span>
                <span className="mt-1 text-[11px] sm:text-xs text-gray-400">
                  Smart Contract Automation
                </span>
              </div>

              <div className="flex flex-col items-center justify-center px-2 py-5 text-center">
                <span className="text-xl sm:text-2xl font-semibold text-white">
                  24/7
                </span>
                <span className="mt-1 text-[11px] sm:text-xs text-gray-400">
                  Blockchains Operations
                </span>
              </div>
            </div>
          </div>

          {/* Right column - local image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={ecosystemImg}
              alt="Quantara ecosystem diagram"
              className="w-full max-w-[420px] rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;