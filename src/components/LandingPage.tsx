"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

function LandingPage() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <Badge variant="outline" className="w-fit mx-auto lg:mx-0">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Available for opportunities
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Hello, I'm</span>
                <br />
                <span className="text-white">Gabriel Magdugo</span>
              </h1>

              <div className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                <Typewriter
                  words={[
                    "Software Developer",
                    "Facebook Ads Specialist",
                    "UI/UX Enthusiast",
                    "Problem Solver",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </div>
            </div>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Passionate about creating innovative digital solutions that make a
              difference. I specialize in modern web technologies and love
              turning complex problems into simple, beautiful, and intuitive
              solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group cursor-pointer"
                onClick={() =>
                  window.open("/MAGDUGO_RESUME_2025.pdf", "_blank")
                }
              >
                <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="cursor-pointer"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                View My Work
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 pt-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 cursor-pointer"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 cursor-pointer"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10 cursor-pointer"
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-full blur-3xl scale-110"></div>

              {/* Profile image container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-300 rounded-full p-1">
                  <div className="w-full h-full bg-background rounded-full p-2">
                    <Image
                      src="/images/profile-square.jpg"
                      alt="Gabriel Magdugo - Software Developer"
                      fill
                      className="rounded-full object-cover float hover:scale-105 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gray-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground cursor-pointer"
          >
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
