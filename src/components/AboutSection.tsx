import { User, Calendar, Flag } from "lucide-react";
import tshilidzi2 from "../assets/tshilidzi2.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
          About Me
        </h2>

        {/* TOP INFO CARDS */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Flag, label: "Nationality", value: "South African" },
            { icon: Calendar, label: "Date of Birth", value: "12 Dec 1994" },
            { icon: User, label: "Gender", value: "Female" },
          ].map((item) => (
            <div
              key={item.label}
              className="group flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300">
                <item.icon className="w-5 h-5 text-gray-700" />
              </div>

              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium text-foreground">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <img
              src={tshilidzi2}
              alt="Profile"
              className="w-full h-[700px] md:h-[550px] object-cover rounded-2xl border-4 border-primary shadow-lg"
            />

            <div className="text-muted-foreground leading-relaxed">
              <p>
                Data Science, business intelligence, analytics & insights
                professional with ~7 years experience across management consulting
                and financial services.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            <div className="text-muted-foreground leading-relaxed">
              <p>
                Successfully led projects on implementation of enterprise systems,
                product growth, intelligent automation (RPA), data aggregation,
                and data governance. Used analytics and machine learning insights
                to improve customer experience, profitability, and operational efficiency.
              </p>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
                Tshilidzi’s unorthodox way of thinking allows her to generate
                out-of-the-box and practical solutions. She is goal-oriented,
                enjoys challenges, and consistently maintains high standards of quality.
              </p>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
                She thrives in fast-paced, team-oriented environments and is
                proactive, forward-thinking, and detail-oriented. Her communication
                and problem-solving skills have been key strengths throughout her career.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;