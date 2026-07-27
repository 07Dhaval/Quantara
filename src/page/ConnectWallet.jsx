import { Link } from "react-router-dom";

const wallets = [
  {
    name: "MetaMask",
    description: "Connect using browser extension",
    color: "#F6851B",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path d="M35 5L22 14.5l2.4-5.7L35 5z" fill="#E17726" />
        <path d="M5 5l12.9 9.6L15.6 8.8 5 5z" fill="#E27625" />
        <path d="M29.8 27.8l-3.5 5.4 7.5 2.1 2.2-7.4-6.2-.1z" fill="#E27625" />
        <path d="M4 27.9l2.2 7.4 7.5-2.1-3.5-5.4L4 27.9z" fill="#E27625" />
        <path d="M13.3 17.6l-2.1 3.2 7.4.3-.3-8-5 4.5z" fill="#E27625" />
        <path d="M26.7 17.6l-5.1-4.6-.2 8.1 7.4-.3-2.1-3.2z" fill="#E27625" />
        <path d="M13.7 33.2l4.5-2.2-3.9-3-.6 5.2z" fill="#E27625" />
        <path d="M21.8 31l4.5 2.2-.6-5.2-3.9 3z" fill="#E27625" />
      </svg>
    ),
  },
  {
    name: "Trust Wallet",
    description: "Connect using Trust Wallet app",
    color: "#3375BB",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <path
          d="M20 4c5 3 9 4 14 4 0 14-3 21-14 28C9 29 6 22 6 8c5 0 9-1 14-4z"
          fill="#3375BB"
        />
        <path
          d="M20 4v32C9 29 6 22 6 8c5 0 9-1 14-4z"
          fill="#1C5089"
        />
      </svg>
    ),
  },
  {
    name: "Coinbase Wallet",
    description: "Connect using Coinbase Wallet app",
    color: "#0052FF",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" fill="#0052FF" />
        <rect x="13" y="13" width="14" height="14" rx="3" fill="white" />
      </svg>
    ),
  },
  {
    name: "Rabby Wallet",
    description: "Connect using Rabby Wallet extension",
    color: "#7084FF",
    icon: (
      <svg viewBox="0 0 40 40" className="w-10 h-10">
        <circle cx="20" cy="20" r="18" fill="#7084FF" />
        <path
          d="M13 22c1-5 4-8 7-8s6 3 7 8c-2 3-5 5-7 5s-5-2-7-5z"
          fill="white"
        />
        <circle cx="16" cy="16" r="1.5" fill="#7084FF" />
        <circle cx="24" cy="16" r="1.5" fill="#7084FF" />
      </svg>
    ),
  },
];

const ConnectWallet = () => {
  const handleConnect = (walletName) => {
    // Yahan actual wallet connection logic (wagmi / ethers / web3modal) add karo
    console.log(`Connecting to ${walletName}...`);
  };

  return (
    <div className="mt-10 min-h-screen bg-[#050B14] flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-[440px]">
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6 text-white/60 hover:text-white text-sm">
            ← Back to Home
          </Link>
          <h1 className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Connect Your Wallet
          </h1>
          <p className="text-white/50 text-sm">
            Choose a wallet to connect to Quantara
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-3 flex flex-col gap-2">
          {wallets.map((wallet) => (
            <button
              key={wallet.name}
              onClick={() => handleConnect(wallet.name)}
              className="group flex items-center gap-4 w-full rounded-xl px-4 py-4 border border-transparent hover:border-[#7B61FF]/40 hover:bg-[#7B61FF]/10 transition-all duration-300"
            >
              <div className="flex-shrink-0">{wallet.icon}</div>
              <div className="flex-1 text-left">
                <p className="text-white font-medium text-[16px]">
                  {wallet.name}
                </p>
                <p className="text-white/40 text-[13px]">
                  {wallet.description}
                </p>
              </div>
              <span className="text-white/30 group-hover:text-[#7B61FF] group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </button>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-6">
          By connecting, you agree to Quantara's Terms of Service
        </p>
      </div>
    </div>
  );
};

export default ConnectWallet;