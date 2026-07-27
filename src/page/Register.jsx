import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ShieldCheck, Lock, Mail, User } from "lucide-react";
import logo from "../assets/images/logo.png";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Enter a valid email address.";
    if (form.password.length < 8)
      next.password = "Use at least 8 characters.";
    if (form.confirm !== form.password)
      next.confirm = "Passwords don't match.";
    if (!agreed) next.agreed = "Accept the terms to continue.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length === 0) {
      // hook up your real registration call here
      console.log("Registering:", form);
    }
  };

  return (
    <section className="relative min-h-screen w-full bg-[#05060B] px-4 py-10 sm:px-5 sm:py-16 lg:py-20">
      {/* ambient glow, consistent with rest of site */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-30 blur-[120px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(123,97,255,0.35), transparent 70%)",
        }}
      />

      <style>{`
        .glow-border-card { position: relative; isolation: isolate; }
        .glow-border-card::before {
          content: "";
          position: absolute;
          inset: -1px;
          border-radius: inherit;
          padding: 1px;
          background: conic-gradient(
            from 0deg,
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
        }
        .field-input {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
        }
        .field-input:focus {
          outline: none;
          border-color: #7B61FF;
          box-shadow: 0 0 0 3px rgba(123,97,255,0.18);
        }
      `}</style>

      <div className="mt-10 mb-[-100px] relative z-10 mx-auto flex max-w-[980px] flex-col items-center">
        {/* Logo */}
        <Link to="/" className="mb-8 flex items-center sm:mb-10">
          <img src={logo} alt="Quantara" className="h-12 w-auto object-contain sm:h-50" />
        </Link>

        <div className="glow-border-card w-full max-w-[440px] rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-9">
          <div className="text-center">
            <h1 className="text-[26px] font-light leading-tight text-white sm:text-[32px]">
              Create your{" "}
              <span className="bg-gradient-to-r from-[#7D5CFF] via-[#6F7BFF] to-[#BBA6FF] bg-clip-text text-transparent">
                Quantara
              </span>{" "}
              account
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Secure, transparent, and built for you.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-4">
            {/* Full name */}
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-gray-400">
                Full name
              </label>
              <div className="relative">
                <User size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Alex Carter"
                  className="field-input w-full rounded-lg py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-gray-600 transition-colors duration-200"
                />
              </div>
              {errors.name && <p className="mt-1.5 text-xs text-[#FF7A7A]">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-gray-400">
                Email address
              </label>
              <div className="relative">
                <Mail size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="field-input w-full rounded-lg py-3 pl-10 pr-3.5 text-sm text-white placeholder:text-gray-600 transition-colors duration-200"
                />
              </div>
              {errors.email && <p className="mt-1.5 text-xs text-[#FF7A7A]">{errors.email}</p>}
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-gray-400">
                Password
              </label>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={handleChange}
                  placeholder="At least 8 characters"
                  className="field-input w-full rounded-lg py-3 pl-10 pr-10 text-sm text-white placeholder:text-gray-600 transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.password && <p className="mt-1.5 text-xs text-[#FF7A7A]">{errors.password}</p>}
            </div>

            {/* Confirm password */}
            <div>
              <label htmlFor="confirm" className="mb-1.5 block text-xs font-medium text-gray-400">
                Confirm password
              </label>
              <div className="relative">
                <Lock size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  id="confirm"
                  name="confirm"
                  type={showConfirm ? "text" : "password"}
                  value={form.confirm}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="field-input w-full rounded-lg py-3 pl-10 pr-10 text-sm text-white placeholder:text-gray-600 transition-colors duration-200"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((v) => !v)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500 transition-colors hover:text-gray-300"
                  aria-label={showConfirm ? "Hide password" : "Show password"}
                >
                  {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
              {errors.confirm && <p className="mt-1.5 text-xs text-[#FF7A7A]">{errors.confirm}</p>}
            </div>

            {/* Terms */}
            <div>
              <label className="flex cursor-pointer items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    setErrors({ ...errors, agreed: null });
                  }}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/20 bg-white/5 accent-[#7B61FF]"
                />
                <span className="text-xs leading-relaxed text-gray-400">
                  I agree to Quantara's{" "}
                  <Link to="/terms" className="text-[#B3A6FF] underline underline-offset-2 hover:text-white">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link to="/privacy" className="text-[#B3A6FF] underline underline-offset-2 hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>
              {errors.agreed && <p className="mt-1.5 text-xs text-[#FF7A7A]">{errors.agreed}</p>}
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-lg bg-gradient-to-r from-[#5B3FE0] to-[#8B6CFF] py-3.5 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-1.5 text-xs text-gray-500">
            <ShieldCheck size={14} className="text-[#7B61FF]" />
            Your data is encrypted end-to-end.
          </div>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="font-medium text-white underline underline-offset-4 hover:text-[#B3A6FF]">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;