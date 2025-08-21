import Image from "next/image";

function About() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center my-20">
          <h1 className="text-3xl md:text-5xl">About Me</h1>
        </div>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row w-full justify-between">
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/web-development.png"
              alt="web-development-icon"
              width={80}
              height={80}
              className="invert hover:scale-110 transition-transform "
            />
            <p className="md:text-2xl">Web Development</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/app-development.png"
              alt="app-development-icon"
              width={80}
              height={80}
              className="invert hover:scale-110 transition-transform"
            />
            <p className="md:text-2xl">Mobile Development</p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/images/project-management.png"
              alt="project-management-icon"
              width={80}
              height={80}
              className="invert hover:scale-110 transition-transform"
            />
            <p className="md:text-2xl">Project Management</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center md:items-start mt-20 ">
          <div className="flex gap-5 md:w-1/4">
            <div className="hidden md:block w-1 mh-60 bg-white rounded"></div>
            <div>
              <p className="text-justify">
                Exposed in multiple frameworks and technologies, I am flexible
                in developing software solutions in web applications or a mobile
                application setup.
              </p>
              <br />
              <p className="text-justify">
                Actively seeking opportunities in frontend, backend, UI/UX, or
                full-stack development, where I can apply my skills and continue
                growing as part of an innovative team
              </p>
            </div>
          </div>
          <div className="flex flex-col md:w-3/4 items-center">
            <h1 className="text-3xl md:text-4xl md:font-bold">Tech Stack</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
