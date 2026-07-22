import { useEffect, useRef, useState } from "react";

// Counts up from 0 to `end` every time the element scrolls into view.
const Counter = ({ end, prefix = "", suffix = "", duration = 1500 }) => {
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
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
};

const stats = [
  {
    value: <Counter end={100} suffix="%" />,
    label: "Smart Contract Automation",
    glow: false,
  },
  {
    value: <Counter prefix="$" end={50} suffix="+" />,
    label: "Global Community Ecosystem",
    glow: true,
  },
  {
    value: "24/7",
    label: "Blockchain Operations",
    glow: false,
  },
];

const Stats = () => {
  return (
    <section className="w-full bg-[#05060B] px-5 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-10 sm:flex-row sm:items-center sm:justify-center sm:gap-6 lg:gap-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative flex aspect-square w-[240px] shrink-0 items-center justify-center rounded-full border border-white/10 sm:w-[220px] lg:w-[290px]"
          >
            {stat.glow && (
              <div
                className="pointer-events-none absolute inset-0 rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, rgba(91,63,224,0.55) 0%, rgba(91,63,224,0.15) 45%, transparent 75%)",
                }}
              />
            )}

            <div className="relative z-10 flex flex-col items-center text-center px-4">
              <span className="text-[40px] sm:text-[42px] lg:text-[52px] font-light text-white">
                {stat.value}
              </span>
              <span className="mt-3 text-xs sm:text-sm text-gray-400">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;