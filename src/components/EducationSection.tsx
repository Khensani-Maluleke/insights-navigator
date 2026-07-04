import { GraduationCap, Award, ExternalLink, MapPin, Calendar } from "lucide-react";

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
  const certs = education.filter((e) => e.type === "cert");
  const degrees = education.filter((e) => e.type === "degree");

  const DegreeCard = ({ item }: { item: (typeof education)[0] }) => (
     <div className="relative group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-lilac/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-lilac/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      <div className="shrink-0 p-2.5 rounded-xl bg-lilac-light">
        <GraduationCap className="w-5 h-5 text-lilac" />
      </div>

      <div className="flex flex-col gap-1 min-w-0">
        <h3 className="text-base md:text-lg font-serif font-semibold text-foreground leading-snug">{item.title}</h3>
        <p className="text-sm md:text-base font-medium text-lilac">{item.institution}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" /> {item.date}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" /> {item.country}
          </span>
        </div>
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-lilac hover:underline mt-2 w-fit"
          >
            Visit institution <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );

  const CertCard = ({ item }: { item: (typeof education)[0] }) => (
    <div className="relative group flex items-start gap-4 p-5 rounded-2xl bg-card border border-border hover:border-lilac/40 hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-lilac/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />

      <div className="shrink-0 p-2.5 rounded-xl bg-lilac-light">
        <Award className="w-5 h-5 text-lilac" />
      </div>

      <div className="flex flex-col gap-0.5 min-w-0">
        {/* Certified badge */}
       
        <h3 className="text-base md:text-lg font-serif font-semibold text-foreground leading-snug">{item.title}</h3>
        <p className="text-sm md:text-base font-medium text-lilac">{item.institution}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1.5">
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="w-3 h-3" /> {item.date}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="w-3 h-3" /> {item.country}
          </span>
        </div>
        {item.detail && (
          <p className="text-sm text-muted-foreground mt-1 font-mono tracking-wide">{item.detail}</p>
        )}
        {item.link && (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-lilac hover:underline mt-2 w-fit"
          >
            Verify credential <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="education" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
         
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient">
            Education &amp; Training
          </h2>
        </div>

        {/* Degrees — full width stacked */}
        <div className="mb-10">
           <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[11px] font-serif font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            DEGREES
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
          <div className="grid md:grid-cols-2 gap-4">
            {degrees.map((item, idx) => (
              <DegreeCard key={idx} item={item} />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[11px] font-serif font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            CERTIFICATES
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Certs — tighter grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {certs.map((item, idx) => (
            <CertCard key={idx} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;