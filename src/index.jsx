import React, { useState } from "react";
import {
  Smartphone,
  UserCircle,
  Building2,
  ChevronRight,
  Github,
  Globe,
  CheckCircle,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Mail,
  Users
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white font-sans">
      {/* Hero */}
      <header className="container mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 to-green-400 text-transparent bg-clip-text mb-6">
          Swipe. Match. Get Hired.
        </h1>
        <p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto mb-10">
          Explore jobs the way you scroll content—quick, visual, and to the
          point. Like reels, but made for serious opportunities.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => navigate("/about")}
            className="bg-gray-800 hover:bg-gray-700 px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-transform transform hover:scale-105"
          >
            About
          </button>
        </div>
      </header>

      {/* How it Works */}
<section className="bg-[#121827] py-20">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
      How It Works
    </h2>
    <div className="grid md:grid-cols-4 gap-10">
      {[
        {
          icon: <UserCircle className="w-10 h-10 text-blue-500" />,
          title: "Create Profile",
          description:
            "Add your experience, skills, and portfolio—no fluff, just what matters.",
        },
        {
          icon: <Smartphone className="w-10 h-10 text-blue-500" />,
          title: "Explore Jobs Easily",
          description:
            "Scroll through job cards like you would reels—simple, visual, and quick.",
        },
        {
          icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
          title: "Apply in One Click",
          description:
            "Found something interesting? Swipe right to apply—no long forms.",
        },
        {
          icon: <Users className="w-10 h-10 text-blue-500" />,
          title: "Let Companies Discover You",
          description:
            "Recruiters browse your profile and reach out if they like your work.",
        },
      ].map((step, index) => (
        <div
          key={index}
          className="bg-[#1a1f2e] p-8 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-transform text-center"
        >
          <div className="flex justify-center mb-5">{step.icon}</div>
          <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
          <p className="text-gray-400">{step.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              A Straightforward Way to Find Jobs
            </h2>
            <p className="text-gray-400 mb-6">
              Browse simple job posts, swipe to apply, and connect directly with
              employers.
            </p>
            <ul className="space-y-4">
              {[
                "Swipe-style job browsing",
                "Apply with one click",
                "Posts include job description",
                "No endless forms—just show your work",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <ChevronRight className="text-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <img
            src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80"
            alt="App Preview"
            className="rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-[#121827] py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Who Can Join?
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <Globe className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Active Online Portfolio
              </h3>
              <p className="text-gray-400">
                Whether you're a designer, writer, marketer, or artist—just
                showcase your real work.
              </p>
            </div>
            <div className="bg-[#1a1f2e] p-8 rounded-xl shadow-md">
              <UserCircle className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-lg font-semibold mb-2">
                Passionate Individuals
              </h3>
              <p className="text-gray-400">
                If you're serious about opportunities and have something to
                show, you’re welcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Form */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Join the Waitlist
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { label: "Name", id: "name", type: "text", value: formData.name },
              {
                label: "Email",
                id: "email",
                type: "email",
                value: formData.email,
              },
              {
                label: "Profile/Portfolio URL",
                id: "github",
                type: "url",
                value: formData.github,
              },
            ].map(({ label, id, type, value }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1">
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
                  className="w-full px-4 py-3 bg-[#1a1f2e] text-white border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg text-lg font-semibold flex items-center justify-center gap-2"
            >
              <span>Join Waitlist</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0b0f19] border-t border-gray-800 py-12">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 text-gray-400">
          <div>
            <h3 className="text-white font-bold text-xl mb-4">gojob.today</h3>
            <p>
            Swipe. Apply. Get hired. Job hunting made refreshingly simple.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
            <Link to="/about" className="hover:text-white transition-colors">
      About
    </Link>
              {/* <li>Careers</li>
              <li>Contact</li> */}
            </ul>
          </div>
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div> */}
          {/* <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Twitter className="hover:text-white cursor-pointer" />
              <Instagram className="hover:text-white cursor-pointer" />
              <Linkedin className="hover:text-white cursor-pointer" />
              <Mail className="hover:text-white cursor-pointer" />
            </div>
          </div> */}
        </div>
        <div className="text-center text-gray-600 mt-10 pt-6 border-t border-gray-800">
          © 2025 gojob.today. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
