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
          setValue(0);
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
  const [activeTab, setActiveTab] = useState(tabs[0].name);

  return (
    <section
      id="community"
      className="mt-0 sm:mt-[-70px] w-full bg-[#000000] px-4 sm:px-5 py-20 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">

        {/* Heading */}
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="text-[24px] xs:text-[26px] sm:text-[38px] lg:text-[46px] leading-[1.2] font-light text-white">
            Built For{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Digital
            </span>{" "}
            Communities
          </h2>
          <p className="mt-3 sm:mt-4 text-[13px] sm:text-base leading-6 sm:leading-7 text-gray-400 px-1 sm:px-2">
            Empowering individuals, businesses, and communities through a
            transparent blockchain ecosystem.
          </p>
        </div>

        {/* Tabs - single row, always fits */}
        <div className="mt-6 sm:mt-8 flex justify-center gap-1.5 sm:gap-3 w-full">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.name;
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex-1 min-w-0 flex items-center justify-center gap-1 sm:gap-2 rounded-full border px-2 py-2 sm:px-6 sm:py-3 text-[10px] xs:text-[11px] sm:text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-[#7B61FF] bg-[#7B61FF]/15 text-white shadow-[0_0_20px_rgba(123,97,255,0.25)]"
                    : "border-white/10 bg-[#0D0D12] text-gray-300 hover:border-white/20 hover:text-white"
                }`}
              >
                <Icon size={12} className="shrink-0 sm:hidden" />
                <Icon size={16} className="hidden sm:block shrink-0" />
                <span className="truncate">{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Content grid */}
        <div className="mt-8 sm:mt-12 lg:-mt-14 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center">

          {/* Left column */}
          <div className="text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-medium text-white">
              Real-Time Ecosystem Intelligence
            </h3>
            <p className="mt-3 sm:mt-4 text-[13px] sm:text-base leading-6 sm:leading-7 text-gray-400">
              Monitor, manage, and grow within the Quantara ecosystem through
              transparent smart contracts, secure blockchain infrastructure,
              and community-driven participation.
            </p>

            <ul className="mt-5 sm:mt-6 flex flex-col gap-3 sm:gap-4 items-center lg:items-start">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 sm:gap-3">
                  <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 rounded-full bg-gradient-to-br from-[#F7B0FF] to-[#7B61FF]" />
                  <span className="text-sm sm:text-base text-white">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - local image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={ecosystemImg}
              alt="Quantara ecosystem diagram"
              className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] lg:max-w-[420px] rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;