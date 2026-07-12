import {
  User,
  Calendar,
  Flag,
} from "lucide-react";

import tshilidzi2 from "../assets/tshilidzi2.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-emerald-900">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foregroundnd mb-8">
          About Me
        </h2>

        {/* INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Flag, label: "Nationality", value: "South African" },
            { icon: Calendar, label: "Date of Birth", value: "12 Dec 1994" },
            { icon: User, label: "Gender", value: "Female" },
          ].map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 bg-card rounded-xl p-4 border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400/30 to-gray-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-gray-700" />
                </div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ABOUT CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={tshilidzi2}
              alt="Tshilidzi"
              className="w-full h-auto"
            />
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">

            <p>
              I am a Data Science, Business Intelligence, Analytics & Insights
              professional with approximately 7 years of experience across
              management consulting and financial services. 
            </p>

            <p>
              I have successfully led projects on the implementation of enterprise systems, product
              growth, intelligent automation (RPA), data aggregation, and data
              governance, utilizing insights and analytics from the deployment
              of machine learning models and RPA solutions to improve customer
              experience, bottom-line earnings, optimize business processes, as
              well as operational efficiency. I am an expert in product and
              macroeconomics analytics in the banking sector for South Africa
              and other African regions.
            </p>

            <p>
              My unorthodox way of thinking enables me to suggest a variety of
              out-of-the-box and practical ideas when facing a problem. I am
              goal-oriented and enjoy challenges as they increase my appetite
              to learn. I consistently set high standards for myself and ensure
              that my output is of high quality and reflective of my
              professionalism.
            </p>

            <p>
              My personality, networking, and people skills enable me to thrive
              in team settings and cross-functional departments. I am also
              enthusiastic about working in a fast-paced and team-oriented
              environment. With my willingness to always learn and grow, I have
              over the years developed solid competencies such as being
              proactive, forward-thinking, and paying attention to detail.
            </p>

            <p>
              I exhibit strong communication and problem-solving skills, which
              have proven beneficial in my line of work. My soft skills are a
              great contributor to the way I work and help cultivate a healthy
              work culture for both myself and my colleagues.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
