import { useMemo } from "react";

/**
 * Exact geometry copied from the source SVG.
 * Each entry: transform (translate x y) + path d.
 * pathLength="100" is set on every <path> so a single CSS
 * keyframe animation works identically regardless of each
 * line's real length (some are longer/shorter diagonals).
 */
const LINES = [
  { t: "116.962 18.557", d: "M 0 0 L 0 105.952 L 16.87 118.441 L 16.87 199.623" },
  { t: "121.461 21.368", d: "M 0 0 L 0 99.077 L 16.87 112.109 L 16.87 196.812" },
  { t: "125.959 17.994", d: "M 0 0 L 0 97.394 L 16.87 111.174 L 16.87 200.748" },
  { t: "130.458 20.806", d: "M 0 0 L 0 90.523 L 16.87 104.845 L 16.87 197.936" },
  { t: "134.957 17.994", d: "M 0 0 L 0 88.375 L 16.87 103.358 L 16.87 200.748" },
  { t: "138.893 19.119", d: "M 0 0 L 0 82.131 L 16.87 97.796 L 16.87 199.623" },
  { t: "143.391 17.994", d: "M 0 0 L 0 79.433 L 16.87 95.608 L 16.87 200.748" },
  { t: "147.89 19.119",  d: "M 0 0 L 0 73.162 L 16.87 90.023 L 16.87 199.623" },
  { t: "151.826 20.806", d: "M 0 0 L 0 66.653 L 16.87 84.158 L 16.87 197.936" },
  { t: "156.325 16.307", d: "M 0 0 L 0 68.038 L 16.87 85.958 L 16.87 202.435" },
  { t: "160.823 19.681", d: "M 0 0 L 0 60.858 L 16.87 79.21 L 16.87 198.499" },
  { t: "164.759 12.933", d: "M 0 0 L 0 63.1 L 16.87 82.128 L 16.87 205.809" },
  { t: "112.464 74.788", d: "M 0 0 L 0 52.015 L 16.87 65.099 L 16.87 150.139" },
  { t: "108.528 74.788", d: "M 0 0 L 0 53.723 L 16.87 67.329 L 16.87 155.762" },
  { t: "104.029 74.788", d: "M 0 0 L 0 55.626 L 16.87 69.802 L 16.87 161.948" },
  { t: "60.168 35.988",  d: "M 16.87 0 L 16.87 88.908 L 0 101.42 L 0 182.754" },
  { t: "56.232 34.301",  d: "M 16.87 0 L 16.87 86.166 L 0 99.195 L 0 183.878" },
  { t: "51.733 35.426",  d: "M 16.87 0 L 16.87 80.075 L 0 93.84 L 0 183.316" },
  { t: "47.235 33.739",  d: "M 16.87 0 L 16.87 77.604 L 0 91.923 L 0 185.003" },
  { t: "43.299 34.864",  d: "M 16.87 0 L 16.87 71.306 L 0 86.315 L 0 183.878" },
  { t: "38.8 36.551",    d: "M 16.87 0 L 16.87 64.818 L 0 80.468 L 0 182.191" },
  { t: "34.301 34.864",  d: "M 16.87 0 L 16.87 62.348 L 0 78.552 L 0 183.878" },
  { t: "30.365 36.551",  d: "M 16.87 0 L 16.87 55.859 L 0 72.703 L 0 182.191" },
  { t: "25.867 29.241",  d: "M 16.87 0 L 16.87 58.1 L 0 75.62 L 0 189.501" },
  { t: "21.368 25.304",  d: "M 16.87 0 L 16.87 59.479 L 0 77.416 L 0 194" },
  { t: "17.432 19.681",  d: "M 16.87 0 L 16.87 60.858 L 0 79.21 L 0 198.499" },
  { t: "0 0",            d: "M 16.87 0 L 16.87 67.065 L 0 87.289 L 0 218.742" },
  { t: "64.667 35.988",  d: "M 16.87 0 L 16.87 90.56 L 0 103.602 L 0 188.377" },
  { t: "68.603 74.788",  d: "M 16.87 0 L 16.87 53.723 L 0 67.329 L 0 155.762" },
  { t: "73.101 74.788",  d: "M 16.87 0 L 16.87 55.626 L 0 69.802 L 0 161.948" },
];

const CircuitAnimatedBg = ({ className = "" }) => {
  // stable pseudo-random delay per line, same on every render
  const delays = useMemo(
    () => LINES.map((_, i) => ((i * 37) % 24) / 10 + (i % 3) * 0.15),
    []
  );

  return (
    <svg
      viewBox="0 0 181 194"
      xmlns="http://www.w3.org/2000/svg"
      className={`cbg-root ${className}`}
      preserveAspectRatio="xMaxYMid meet"
    >
      <defs>
        {/* indigo → cyan flow color, matches the reference animation */}
        <linearGradient id="cbg-line-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgb(99,70,239)" />
          <stop offset="55%" stopColor="rgb(91,109,255)" />
          <stop offset="100%" stopColor="rgb(94,190,250)" />
        </linearGradient>
      </defs>

      <g transform="translate(-0.066 -30.928)">
        {/* ---- flowing circuit traces ---- */}
        <g fill="none" strokeLinecap="round">
          {LINES.map((line, i) => (
            <path
              key={i}
              d={line.d}
              transform={`translate(${line.t})`}
              pathLength="100"
              className="cbg-line"
              stroke="url(#cbg-line-gradient)"
              strokeWidth="0.6"
              style={{ animationDelay: `${delays[i]}s` }}
            />
          ))}
        </g>
      </g>

      <style>{`
        .cbg-root { width: 100%; height: 100%; overflow: visible; }

        .cbg-line {
          stroke-dasharray: 22 78;
          stroke-dashoffset: 100;
          opacity: 0;
          animation: cbg-flow 3.2s cubic-bezier(.4,0,.2,1) infinite;
        }

        @keyframes cbg-flow {
          0%   { stroke-dashoffset: 100; opacity: 0; }
          8%   { opacity: 0.9; }
          70%  { opacity: 0.9; }
          100% { stroke-dashoffset: -22; opacity: 0; }
        }
      `}</style>
    </svg>
  );
};

export default CircuitAnimatedBg;