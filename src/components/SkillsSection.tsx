import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const topSkills = [
  { name: "Microsoft Excel" },
  { name: "Power BI" },
  { name: "SQL" },
  { name: "Python" },
];

const moreSkills = [
  { name: "Microsoft Word" },
  { name: "Advanced Microsoft Excel" },
  { name: "Microsoft PowerPoint" },
  { name: "Microsoft Access" },
  { name: "Microsoft Visio" },
  { name: "Microsoft Power Platform" },
  { name: "Power Apps" },
  { name: "Power Automate" },
  { name: "Oracle Database" },
  { name: "Teradata" },
  { name: "SAS" },
  { name: "Tableau" },
  { name: "QlikView 11 Developer" },
  { name: "Salesforce Administration" },
  { name: "Salesforce Business Analyst" },
  { name: "Visual Studio" },
  { name: "Visual Basic" },
  { name: "Visual Basic for Applications (VBA)" },
  { name: "Eclipse RCP" },
  { name: "Control System Studio" },
  { name: "Code::Blocks" },
  { name: "R Programming" },
  { name: "Java" },
  { name: "C" },
  { name: "C++" },
  { name: "C#" },
  { name: "JavaScript" },
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "Object-Oriented Programming" },
];

const SkillsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const SkillCard = ({ name }: { name: string }) => (
    <div className="flex items-center justify-center p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[80px]">
      <h3 className="text-center text-sm font-medium text-foreground leading-tight">
        {name}
      </h3>
    </div>
  );

  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Floating circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-circle1 absolute w-20 h-20 bg-lilac-glow/40 rounded-full top-20 left-10"></div>
        <div className="floating-circle2 absolute w-24 h-24 bg-lilac-glow/50 rounded-full top-40 right-20"></div>
        <div className="floating-circle3 absolute w-16 h-16 bg-lilac-glow/35 rounded-full top-60 left-1/4"></div>
        <div className="floating-circle4 absolute w-20 h-20 bg-lilac-glow/45 rounded-full bottom-40 left-20"></div>
        <div className="floating-circle5 absolute w-14 h-14 bg-lilac-glow/55 rounded-full bottom-20 right-1/3"></div>
        <div className="floating-circle6 absolute w-18 h-18 bg-lilac-glow/40 rounded-full top-1/2 right-10"></div>
        <div className="floating-circle7 absolute w-16 h-16 bg-lilac-glow/50 rounded-full top-10 right-1/4"></div>
        <div className="floating-circle8 absolute w-14 h-14 bg-lilac-glow/45 rounded-full bottom-60 left-1/2"></div>
        <div className="floating-circle9 absolute w-20 h-20 bg-lilac-glow/35 rounded-full top-80 left-3/4"></div>
        <div className="floating-circle10 absolute w-16 h-16 bg-lilac-glow/55 rounded-full bottom-10 right-1/4"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-foreground">
            Digital Skills
          </h2>

          <div className="mt-4 w-16 h-1 bg-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {topSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowMore(!showMore)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
              aria-expanded={showMore}
              aria-controls="more-skills"
            >
              {showMore ? "See less" : "See more"}
              {showMore ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
          </div>

          {showMore && (
            <div
              id="more-skills"
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8 animate-fade-in"
            >
              {moreSkills.map((skill) => (
                <SkillCard key={skill.name} name={skill.name} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;