import { Phone, Mail, Linkedin } from "lucide-react";

const ContactSection = () => {
  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "(+27) 738189522",
      href: "tel:+27738189522",
    },
    {
      icon: Mail,
      label: "Email",
      value: "tshilidzimphadzha@gmail.com",
      href: "mailto:tshilidzimphadzha@gmail.com",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "View Profile",
      href: "https://www.linkedin.com/in/tshilidzi-mphadzha-759079129/",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-gradient mb-8">
          Get in Touch
        </h2>

        <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
          Feel free to reach out for collaborations, opportunities, or just a
          chat about data science, analytics, and business intelligence.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {contactItems.map(
            ({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label === "LinkedIn" ? "_blank" : undefined}
                rel={
                  label === "LinkedIn"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group flex items-center gap-3 p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
                  <Icon
                    size={20}
                    className="text-foreground group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <div className="text-left">
                  <p className="text-xs text-muted-foreground">
                    {label}
                  </p>
                  <p className="font-medium text-foreground text-sm">
                    {value}
                  </p>
                </div>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;