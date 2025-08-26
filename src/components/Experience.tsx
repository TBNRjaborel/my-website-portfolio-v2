import experienceData from "@/data/experience";

function Experience() {
  return (
    <div id="experience">
      <div className="flex justify-center my-20">
        <h2 className="text-3xl md:text-4xl md:font-bold">Experience</h2>
      </div>
      <div className="space-y-8 md:space-y-10">
        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row gap-4 md:gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="flex w-full md:w-1/3 items-center justify-center text-xl md:text-3xl font-bold text-center md:text-left">
              <p className="">
                {exp.startDate} - {exp.endDate}
              </p>
            </div>
            <div className="flex flex-col w-full md:w-2/3 text-center md:text-left bg-white/10 hover:outline-2 hover:outline-white transition-colors duration-700 rounded-lg px-4 py-4 md:px-6 md:py-6">
              <h3 className="text-lg md:text-2xl font-semibold mb-2">
                {exp.title} - {exp.company}
              </h3>
              <p className="text-xs md:text-sm text-justify md:text-left">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
