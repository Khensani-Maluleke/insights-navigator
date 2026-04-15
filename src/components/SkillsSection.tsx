const skillCategories = [
  {
    category: "Data & Analytics",
    skills: ["Power BI", "QlikView", "Tableau", "SAS", "SQL / MySQL", "Oracle", "Teradata"],
  },
  {
    category: "Programming",
    skills: ["Python", "R", "Java", "C / C++ / C#", "HTML5 / CSS / JavaScript", "Visual Basic", "Object-Oriented Programming"],
  },
  {
    category: "Microsoft Suite",
    skills: ["Excel (Advanced + VBA)", "Power Apps", "Power Automate", "PowerPoint", "Word", "Access", "MS Visio"],
  },
  {
    category: "Platforms & Tools",
    skills: ["Salesforce Administration", "Salesforce Business Analyst", "Microsoft Power Platform", "Visual Studio", "Eclipse RCP", "Code::Blocks"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
          Digital Skills
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <h3 className="font-serif font-semibold text-foreground mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="text-sm px-3 py-1.5 rounded-full bg-lilac-light text-lilac-dark font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
