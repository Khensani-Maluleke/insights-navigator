import {
  User,
  Calendar,
  Flag,
  Database,
  BarChart3,
  FileSpreadsheet,
  FileText,
  Presentation,
  Workflow,
  Code2,
} from "lucide-react";

import { SiPython, SiSalesforce, SiR } from "react-icons/si";

import tshilidzi2 from "../assets/tshilidzi2.jpeg";

const AboutSection = () => {
  const analyticsSkills = [
    { name: "Power BI", icon: BarChart3 },
    { name: "Tableau", icon: BarChart3 },
    { name: "SQL", icon: Database },
    { name: "Oracle", icon: Database },
    { name: "Microsoft Excel", icon: FileSpreadsheet },
    { name: "Microsoft Word", icon: FileText },
    { name: "PowerPoint", icon: Presentation },
    { name: "R Programming", icon: SiR },
  ];

  const engineeringSkills = [
    { name: "Python", icon: SiPython },
    { name: "Java", icon: Code2 },
    { name: "C++", icon: Code2 },
    { name: "C#", icon: Code2 },
    { name: "Salesforce", icon: SiSalesforce },
    { name: "Power Platform", icon: Workflow },
    { name: "Power Apps", icon: Workflow },
    { name: "Power Automate", icon: Workflow },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">

        {/* HEADING */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
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
            <img src={tshilidzi2} alt="Tshilidzi" className="w-full h-auto" />
          </div>

          {/* TEXT */}
          <div className="space-y-6 text-muted-foreground leading-relaxed">

            <p>
              I am a Data Science, Business Intelligence, Analytics, and Insights professional
              with approximately seven years of experience across management consulting and
              financial services. Throughout my career, I have leveraged data-driven insights
              to support strategic decision-making, drive business growth, and improve operational performance.
            </p>

            <p>
              I have successfully led projects involving the implementation of enterprise systems,
              product growth initiatives, intelligent automation (RPA), data aggregation,
              and data governance. By leveraging analytics, business intelligence, and
              machine learning insights, I have helped improve customer experience, enhance profitability,
              optimize business processes, and drive operational efficiency.
            </p>

            <p>
              My unorthodox approach to problem-solving enables me to develop innovative and practical
              solutions to complex challenges. I am highly goal-oriented, thrive in dynamic environments,
              and consistently hold myself to high standards of excellence.
            </p>

          </div>
        </div>

        {/* DIGITAL SKILLS */}
        <div className="mt-24">

          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
            Digital Skills
          </h3>

          {/* ROW 1 */}
          <div className="overflow-hidden mb-6">
            <div className="animate-marquee flex gap-4 min-w-max">
              {[...analyticsSkills, ...analyticsSkills].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-fit"
                  >
                    <Icon size={24} className="shrink-0" />
                    <span className="whitespace-nowrap font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden">
            <div className="animate-marquee-reverse flex gap-4 min-w-max">
              {[...engineeringSkills, ...engineeringSkills].map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-fit"
                  >
                    <Icon size={24} className="shrink-0" />
                    <span className="whitespace-nowrap font-medium">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;