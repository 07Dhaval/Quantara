// Replace these paths with your actual local icon files
import icon1 from "../../assets/images/t1.png";
import icon2 from "../../assets/images/t2.png";
import icon3 from "../../assets/images/t3.png";
import icon4 from "../../assets/images/t4.png";
import icon5 from "../../assets/images/t5.png";
import icon6 from "../../assets/images/t6.png";
import icon7 from "../../assets/images/t7.png";
import icon8 from "../../assets/images/t8.png";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8];

// grid-column / grid-row placement for the checkerboard layout (desktop only)
const desktopPositions = [
  { col: 1, row: 1 },
  { col: 3, row: 1 },
  { col: 2, row: 2 },
  { col: 4, row: 2 },
  { col: 1, row: 3 },
  { col: 3, row: 3 },
  { col: 2, row: 4 },
  { col: 4, row: 4 },
];

const IconBox = ({ src, delay = 0 }) => (
  <div
    className="w-full aspect-square rounded-2xl bg-white/[0.04] border border-white/5 flex items-center justify-center p-3 opacity-0 animate-icon-in transition-all duration-300 hover:bg-white/[0.08] hover:border-white/10 hover:-translate-y-1 hover:scale-[1.04]"
    style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
  >
    <img
      src={src}
      alt=""
      className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
    />
  </div>
);

const TrustedNetwork = () => {
  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-24">
      {/* Keyframes for entrance animation */}
      <style>{`
        @keyframes icon-in {
          0% {
            opacity: 0;
            transform: translateY(16px) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-icon-in {
          animation: icon-in 0.6s ease-out;
        }
      `}</style>

      <div className="max-w-[900px] mx-auto">
        {/* Heading */}
        <div className="text-center max-w-[680px] mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-semibold text-white leading-tight">
            Designed For A{" "}
            <span className="bg-gradient-to-r from-[#5B8DFF] via-[#B15BFF] to-[#FF7A45] bg-clip-text text-transparent">
              Transparent
            </span>
            Control
          </h2>
          <p className="mt-3 text-white/50 text-xs sm:text-sm leading-relaxed">
            Trust is not given; it is engineered through mathematical
            certainty and transparent network protocols. Our technology
            provides institutions with absolute digital control, ensuring
            that every asset
          </p>
        </div>

        {/* Mobile / Tablet: simple grid, no stagger */}
        <div className="mt-12 sm:mt-14 lg:hidden grid grid-cols-3 sm:grid-cols-4 gap-4 max-w-[420px] sm:max-w-[520px] mx-auto">
          {icons.map((src, i) => (
            <IconBox key={i} src={src} delay={i * 80} />
          ))}
        </div>

        {/* Desktop: checkerboard staggered grid */}
        <div
          className="hidden lg:grid mt-16 mx-auto gap-6"
          style={{
            gridTemplateColumns: "repeat(4, 126px)",
            gridTemplateRows: "repeat(4, 126px)",
            width: "fit-content",
          }}
        >
          {icons.map((src, i) => (
            <div
              key={i}
              style={{
                gridColumn: desktopPositions[i].col,
                gridRow: desktopPositions[i].row,
              }}
            >
              <IconBox src={src} delay={i * 100} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedNetwork;