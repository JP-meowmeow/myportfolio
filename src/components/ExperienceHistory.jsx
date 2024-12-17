import React from 'react'

function ExperienceHistory() {
  return (
    <div className="w-full ">
    <section id="experience" className="py-20 ">
      <h2 className="text-5xl md:text-4xl font-bold text-center mb-8 text-black text-shadow-sm">
        SKILLS
      </h2>
      <div className="flex overflow-hidden whitespace-nowrap text-center py-10">
        <div className="flex gap-10 animate-scroll text-lg ">
          {skills.map((skill) => (
            <SkillCard key={skill.name} link={skill.link} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  </div>
  )
}

export default ExperienceHistory