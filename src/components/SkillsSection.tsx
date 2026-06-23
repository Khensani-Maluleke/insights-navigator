import { useState } from "react";
import {
  BarChart3,
  Database,
  FileSpreadsheet,
  Brain,
  Code,
  Settings,
  LineChart,
  Cpu,
  Globe,
  Presentation,
  GitBranch,
  Layers,
  Users,
  BookOpen,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

/* ---------------- SKILLS DATA ---------------- */

// ROW 1 — Microsoft Office Suite
const officeSkills = [
  { name: "Microsoft Word", icon: FileSpreadsheet },
  { name: "Microsoft Excel", icon: FileSpreadsheet },
  { name: "Advanced Excel (VBA)", icon: FileSpreadsheet },
  { name: "Microsoft PowerPoint", icon: Presentation },
  { name: "Microsoft Access", icon: Database },
  { name: "Microsoft Visio", icon: GitBranch },
  { name: "Microsoft Power Platform", icon: Settings },
];

// ROW 2 — Databases & Query Languages
const databaseSkills = [
  { name: "SQL (MySQL)", icon: Database },
  { name: "Advanced SQL", icon: Database },
  { name: "Oracle Database", icon: Database },
  { name: "Teradata", icon: Database },
  { name: "SAS", icon: BookOpen },
  { name: "Microsoft Access", icon: Database },
  { name: "Eclipse RCP / CSS", icon: Layers },
];

// ROW 3 — BI & Analytics Tools
const biSkills = [
  { name: "Power BI", icon: BarChart3 },
  { name: "Power Apps", icon: Settings },
  { name: "Power Automate", icon: Settings },
  { name: "QlikView 11", icon: BarChart3 },
  { name: "Tableau", icon: LineChart },
  { name: "Python", icon: Brain },
  { name: "R Programming", icon: LineChart },
];

// ROW 4 — Programming Languages
const programmingSkills = [
  { name: "JavaScript", icon: Code },
  { name: "HTML5 / CSS", icon: Globe },
  { name: "Visual Basic (VBA)", icon: Code },
  { name: "Visual Studio VB", icon: Code },
  { name: "Java", icon: Cpu },
  { name: "C / C++ / C#", icon: Cpu },
  { name: "Code::Blocks", icon: Code },
];

// ROW 5 — Platforms & CRM
const platformSkills = [
  { name: "Salesforce Administration", icon: Users },
  { name: "Salesforce Business Analyst", icon: Users },
  { name: "Object-Oriented Programming", icon: Layers },
  { name: "Power Platform", icon: Settings },
  { name: "Eclipse RCP", icon: Layers },
  { name: "Control System Studio", icon: Settings },
  { name: "Visual Studio", icon: Code },
];

/* ---------------- COMPONENT ---------------- */
const SkillsSection = () => {
  const [showMore, setShowMore] = useState(false);

  const SkillCard = ({ skill }: { skill: any }) => {
    const Icon = skill.icon;
    return (
      <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 min-w-fit">
        <Icon size={22} className="shrink-0" />
        <span className="whitespace-nowrap font-medium">{skill.name}</span>
      </div>
    );
  };

  const visibleRows = [
    { skills: officeSkills, direction: "animate-marquee" },
    { skills: databaseSkills, direction: "animate-marquee-reverse" },
  ];

  const hiddenRows = [
    { skills: biSkills, direction: "animate-marquee" },
    { skills: programmingSkills, direction: "animate-marquee-reverse" },
    { skills: platformSkills, direction: "animate-marquee" },
  ];

  return (
    <section id="skills" className="mt-24">
      {/* TITLE */}
      <h3 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">
        Digital Skills
      </h3>

      {/* ALWAYS VISIBLE — rows 1 & 2 */}
      <div className="flex flex-col gap-6">
        {visibleRows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`flex gap-4 min-w-max ${row.direction}`}>
              {[...row.skills, ...row.skills].map((skill, index) => (
                <SkillCard key={`visible-${rowIndex}-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* EXPANDABLE — rows 3–5 */}
      <div
        className={`flex flex-col gap-6 overflow-hidden transition-all duration-700 ease-in-out ${
          showMore ? "max-h-[600px] opacity-100 mt-6" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {hiddenRows.map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`flex gap-4 min-w-max ${row.direction}`}>
              {[...row.skills, ...row.skills].map((skill, index) => (
                <SkillCard key={`hidden-${rowIndex}-${index}`} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* TOGGLE BUTTON */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className="flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card/80 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 font-medium text-sm"
        >
          {showMore ? (
            <>
              See Less <ChevronUp size={16} />
            </>
          ) : (
            <>
              See More <ChevronDown size={16} />
            </>
          )}
        </button>
      </div>
    </section>
  );
};

export default SkillsSection;