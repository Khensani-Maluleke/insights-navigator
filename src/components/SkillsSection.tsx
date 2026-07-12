import {
  BarChart3,
  Code2,
  Database,
  Cpu,
  Zap,
  Wrench,
  Globe,
  FileText,
} from "lucide-react";
export const SKILL_GROUPS = [
  {
    icon: BarChart3,
    title: "Business Intelligence & Analytics",
    items: [
      "Power BI",
      "Tableau",
      "QlikView 11 Developer",
      "Microsoft Excel",
      "Advanced Excel",
    ],
  },
  {
    icon: Code2,
    title: "Programming & Software Development",
    items: [
      "Python",
      "Java",
      "C",
      "C++",
      "C#",
      "JavaScript",
      "Object-Oriented Programming",
    ],
  },
  {
    icon: Database,
    title: "Databases & Data Warehousing",
    items: [
      "SQL",
      "Advanced SQL",
      "MySQL",
      "Oracle Database",
      "Teradata",
      "Microsoft Access",
    ],
  },
  {
    icon: Cpu,
    title: "Data Science & Statistical Computing",
    items: [
      "R Programming",
      "SAS",
    ],
  },
  {
    icon: Zap,
    title: "Automation & Low-Code",
    items: [
      "Power Platform",
      "Power Apps",
      "Power Automate",
      "Salesforce Administration",
      "Salesforce Business Analyst",
    ],
  },
  {
    icon: Wrench,
    title: "Development Tools",
    items: [
      "Visual Studio",
      "Visual Basic",
      "VBA",
      "Eclipse RCP",
      "Control System Studio",
      "Code::Blocks",
    ],
  },
  {
    icon: Globe,
    title: "Web Technologies",
    items: [
      "HTML5",
      "CSS3",
    ],
  },
  {
    icon: FileText,
    title: "Productivity Suite",
    items: [
      "Microsoft Word",
      "PowerPoint",
      "Microsoft Visio",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-emerald-900"
    >
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Digital Skills
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies, platforms and tools I use to build software,
            automate workflows and deliver business intelligence solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
              >
                {/* Icon */}
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-black text-white transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-emerald-50">
                  <Icon size={30} />
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-6">
                  {group.title}
                </h3>

                {/* Pills */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;