import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Code, Smartphone, Users, Database, Globe, Cpu } from "lucide-react";

function About() {
  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive web applications using cutting-edge technologies"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description: "Cross-platform mobile apps with React Native and native solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management",
      description: "Leading development teams and managing complex software projects"
    }
  ];

  const techStack = [
    { name: "Next.js", icon: "/images/next-js.png", invert: true },
    { name: "React.js", icon: "/images/react.png", invert: false },
    { name: "TypeScript", icon: "/images/TypeScript.png", invert: false },
    { name: "Tailwind CSS", icon: "/images/tailwind.png", invert: false },
    { name: "JavaScript", icon: "/images/JavaScript.png", invert: false },
    { name: "C#", icon: "/images/c-sharp.png", invert: false },
    { name: "ASP.NET", icon: "/images/NET core.png", invert: false },
    { name: "MySQL", icon: "/images/MySQL.png", invert: false },
    { name: "Supabase", icon: "/images/supabase.png", invert: false },
    { name: "Git", icon: "/images/Git.png", invert: false },
    { name: "Vite", icon: "/images/vite.png", invert: false },
    { name: "HTML5", icon: "/images/HTML5.png", invert: false },
    { name: "C++", icon: "/images/cpp.png", invert: false },
    { name: "C", icon: "/images/C.png", invert: false }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Crafting Digital Experiences
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate software developer with expertise in modern web technologies, 
            dedicated to creating innovative solutions that make a real impact.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Exposed to multiple frameworks and technologies, I am flexible in developing 
              software solutions for both web and mobile applications. I actively seek 
              opportunities in frontend, backend, UI/UX, or full-stack development, where 
              I can apply my skills and continue growing as part of an innovative team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My passion lies in creating user-centered solutions that not only meet 
              technical requirements but also provide exceptional user experiences. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Continuous Learner</Badge>
              <Badge variant="secondary">Detail Oriented</Badge>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-gray-400/10 rounded-2xl blur-3xl"></div>
            <Card className="relative glass">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center">
                    <Code className="w-12 h-12 text-black" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2">Full-Stack Developer</h4>
                  <p className="text-muted-foreground">
                    Specializing in modern web technologies and creating scalable applications
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-16" />

        {/* Tech Stack */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Tech Stack</h3>
          <p className="text-muted-foreground">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techStack.map((tech, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/50">
              <CardContent className="p-4 text-center">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    width={48}
                    height={48}
                    className={`${tech.invert ? 'invert' : ''} group-hover:scale-110 transition-transform duration-300`}
                  />
                </div>
                <p className="text-sm font-medium">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
