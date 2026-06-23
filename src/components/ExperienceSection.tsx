import { Briefcase } from "lucide-react";

interface Job {
  title: string;
  company: string;
  period: string;
  city: string;
  overview: string;
  bullets: string[];
  projects?: { name: string; description: string }[];
  departments?: string[];
}

const jobs: Job[] = [
  {
    title: "Analytics Manager",
    company: "Standard Bank | Group",
    period: "Oct 2023 – Present",
    city: "Johannesburg, South Africa",
    overview:
      "Subject matter expert on product analytics, macroeconomics and business intelligence workstreams as a technical developer behind the MIS models servicing the Group PPB Team.",
    bullets: [
      "Oversee collecting and analyzing data from various internal and external sources using fit for purpose tools and techniques.",
      "Interpret data analysis results to identify trends, patterns, and insights; create reports, dashboards and presentations for group-level stakeholders.",
      "Provide data-driven recommendations to senior management for strategic decisions driving business growth.",
      "Evaluate and refine data analytics processes and methodologies to enhance efficiency, accuracy, and relevance.",
    ],
  },
  {
    title: "Manager, Data Steward",
    company: "Standard Bank | Standard Trust Limited",
    period: "Mar 2022 – Oct 2023",
    city: "Johannesburg, South Africa",
    overview:
      "Lead as subject matter expert on all data quality initiatives, ownership, and mature information management practice.",
    bullets: [
      "Analyze and present business intelligence and recommendations to CEO and Executive Committee on organizational performance, risks and opportunities.",
      "Develop Data Models & Data Products for a variety of use cases.",
      "Support risk management initiatives to eliminate and mitigate revenue and reputational impact.",
      "Evaluate and re-engineer operations & sales processes to drive large-scale process improvement.",
      "Plan and manage quarterly PI (Programme Increment) planning for IT enhancements.",
      "Assemble and manage cross-functional teams to delineate and out-engineer data quality issues through root-cause analyses.",
    ],
  },
  {
    title: "Senior Dashboard Analyst: Intelligent Automation Data & Metrics",
    company: "Standard Bank | South Africa",
    period: "Jan 2021 – Mar 2022",
    city: "Johannesburg, South Africa",
    overview:
      "Build scalable infrastructure for delivering business insights from raw data sources, optimizing data flow and collection.",
    bullets: [
      "Built scalable infrastructure to attain 110% budgetary performance utilizing business insights and analytics.",
      "Lead data and metrics work stream for automations in Credit, Card, Cash, Wealth, Regulatory & Payments to improve turnaround time by 80%.",
    ],
  },
  {
    title: "Senior Analyst: Data Sourcing & Reporting",
    company: "Standard Bank | South Africa",
    period: "Feb 2020 – Jan 2021",
    city: "Johannesburg, South Africa",
    overview:
      "Provide Group Vehicle and Asset Finance (VAF) team with insights and analytics using analytical techniques and economic data analysis.",
    bullets: [
      "Conducted macro-economic research to design models and identify levers for product uptake increase by 35% across 19 countries.",
      "Identified cross-selling opportunities resulting in ~13% drop in churn over 7 months and improved customer lifetime value.",
      "Benchmarked portfolio performance with external market data and competition to elicit business response.",
    ],
  },
  {
    title: "Graduate Trainee: Data Science & Analytics",
    company: "Standard Bank | South Africa",
    period: "Oct 2018 – Feb 2020",
    city: "Johannesburg, South Africa",
    overview:
      "Support business objectives through adoption of data tools and methodologies to provide insights for profitability, market share, and efficiency.",
    bullets: [
      "Co-developed customer retention tool offering 360 view of products subscription leveraging ML models across 5 countries with 54% improved retention.",
      "Drove adoption of Power BI, QlikView and analytics tools via trainings reaching over 500 employees.",
      "Completed Analytics Vidhya Data Science Certification (2019).",
    ],
    projects: [
      {
        name: "Customer 360 Retention App",
        description:
          "Retaining primary customers and increasing share of wallet using Power Apps, Power BI and R Studio.",
      },
      {
        name: "Instant Money Automated Reporting",
        description:
          "Self-service reporting for trends, health checks, budgeting and forecasting using Power BI and SAS.",
      },
      {
        name: "Competitor Analysis",
        description:
          "Identifying market opportunities through SWOT analysis, market share analysis and competition portfolio building.",
      },
    ],
    departments: [
      "Cards and Payments: Customer Value Management, Platform Services/Emerging Payments",
      "Group Africa Regions: Customer Insights and Analytics",
    ],
  },
  {
    title: "Management Consultant: Advisory",
    company: "PricewaterhouseCoopers (PwC) | South Africa",
    period: "Dec 2017 – Oct 2018",
    city: "Johannesburg, South Africa",
    overview:
      "Consulted across finance and technology scope, advising on reporting and system audit standards.",
    bullets: [
      "Consulted across industries within finance and technology, advising on reporting and system audit standards.",
      "Successfully co-customized, tested and deployed Workday as HR tool within PwC South Africa.",
    ],
    projects: [
      {
        name: "Adcorp Holdings",
        description:
          "Restructuring reporting for management account structures using Microsoft Visio, Excel, Finnivo and Power BI.",
      },
      {
        name: "PwC Workday Implementation",
        description:
          "Implementation and testing of Workday HRMS using Workday and Microsoft Excel.",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center font-serif">
          Work Experience
        </h2>

        <div className="space-y-8">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="flex flex-wrap justify-between gap-3 mb-2">
                <div>
                  <h3 className="text-lg font-semibold text-foreground font-sans">
                    {job.title}
                  </h3>
                  <p className="text-sm text-lilac font-medium">
                    {job.company}
                  </p>
                </div>

                {/* Removed bubble styling */}
                <span className="text-sm text-muted-foreground font-normal">
                  {job.period}
                </span>
              </div>

              <p className="text-xs text-muted-foreground mb-3">
                {job.city}
              </p>

              <p className="text-sm text-muted-foreground italic mb-4">
                {job.overview}
              </p>

              {/* Bullets */}
              <ul className="space-y-2">
                {job.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-lilac">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Projects */}
              {job.projects && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Key Projects
                  </p>

                  {job.projects.map((p, i) => (
                    <p key={i} className="text-xs text-muted-foreground mb-1">
                      <span className="font-medium text-foreground">
                        {p.name}:
                      </span>{" "}
                      {p.description}
                    </p>
                  ))}
                </div>
              )}

              {/* Departments */}
              {job.departments && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    Departments
                  </p>

                  {job.departments.map((d, i) => (
                    <p key={i} className="text-xs text-muted-foreground">
                      • {d}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;