import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

import profileImg from "@/assets/tshilidzi_profile.jpeg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 scroll-mt-28 bg-zinc-800"
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider uppercase rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 animate-fade-up">
          Data Science • Business Intelligence • Analytics • Insights Professional
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight animate-fade-up">
          <span className="block">Hi, I'm</span>
          <span className="block">Tshilidzi Mphadzha</span>
        </h1>

        {/* Profile Picture */}
        <div className="mt-6 flex justify-center animate-fade-up">
          <img
            src={profileImg}
            alt="Tshilidzi Mphadzha"
            className="w-40 h-40 sm:w-60 sm:h-60 rounded-full border-8 border-white/80 object-cover shadow-xl"
          />
        </div>

        {/* Description */}
        <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-up">
          I am a Data Science, Business Intelligence, and Analytics professional passionate about transforming complex
          data into meaningful insights that drive strategic decision-making. I bridge the gap between data and business objectives,
          helping organizations uncover opportunities, optimize performance, and make informed decisions.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up">
          <Button
            size="lg"
            className="bg-white text-lilac-dark hover:bg-white/90"
            asChild
          >
            <a href="#about">About Me</a>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>

        {/* Social Icons */}
        <div className="mt-10 flex items-center justify-center gap-5 animate-fade-up">
          {[
            {
              icon: Github,
              href: "https://github.com/",
              label: "GitHub",
            },
            {
              icon: Linkedin,
              href: "https://linkedin.com/",
              label: "LinkedIn",
            },
            {
              icon: Mail,
              href: "mailto:your-email@example.com",
              label: "Email",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>

        {/* Scroll Arrow */}
        <a
          href="#about"
          className="inline-block mt-16 text-white/80 hover:text-white animate-bounce"
        >
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;