// src/pages/About.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0b0f19] text-white px-6 py-20 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>

        <h1 className="text-4xl py-2 md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
          About gojob.today
        </h1>

        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          <strong>gojob.today</strong> is reimagining how people discover jobs and how companies discover talent. We built this platform for those who want a faster, simpler, and more transparent hiring experience.
        </p>

        <p className="text-lg text-gray-400 mb-6 leading-relaxed">
          Think of it like Tinder, but for jobs—scroll through modern, swipeable job posts, and apply instantly. No fluff, no complicated forms.
        </p>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">How It Works (For Job Seekers)</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-3 mb-8">
          <li><strong>Create your profile:</strong> Add your skills, experience, and most importantly—your work. Showcase your GitHub, Behance, blog, or portfolio.</li>
          <li><strong>Discover jobs:</strong> Browse through short, visual job posts with key info like salary, role, and company.</li>
          <li><strong>Apply instantly:</strong> Found something interesting? Just swipe or click—application done in seconds.</li>
          <li><strong>Get noticed:</strong> Companies view your profile, check your work, and reach out if they like what they see.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">For Companies</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-3 mb-8">
          <li><strong>Post visual job listings:</strong> Make your job posts scroll-stopping with images and short text. No lengthy descriptions needed.</li>
          <li><strong>Get real applications:</strong> Candidates apply with profiles that highlight what they’ve actually done.</li>
          <li><strong>Swipe to shortlist:</strong> Browse candidate profiles, and swipe right to shortlist the ones who fit.</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12 mb-4">Who's it for?</h2>
        <ul className="list-disc list-inside text-gray-400 space-y-2">
          <li>Developers with GitHub or personal projects</li>
          <li>Designers with Behance, Dribbble, or Figma portfolios</li>
          <li>Writers with blogs or writing samples</li>
          <li>Marketers with campaigns or case studies</li>
          <li>Freelancers, students, and creators with work to show</li>
        </ul>

        <p className="text-lg text-gray-400 mt-8">
          Over <strong>10+ companies</strong> are already ready to hire from gojob.today. Whether you're looking for an internship or a full-time gig—this is where you start.
        </p>
      </div>
    </div>
  );
}

export default About;
