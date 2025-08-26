import projects from "@/data/projects";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

function Projects() {
  return (
    <div id="projects">
      <div className="flex flex-col items-center gap-2 my-20">
        <span className="text-xs uppercase tracking-widest text-white/60">Featured work</span>
        <h2 className="text-3xl md:text-4xl md:font-bold">Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
            <div className="relative h-full rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/20">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg sm:text-xl font-semibold leading-snug">{project.title}</h3>
                <div className="flex items-center gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View GitHub repository"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white/0 p-1.5 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors flex-shrink-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4 sm:h-5 sm:w-5"
                        aria-hidden
                      >
                        <path d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.866-.014-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.003.07 1.53 1.03 1.53 1.03.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.95 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.545 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.846-2.337 4.695-4.565 4.944.359.31.678.922.678 1.859 0 1.341-.012 2.421-.012 2.751 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.486 17.523 2 12 2z" />
                      </svg>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live site in new tab"
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-white/0 p-1.5 text-white/80 hover:text-white hover:border-white/20 hover:bg-white/10 transition-colors flex-shrink-0"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-white/80 text-justify">{project.description}</p>
              <div className="mt-5">
                <h4 className="text-xs uppercase tracking-wider text-white/60">Tech Stack</h4>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {project.stack.map((tech, techIndex) => (
                    <li
                      key={techIndex}
                      className="rounded-full border border-white/10 bg-white/10 px-2 py-1 text-xs text-white/90 transition-colors duration-200 group-hover:border-white/20"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
