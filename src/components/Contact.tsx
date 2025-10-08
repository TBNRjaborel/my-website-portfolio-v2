"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  Facebook,
} from "lucide-react";

function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "magdugogabriel@gmail.com",
      href: "mailto:gabriel.magdugo@example.com",
    },

    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Cebu, Philippines",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/TBNRjaborel",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/gabriel-magdugo",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      label: "Twitter",
      href: "https://www.facebook.com/gabriel.paul.75470/",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always excited to take on new challenges and collaborate on
            innovative projects. Let's discuss how we can bring your ideas to
            life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50"
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">
                            {info.label}
                          </p>
                          <a
                            href={info.href}
                            className="text-foreground hover:text-primary transition-colors cursor-pointer"
                          >
                            {info.value}
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="icon"
                      className="hover:bg-primary/10 hover:border-primary/50 cursor-pointer"
                      onClick={() => window.open(social.href, "_blank")}
                    >
                      {social.icon}
                    </Button>
                  ))}
              </div>
            </div>

            {/* Availability Status */}
            <Card className="glass">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <h4 className="text-lg font-semibold">Currently Available</h4>
                </div>
                <p className="text-muted-foreground mb-4">
                  I'm actively looking for new opportunities and exciting
                  projects to work on. Feel free to reach out!
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Open to work</Badge>
                  <Badge variant="secondary">Remote friendly</Badge>
                  <Badge variant="secondary">Freelance available</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form - Under Construction */}
          <div>
            <Card className="glass">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Contact Form</h3>
                  <Badge variant="outline" className="mb-6">
                    🚧 Under Construction
                  </Badge>
                  <p className="text-muted-foreground mb-6">
                    I'm currently working on setting up the contact form functionality. 
                    In the meantime, feel free to reach out to me directly via email or social media!
                  </p>
                  <div className="space-y-3">
                    <Button 
                      variant="outline" 
                      className="w-full cursor-pointer"
                      onClick={() => window.open("mailto:magdugogabriel@gmail.com", "_blank")}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email Directly
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      Or use the social links on the left to connect with me
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
