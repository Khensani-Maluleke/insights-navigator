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

            {/* IMAGE (same height as first paragraph) */}
            <img
              src={tshilidzi2}
              alt="Profile"
              className="w-full h-[700px] md:h-[550px] object-cover rounded-2xl border-4 border-primary shadow-lg"
            />

            {/* FIRST PARAGRAPH (directly under image) */}
           <div className="text-muted-foreground leading-relaxed">
              <p>
                Data Science, business intelligence, analytics & insights
                professional with ~7 years experience across management consulting
                and financial services.
              </p>
            </div>
          </div>

          {/* Right side - picture area */}
          <div className="lg:col-span-2">
            <div className="sticky top-24">
              <div className="relative group">
                {/* Decorative background blob */}
                <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-lilac-300/40 via-lilac-200/30 to-lilac-400/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Image frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-dashed border-lilac-300 bg-gradient-to-br from-lilac-50 to-lilac-100/50 flex flex-col items-center justify-center text-center p-8 shadow-lg">
                  <div className="w-20 h-20 rounded-full bg-lilac-200/60 flex items-center justify-center mb-4">
                    <User className="w-10 h-10 text-lilac-700" />
                  </div>
                  <p className="text-lilac-800 font-medium mb-2">Your Photo</p>
                  <p className="text-sm text-lilac-600/80 max-w-[200px]">
                    Replace this placeholder with your professional headshot
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-2xl bg-gradient-to-br from-lilac-400 to-lilac-500 -z-10" />
              </div>

              {/* Caption card */}
              <div className="mt-6 bg-card rounded-xl p-5 border border-border shadow-sm">
                <p className="text-sm text-muted-foreground italic text-center">
                  "Data tells a story — my work is to make that story actionable."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;