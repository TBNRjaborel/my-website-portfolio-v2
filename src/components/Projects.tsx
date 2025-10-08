"use client";

import projects from "@/data/projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Code, Eye } from "lucide-react";

function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Work
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            My Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate my skills and passion for development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/50 overflow-hidden h-full">
              <CardContent className="p-0 h-full flex flex-col">
                {/* Project Header */}
                <div className="p-6 pb-4 flex-grow">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {project.github && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-primary/10 cursor-pointer"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      )}
                      {project.live && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 hover:bg-primary/10 cursor-pointer"
                          onClick={() => window.open(project.live, "_blank")}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Code className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground">Tech Stack</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons - Always at bottom */}
                <div className="px-6 pb-6 flex gap-2 mt-auto">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn cursor-pointer"
                      onClick={() => window.open(project.github, "_blank")}
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                      Code
                    </Button>
                  )}
                  {project.live && (
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 group/btn cursor-pointer"
                      onClick={() => window.open(project.live, "_blank")}
                    >
                      <Eye className="h-4 w-4 mr-2 group-hover/btn:animate-pulse" />
                      Live Demo
                    </Button>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="glass max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
              <p className="text-muted-foreground mb-6">
                I'm always working on new projects and exploring innovative solutions. 
                Let's discuss how we can collaborate on your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="group cursor-pointer">
                  <Github className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View All Projects
                </Button>
                <Button variant="outline" size="lg" className="cursor-pointer">
                  Get In Touch
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
