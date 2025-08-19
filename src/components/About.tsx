import Image from "next/image";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center my-20">
          <h1 className="md:text-5xl">About Me</h1>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/web-development.png"
              alt="web-development-icon"
              width={80}
              height={80}
              className="invert"
            />
            <p className="md:text-2xl">Web Development</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/app-development.png"
              alt="app-development-icon"
              width={80}
              height={80}
              className="invert"
            />
            <p className="md:text-2xl">Mobile Development</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/project-management.png"
              alt="project-management-icon"
              width={80}
              height={80}
              className="invert"
            />
            <p className="md:text-2xl">Project Management</p>
          </div>
        </div>
        <div className="flex justify-between mt-20 ">
          <div className="flex gap-5 w-1/4">
            <div className="w-1 h-67 bg-white rounded"></div>
            <div>
              Exposed in multiple frameworks and technologies, I am flexible in
              developing software solutions in web applications or a mobile
              application setup. I have experience in various technologies
              pertaining Full Stack Software Development (React Native, React,
              NextJS, Supabase, Node). Whenever a new tech stack is introduced I
              believe I am capable of learning and adjusting to it.
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold">Tech Stack</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
