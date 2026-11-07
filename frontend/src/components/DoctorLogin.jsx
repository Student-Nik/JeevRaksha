
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  PawPrint,
  Stethoscope,
  LockKeyhole,
  UserRound,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  Activity,
} from "lucide-react";

const API_BASE_URL = (
  import.meta.env.VITE_API_URL || "http://localhost:5000"
).replace(/\/+$/, "");

const API_URL = `${API_BASE_URL}/api/v1/auth/doctor/login`;

function DoctorLogin() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password.trim()) {
      setError("कृपया युजरनेम आणि पासवर्ड भरा.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username.trim(),
          password,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setError(
          result.message || "युजरनेम किंवा पासवर्ड चुकीचा आहे."
        );
        return;
      }

      // Save JWT token
      localStorage.setItem("doctorToken", result.data.token);

      // Save doctor username
      localStorage.setItem("doctorUsername", result.data.username);

      // Redirect after successful login
      navigate("/doctor/visits/new");

    } catch (error) {
      console.error("Doctor login error:", error);

      setError(
        "सर्व्हरशी संपर्क साधता आला नाही. कृपया पुन्हा प्रयत्न करा."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B2B24] text-white">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#1B5948]/30 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-[#C7F36B]/10 blur-[100px]" />

      {/* Header */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-5 py-6 md:px-10">

        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C7F36B] text-[#123D32] shadow-lg">
            <PawPrint size={27} />
          </div>

          <div>
            <h1 className="text-xl font-extrabold tracking-tight">
              JeevRaksha
            </h1>
            <p className="text-xs text-[#B9CEC2]">
              पशुवैद्यकीय सेवा केंद्र
            </p>
          </div>
        </Link>

        <Link
          to="/"
          className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-[#B9CEC2] transition hover:border-[#C7F36B] hover:text-[#C7F36B]"
        >
          मुख्यपृष्ठ
        </Link>

      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-7xl items-center gap-12 px-5 pb-12 pt-6 md:px-10 lg:grid-cols-2">

        {/* Left Content */}
        <section className="hidden lg:block">

          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#C7F36B]/20 bg-[#C7F36B]/10 px-5 py-2.5 text-sm font-semibold text-[#C7F36B]">
            <ShieldCheck size={17} />
            सुरक्षित डॉक्टर पोर्टल
          </div>

          <h2 className="max-w-xl text-5xl font-extrabold leading-[1.2] xl:text-6xl">
            प्रत्येक जीवाच्या
            <span className="block text-[#C7F36B]">
              आरोग्याची जबाबदारी
            </span>
            आपल्या हातात.
          </h2>

          <p className="mt-7 max-w-lg text-base leading-8 text-[#B9CEC2]">
            JeevRaksha डॉक्टर पोर्टलमध्ये आपले स्वागत आहे.
            प्राण्यांच्या तपासणीची माहिती नोंदवा, उपचारांचे
            रेकॉर्ड व्यवस्थापित करा आणि प्रत्येक भेटीचा
            वैद्यकीय इतिहास सुरक्षित ठेवा.
          </p>

          {/* Feature Cards */}
          <div className="mt-12 grid max-w-xl grid-cols-2 gap-4">

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C7F36B]/10 text-[#C7F36B]">
                <HeartPulse size={23} />
              </div>

              <h3 className="font-bold">आरोग्य नोंदी</h3>
              <p className="mt-2 text-sm text-[#91AA9D]">
                प्रत्येक तपासणीचा तपशील
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C7F36B]/10 text-[#C7F36B]">
                <Activity size={23} />
              </div>

              <h3 className="font-bold">उपचार व्यवस्थापन</h3>
              <p className="mt-2 text-sm text-[#91AA9D]">
                निदान आणि औषधांची माहिती
              </p>
            </div>

          </div>

          <div className="mt-12 flex items-center gap-3 text-sm text-[#91AA9D]">
            <div className="h-px w-12 bg-[#C7F36B]/50" />
            Service, Care and Health for Every Animal.
          </div>

        </section>

        {/* Login Card */}
        <section className="mx-auto w-full max-w-md">

          <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#123D32] shadow-2xl shadow-black/30">

            {/* Card Top */}
            <div className="relative overflow-hidden border-b border-white/10 px-7 pb-7 pt-9 text-center md:px-10">

              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#C7F36B]/10 blur-2xl" />

              <div className="relative mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-[#C7F36B] text-[#123D32] shadow-xl shadow-[#C7F36B]/10">
                <Stethoscope size={38} />
              </div>

              <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#C7F36B]">
                DOCTOR PORTAL
              </p>

              <h2 className="text-3xl font-extrabold">
                स्वागत आहे, डॉक्टर!
              </h2>

              <p className="mt-3 text-sm leading-6 text-[#B9CEC2]">
                पुढे जाण्यासाठी कृपया आपल्या
                खात्यात लॉगिन करा.
              </p>

            </div>

            {/* Login Form */}
            <div className="p-7 md:p-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Username */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#E4F0E5]">
                    युजरनेम
                  </label>

                  <div className="relative">
                    <UserRound
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91AA9D]"
                    />

                    <input
                      type="text"
                      value={username}
                      onChange={(e) => {
                        setUsername(e.target.value);
                        setError("");
                      }}
                      placeholder="आपले युजरनेम टाका"
                      autoComplete="username"
                      className="w-full rounded-xl border border-white/10 bg-[#0B2B24] py-4 pl-12 pr-4 text-white outline-none transition placeholder:text-[#718D80] focus:border-[#C7F36B] focus:ring-2 focus:ring-[#C7F36B]/10"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#E4F0E5]">
                    पासवर्ड
                  </label>

                  <div className="relative">
                    <LockKeyhole
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#91AA9D]"
                    />

                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      placeholder="आपला पासवर्ड टाका"
                      autoComplete="current-password"
                      className="w-full rounded-xl border border-white/10 bg-[#0B2B24] py-4 pl-12 pr-12 text-white outline-none transition placeholder:text-[#718D80] focus:border-[#C7F36B] focus:ring-2 focus:ring-[#C7F36B]/10"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#91AA9D] transition hover:text-[#C7F36B]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm leading-6 text-red-300">
                    {error}
                  </div>
                )}

                {/* Login Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#C7F36B] py-4 font-extrabold text-[#123D32] shadow-lg shadow-[#C7F36B]/10 transition-all duration-300 hover:-translate-y-1 hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "लॉगिन सुरू आहे..." : "सुरक्षित लॉगिन करा"}

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>

              {/* Security Note */}
              <div className="mt-7 flex items-start gap-3 rounded-xl border border-white/10 bg-[#0B2B24]/60 p-4">

                <ShieldCheck
                  size={21}
                  className="mt-0.5 shrink-0 text-[#C7F36B]"
                />

                <p className="text-xs leading-6 text-[#91AA9D]">
                  हे पोर्टल केवळ अधिकृत डॉक्टरांसाठी आहे.
                  अनधिकृत प्रवेशास परवानगी नाही.
                </p>

              </div>

            </div>
          </div>

          <p className="mt-6 text-center text-xs text-[#718D80]">
            © {new Date().getFullYear()} JeevRaksha. सर्व हक्क राखीव.
          </p>

        </section>

      </main>
    </div>
  );
}

export default DoctorLogin;
