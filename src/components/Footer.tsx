import {  Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-8 border-t border-emerald-800 bg-emerald-900">
    <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Tshilidzi Mphadzha. All rights reserved.
      </p>

      <div className="flex items-center gap-4">
        {[
          {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/tshilidzi-mphadzha-759079129/",
            label: "LinkedIn",
          },
        
          {
            icon: Mail,
            href: "mailto:tshilidzimphadzha@gmail.com",
            label: "Email",
          },
        ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;