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
                  <div className="relative">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-400/30 to-gray-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-300 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <item.icon className="w-5 h-5 text-gray-700 group-hover:text-gray-900 transition-colors duration-300" />
                    </div>
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
  className="w-full h-[700px] md:h-[500px] object-cover rounded-2xl shadow-lg"
/>

           
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

             <div className="text-muted-foreground leading-relaxed">
              <p>
               I am a Data Science, Business Intelligence, Analytics, and Insights professional 
               with approximately seven years of experience across management consulting and 
               financial services. Throughout my career, I have leveraged data-driven insights
               to support strategic decision-making, drive business growth, and improve operational
               performance.

              </p>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
               I have successfully led projects involving the implementation of enterprise systems,
               product growth initiatives, intelligent automation (RPA), data aggregation,
               and data governance. By leveraging analytics, business intelligence, and
               machine learning insights, I have helped improve customer experience, enhance profitability,
               optimize business processes, and drive operational efficiency.

              </p>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
                My unorthodox approach to problem-solving enables me to develop innovative and practical
               solutions to complex challenges. I am highly goal-oriented, thrive in dynamic environments,
               and consistently hold myself to high standards of excellence, ensuring that my work reflects both quality and professionalism.

              </p>
            </div>

            <div className="text-muted-foreground leading-relaxed">
              <p>
                I thrive in fast-paced, team-oriented environments and am
                proactive, forward-thinking, and detail-oriented. My communication
                and problem-solving skills have been key strengths throughout my career.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;