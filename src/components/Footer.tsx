"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/TBNRjaborel",
      label: "GitHub",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/gabriel-magdugo",
      label: "LinkedIn",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:gabriel.magdugo@example.com",
      label: "Email",
    },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-white to-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">GM</span>
              </div>
              <span className="text-xl font-bold">Gabriel Magdugo</span>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Full-stack software developer passionate about creating innovative
              digital solutions that make a real impact.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
               <a
                 href="#about"
                 className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
               >
                 About
               </a>
               <a
                 href="#experience"
                 className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
               >
                 Experience
               </a>
               <a
                 href="#projects"
                 className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
               >
                 Projects
               </a>
               <a
                 href="#contact"
                 className="block text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
               >
                 Contact
               </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                 <a
                   key={index}
                   href={social.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className="w-10 h-10 bg-muted/50 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary/10 transition-all duration-300 cursor-pointer"
                   aria-label={social.label}
                 >
                   {social.icon}
                 </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-start items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Gabriel Magdugo. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
