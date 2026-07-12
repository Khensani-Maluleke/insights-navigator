import { ArrowDown, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

import profileImg from "@/assets/tshilidzi_profile.jpeg";

/* ---------------- STATS ---------------- */

export const STATS = [
  { value: "7+", label: "Years in Data & BI" },
  { value: "6+", label: "Professional Roles" },
  { value: "5+", label: "Projects" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 scroll-mt-28 bg-emerald-900"
    >
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 max-w-6xl mx-auto">

        {/* Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-50 border border-emerald-300/30 animate-fade-up">
          Data Science • Business Intelligence • Analytics • Insights Professional
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-up">
          <span className="block">Hi, I am</span>
          <span className="block">Tshilidzi Mphadzha</span>
        </h1>

        {/* Profile Image */}
        <div className="mt-8 flex justify-center animate-fade-up">
          <img
            src={profileImg}
            alt="Tshilidzi Mphadzha"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full border-8 border-white/80 object-cover shadow-2xl"
          />
        </div>

        {/* Description */}
        <p className="mt-8 text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed animate-fade-up">
          I am a Data Science, Business Intelligence, and Analytics professional
          passionate about transforming complex data into meaningful insights
          that drive strategic decision-making. I bridge the gap between data
          and business objectives, helping organizations uncover opportunities,
          optimize performance, and make informed decisions.
        </p>

        {/* Stats */}
        <div className="mt-12 w-full max-w-5xl animate-fade-up">
          <ul className="flex flex-wrap items-center justify-center gap-10 text-white/90">
            {STATS.map((stat) => (
              <li key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <span className="text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </span>
                <span className="text-sm md:text-base text-white/75">
                  {stat.label}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button
            size="lg"
            className="bg-emerald-500 text-white hover:bg-emerald-600"
            asChild
          >
            <a href="#about">About Me</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-emerald-300 text-emerald-50 hover:bg-emerald-500/10"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center justify-center gap-5 animate-fade-up">
          <a
            href="https://www.linkedin.com/in/tshilidzi-mphadzha-759079129/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-50 hover:bg-emerald-500/30 transition-all duration-300"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:tshilidzimphadzha@gmail.com"
            aria-label="Email"
            className="p-3 rounded-full bg-emerald-500/20 backdrop-blur-md text-emerald-50 hover:bg-emerald-500/30 transition-all duration-300"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll Down */}
        <a
          href="#about"
          className="mt-16 text-white/80 hover:text-white transition-colors animate-bounce"
          aria-label="Scroll to About section"
        >
          <ArrowDown size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;