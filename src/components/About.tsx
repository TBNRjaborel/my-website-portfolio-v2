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
            <div className="hidden md:block w-1 mh-60 bg-white rounded "></div>
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
          <div className="flex flex-col md:w-3/4 items-center gap-10">
            <h1 className="text-3xl md:text-4xl md:font-bold">Tech Stack</h1>
            <ul className="grid grid-cols-5 gap-10">
              <li className="flex flex-col items-center">
                <Image
                  src="/images/next-js.png"
                  alt="nextjs-icon"
                  width={50}
                  height={50}
                  className="invert hover:scale-110 transition-transform"
                />
                <p className="text-center">Next.js</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/react.png"
                  alt="react-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">React.js</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/vite.png"
                  alt="vite-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">Vite</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/HTML5.png"
                  alt="html-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">HTML</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/tailwind.png"
                  alt="tailwind-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">Tailwind CSS</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/Javascript.png"
                  alt="javascript-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">Javascript</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/Typescript.png"
                  alt="typescript-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">Typescript</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/MySQL.png"
                  alt="mysql-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">MySQL</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/Git.png"
                  alt="git-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">Git</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/Net core.png"
                  alt=".net-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">ASP.NET</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/c-sharp.png"
                  alt="c-sharp-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">C#</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/C.png"
                  alt="c-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">C</p>
              </li>
              <li className="flex flex-col items-center">
                <Image
                  src="/images/cpp.png"
                  alt="cpp-icon"
                  width={50}
                  height={50}
                  className="hover:scale-110 transition-transform"
                />
                <p className="text-center">C++</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
