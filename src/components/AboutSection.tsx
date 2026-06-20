import { User, Calendar, MapPin, Flag } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-12 text-center">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          {[
            { icon: Flag, label: "Nationality", value: "South African" },
            { icon: Calendar, label: "Date of Birth", value: "12 Dec 1994" },
            { icon: User, label: "Gender", value: "Female" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-card rounded-xl p-4 shadow-sm border border-border">
              <div className="p-2 rounded-lg bg-lilac-light">
                <item.icon className="w-5 h-5 text-lilac" />
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
            banking sector for South Africa and other African regions.  </p>
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
    </section>
  );
};

export default AboutSection;
