import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    type: "cert",
    title: "Salesforce Business Analyst Certified",
    institution: "Salesforce",
    date: "Dec 2022",
    detail: "Credential ID: 2774575",
    country: "South Africa",
    link: "https://sforce.co/verifycerts",
  },
  {
    type: "cert",
    title: "Salesforce Administrator Certified",
    institution: "Salesforce",
    date: "Nov 2022",
    detail: "Credential ID: 2742185",
    country: "South Africa",
    link: "https://sforce.co/verifycerts",
  },
  {
    type: "degree",
    title: "PGP: Data Science & Business Analytics",
    institution: "The University of Texas at Austin – Red McCombs School of Business",
    date: "Dec 2019 – Sep 2020",
    country: "India",
    link: "http://www.mccombs.utexas.edu/",
  },
  {
    type: "degree",
    title: "Bachelor of Sciences, Computer Science and Informatics",
    institution: "University of Johannesburg",
    date: "Dec 2012 – Dec 2017",
    country: "South Africa",
    link: "https://www.uj.ac.za/",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
          Education and Training
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((item, idx) => (
            <div key={idx} className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-lilac-light shrink-0">
                  {item.type === "cert" ? (
                    <Award className="w-6 h-6 text-lilac" />
                  ) : (
                    <GraduationCap className="w-6 h-6 text-lilac" />
                  )}
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-lilac font-medium">{item.institution}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.country}</p>
                  {item.detail && <p className="text-xs text-muted-foreground">{item.detail}</p>}
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-xs text-lilac hover:underline mt-1 inline-block">
                      Verify →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
