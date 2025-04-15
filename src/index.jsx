import React, { useState } from "react";
import {
  Smartphone,
  UserCircle,
  Bot,
  CheckCircle,
  ArrowRight,
  Mail,
  Github,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    portfolio: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white font-sans relative">
      {/* Background Overlay with Blur */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxncmFkaWVudCBpZD0iZyIgdW5pdHM9InVzZXJTcGFjZU9uVXNlIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIxMDAlIj48c3RvcCBvZmZzZXQ9IjAlIiBzdG9wLWNvbG9yPSIjMTExODJiIiBzdG9wLW9wYWNpdHk9IjAuOCIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3RvcC1jb2xvcj0iIzA4MTAyMiIgc3RvcC1vcGFjaXR5PSIwLjgiLz48L2dyYWRpZW50PjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+')] backdrop-blur-md bg-opacity-80 z-0"></div>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#b5c6fa]/30 via-[#07000c]/50 to-[#192445]/30 opacity-70 animate-gradient"></div>
        <style>{`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 20s ease infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
          }
          .animate-pulse-slow {
            animation: pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: 0.7; }
            50% { opacity: 1; }
          }
        `}</style>
        <div className="container mx-auto px-6 relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Text Content */}
            <div className="text-center md:text-left md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#c0c0c0] leading-tight">
                Job Hunting? <br /> We Made It Swipe Simple.
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Skip the grind. Auto-apply with AI precision or swipe through jobs like your favorite reels—modern, fast, and fun.
              </p>
              <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                <button
                  onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
                  className="bg-gradient-to-r from-[#d4af37] to-[#c0c0c0] px-8 py-4 rounded-full font-semibold text-black hover:from-[#b8972e] hover:to-[#a8a8a8] transition-all hover:shadow-xl hover:scale-105 transform"
                >
                  Join the Waitlist
                </button>
                <button
                  onClick={() => navigate("/about")}
                  className="border-2 border-[#d4af37] text-[#d4af37] px-8 py-4 rounded-full font-semibold hover:bg-[#d4af37]/20 hover:text-white transition-all hover:scale-105 transform"
                >
                  Learn More
                </button>
              </div>
            </div>
            {/* Visual Element */}
            <div className="md:w-1/2 relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Floating Cards */}
                <div className="absolute -top-10 -left-10 w-40 h-56 bg-[#141a2f]/80 rounded-xl shadow-lg animate-float transform rotate-12 backdrop-blur-sm flex items-center justify-center">
                  <Smartphone className="w-16 h-16 text-[#d4af37] animate-pulse-slow" />
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-56 bg-[#141a2f]/80 rounded-xl shadow-lg animate-float animation-delay-2000 transform -rotate-12 backdrop-blur-sm flex items-center justify-center">
                  <Bot className="w-16 h-16 text-[#c0c0c0] animate-pulse-slow" />
                </div>
                {/* Main Visual */}
                <div className="bg-[#141a2f]/90 p-8 rounded-2xl shadow-2xl backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <CheckCircle className="w-24 h-24 mx-auto text-[#d4af37] mb-4 animate-pulse-slow" />
                    <h3 className="text-2xl font-bold text-gray-100">Your Next Job Awaits</h3>
                    <p className="text-gray-300 mt-2">Swipe or automate—land offers faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#c0c0c0]">
            Why gojob.today?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Bot className="w-10 h-10 text-[#d4af37]" />,
                title: "AI Auto-Apply",
                description: "AI matches and applies to jobs for you, saving time.",
              },
              {
                icon: <Smartphone className="w-10 h-10 text-[#c0c0c0]" />,
                title: "Swipe & Apply",
                description: "Browse and apply to jobs with a single swipe.",
              },
              {
                icon: <CheckCircle className="w-10 h-10 text-[#d4af37]" />,
                title: "Get Hired Fast",
                description: "Streamlined process to land your next role quickly.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#141a2f]/80 p-6 rounded-lg shadow-md hover:shadow-[#d4af37]/30 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-100">{feature.title}</h3>
                <p className="text-gray-300 text-center text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#c0c0c0]">
            How It Works
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <UserCircle className="w-8 h-8 text-[#d4af37]" />,
                title: "Build Profile",
                description: "Create a clean, professional profile in minutes.",
              },
              {
                icon: <Smartphone className="w-8 h-8 text-[#c0c0c0]" />,
                title: "Swipe Jobs",
                description: "Explore jobs in a visual, intuitive feed.",
              },
              {
                icon: <Bot className="w-8 h-8 text-[#d4af37]" />,
                title: "Auto-Apply",
                description: "Let AI apply to jobs while you focus elsewhere.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-[#c0c0c0]" />,
                title: "Land Offers",
                description: "Get noticed and secure offers faster.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="bg-[#141a2f]/80 p-6 rounded-lg shadow-md hover:shadow-[#c0c0c0]/30 transition-all backdrop-blur-sm"
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-100">{step.title}</h3>
                <p className="text-gray-300 text-center text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section id="waitlist" className="py-16 relative z-10">
        <div className="container mx-auto px-6 max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] to-[#c0c0c0]">
            Join the Waitlist
          </h2>
          <div className="bg-[#141a2f]/80 p-6 rounded-lg shadow-md backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { label: "Name", id: "name", type: "text", value: formData.name },
                { label: "Email", id: "email", type: "email", value: formData.email },
                {
                  label: "Portfolio URL",
                  id: "portfolio",
                  type: "url",
                  value: formData.portfolio,
                },
              ].map(({ label, id, type, value }) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-sm font-medium mb-1 text-gray-200">
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    required
                    value={value}
                    onChange={(e) =>
                      setFormData({ ...formData, [id]: e.target.value })
                    }
                    className="w-full px-3 py-2 bg-[#0a0e1a] text-white border border-gray-600 rounded-md focus:ring-2 focus:ring-[#d4af37] outline-none transition-all"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#d4af37] to-[#c0c0c0] px-4 py-2 rounded-md font-medium text-black hover:from-[#b8972e] hover:to-[#a8a8a8] transition-all flex items-center justify-center gap-2"
              >
                <span>Join Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0e1a]/80 py-10 border-t border-gray-700 relative z-10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6 text-gray-300">
            <div>
              <h3 className="text-white font-bold text-xl mb-3">gojob.today</h3>
              <p className="text-sm">Swipe, apply, succeed. Your next job awaits.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Links</h4>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link to="/about" className="hover:text-[#d4af37] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#d4af37] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#d4af37] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <p className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" /> support@gojob.today
              </p>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm mt-8 pt-6 border-t border-gray-700">
            © 2025 gojob.today. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;