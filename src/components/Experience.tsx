import experienceData from "@/data/experience";

function Experience() {
  return (
    <div id="experience">
      <div className="flex justify-center my-20">
        <h2 className="text-3xl md:text-4xl md:font-bold">Experience</h2>
      </div>
      <div>
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`flex gap-5 justify-evenly my-10 ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`}
          >
            <div className="flex w-1/2 items-center justify-center text-3xl font-bold">
              <p>
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            {/* <div className="w-[1px] bg-white"></div> */}
            <div className="flex flex-col w-1/2 text-right bg-white/10 hover:outline-2 hover:outline-white transition-colors duration-700 rounded px-4 py-2">
              <h3 className="text-2xl font-semibold">
                {exp.title} - {exp.company}
              </h3>
              <p className="mt-2 text-justify text-sm">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
