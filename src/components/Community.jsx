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
  return (
    <section
      id="community"
      className="mt-[-70px] w-full bg-[#000000] px-5 py-16 sm:py-20 lg:py-24"
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
        <div className="mt-8 sm:mt-6 flex justify-start sm:justify-center gap-3 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <div
                key={tab.name}
                className="flex shrink-0 items-center gap-2 rounded-full border border-white/10 bg-[#0D0D12] px-6 py-3 text-sm font-medium text-gray-300"
              >
                <Icon size={16} />
                {tab.name}
              </div>
            );
          })}
        </div>

        {/* Content grid */}
        <div className="mt-12 sm:-mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

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