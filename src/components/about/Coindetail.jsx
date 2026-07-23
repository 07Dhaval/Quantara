const CoinDetail = () => {
  const stats = [
    { label: "Price", value: "$109,863 USD" },
    { label: "Market Cap", value: "$2.18T USD" },
    { label: "Volume (24H)", value: "$55.46K MUS$" },
    { label: "Circulation Supply", value: "21M BTC" },
  ];

  const whyPoints = [
    "A finite supply of 21 million coins may lead to increased future value.",
    "Transactions are secured through cryptography and verified by network nodes.",
    "As a global currency, it allows for easy international transactions.",
    "Bitcoin's decentralized nature provides users full control over their assets.",
  ];

  return (
    <section className="w-full bg-[#050B14] px-5 py-16 sm:py-20 lg:py-24">
      <div className="max-w-[900px] mx-auto">
        {/* Intro paragraph */}
        <p className="text-center text-white/90 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-[820px] mx-auto">
          Quantara is building a decentralized blockchain ecosystem where
          transparency, innovation, and community collaboration come
          together. Powered by autonomous smart contracts, our platform
          enables secure participation, sustainable rewards, and long-term
          digital growth.
        </p>

        {/* Card */}
        <div className="mt-14 sm:mt-16 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8">
          {/* Coin header */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-b from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white text-xl sm:text-2xl font-semibold">
              ₿
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  Bitcoin
                </h3>
                <span className="text-[11px] font-medium text-[#7B61FF] bg-[#7B61FF]/15 border border-[#7B61FF]/30 rounded-md px-2 py-0.5">
                  BTC
                </span>
              </div>
              <p className="mt-1 text-white/50 text-sm leading-relaxed">
                Bitcoin is the first cryptocurrency, enabling decentralized
                transfers directly between users worldwide.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-y-5 gap-x-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white/40 text-xs sm:text-[13px]">
                  {stat.label}
                </p>
                <p className="mt-1 text-white text-sm sm:text-[15px] font-medium">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 h-px w-full bg-white/10" />

          {/* About Bitcoin */}
          <div className="mt-7 sm:mt-8">
            <h4 className="text-white text-xl sm:text-2xl font-semibold">
              About Bitcoin
            </h4>
            <p className="mt-3 text-white/50 text-sm sm:text-[15px] leading-relaxed">
              As the first-ever cryptocurrency, Bitcoin operates on a
              peer-to-peer network, enabling secure and direct transactions.
              It was created in 2009 by an unknown entity known as Satoshi
              Nakamoto. All transactions are recorded on a public ledger
              called the blockchain, ensuring transparency.
            </p>
          </div>

          {/* Why purchase Bitcoin */}
          <div className="mt-7 sm:mt-8">
            <h4 className="text-white text-xl sm:text-2xl font-semibold">
              Why purchase Bitcoin (BTC)?
            </h4>
            <p className="mt-3 text-white/50 text-sm sm:text-[15px] leading-relaxed">
              Investing in Bitcoin offers a unique opportunity to engage with
              a decentralized financial system. Its limited supply could make
              it a hedge against inflation. Many see it as "digital gold," a
              store of value independent of traditional markets.
            </p>

            <ul className="mt-4 space-y-2.5">
              {whyPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-2.5 text-white/50 text-sm sm:text-[15px] leading-relaxed"
                >
                  <span className="mt-2 w-1 h-1 rounded-full bg-white/40 shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoinDetail;