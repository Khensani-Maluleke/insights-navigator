import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-8">
          Get in Touch
        </h2>
        <p className="text-muted-foreground mb-10">
          Feel free to reach out for collaborations, opportunities, or just a chat about data science and analytics.
        </p>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { icon: Phone, label: "Phone", value: "(+27) 738189522", href: "tel:+27738189522" },
            { icon: Mail, label: "Email", value: "tshilidzimphadzha@gmail.com", href: "mailto:tshilidzimphadzha@gmail.com" },
            { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: "https://www.linkedin.com/in/tshilidzi-mphadzha-759079129/" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.label === "LinkedIn" ? "_blank" : undefined}
              rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-3 bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md hover:border-lilac/50 transition-all group"
            >
              <div className="p-3 rounded-xl bg-lilac-light group-hover:bg-lilac/20 transition-colors">
                <item.icon className="w-6 h-6 text-lilac" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
