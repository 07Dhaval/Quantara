import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is Quantara a custodial wallet?",
    answer:
      "No, Quantara is a non-custodial wallet. This means you have complete control over your private keys and funds. We never have access to your assets.",
  },
  {
    question: "Which blockchains does Quantara support?",
    answer:
      "Quantara supports all major EVM-compatible chains including Ethereum, BNB Chain, Polygon, Arbitrum, and Optimism, with more networks being added as the ecosystem grows.",
  },
  {
    question: "How secure is Quantara?",
    answer:
      "Quantara uses bank-grade encryption, offline hardware-backed key storage, and multi-layer transaction verification to keep your assets protected at every step.",
  },
  {
    question: "Can I recover my wallet if I lose my device?",
    answer:
      "Yes. As long as you have your 12/24-word recovery phrase stored safely, you can restore full access to your wallet on any new device in minutes.",
  },
  {
    question: "What are the fees?",
    answer:
      "Quantara charges no hidden platform fees. You only pay the standard network (gas) fee required by the blockchain for each transaction.",
  },
  {
    question: "Is Quantara available on mobile?",
    answer:
      "Yes, Quantara is available for both iOS and Android, with full feature parity to the desktop and web experience.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  // Hover opens a card on desktop; leaving closes it again.
  // Click is kept as a fallback so it still works on touch devices.
  const handleEnter = (i) => setOpenIndex(i);
  const handleLeave = () => setOpenIndex(null);
  const handleClick = (i) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section
      id="faq"
      className="mt-[-110px] w-full bg-[#000000] px-5 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[980px]">

        {/* Heading */}
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[30px] sm:text-[40px] lg:text-[46px] leading-[1.15] font-light text-white">
            Frequently{" "}
            <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
              Asked
            </span>{" "}
            Questions
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-7 text-gray-400 px-2">
            We invite you to delve deep into the sophisticated technical
            architecture, robust security protocols, and high-performance
            operational frameworks that serve.
          </p>
        </div>

        {/* Accordion */}
        <div className="mt-10 sm:mt-14 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
                onClick={() => handleClick(i)}
                className={`glow-border-card relative rounded-2xl border border-white/10 bg-white/[0.02] p-1 sm:p-1 transition-transform duration-300 hover:-translate-y-1 hover:border-white/20 cursor-pointer transition-all ${
                  isOpen
                    ? "bg-gradient-to-r from-[#7B61FF] via-[#5B7BFF] to-[#4FA6E8]"
                    : "bg-white/10"
                }`}
              >
                <div className="rounded-[11px] bg-[#000000] px-5 sm:px-7 py-5 sm:py-6">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-base sm:text-lg font-medium text-white">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-white transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-3"
                        : "grid-rows-[0fr] opacity-0 mt-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 max-w-[720px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;