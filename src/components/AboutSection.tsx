import { User, Calendar, MapPin, Flag } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
          About Me
        </h2>
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left side - picture area */}
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

          {/* Right content - takes 3 columns */}
          <div className="lg:col-span-3 space-y-8">
            <div className="grid sm:grid-cols-3 gap-4">
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

            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Data Science, business intelligence, analytics & Insights professional with ~7 years experience across management
                consulting and financial services. Successfully lead projects on implementation of enterprise systems, product
                growth, intelligent automation (RPA), data aggregation, data governance, utilizing insights and analytics from
                deploying of machine learning models and RPA solutions to improve customer experience, bottom line earnings,
                optimize business processes as well as operational efficiency. Expert in product and macroeconomics analytics in the
                banking sector for South Africa and other African regions.
              </p>
              <p>
                Tshilidzi’s unorthodox way of thinking confirms that she can suggest a variety of ‘out-of-the-box’ and practical ideas
                when facing a problem. She is goal-oriented and enjoys challenges as they increase her appetite to learn. She
                consistently sets high standards for herself and ensures her output is of high quality and is reflective of her
                professionalism. Her personality, networking and people skills enables her to thrive in team settings and cross
                functional departments.
              </p>
              <p>
                She is also enthusiastic about working in a fast paced and team-oriented environment. With
                her willingness to always learn and grow, she has over the years developed solid competencies such as being
                proactive and forward-thinking as well as paying attention to detail. She exhibits strong communication and problem
                solving skills which has proven beneficial in her line of work. Her soft components are a great contributor to her way
                of work and cultivate a health work culture for her and her colleagues.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
