import React from "react";

function AnimationSkills() {
  const SkillCard = ({ name, link }) => {
    return (
      <div className="bg-white p-4 pt-12 rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-500 text-gray-800   hover:text-white transition-shadow duration-300 flex flex-col items-center gap-8">
        <div className="w-32 h-20 flex items-center justify-center">
          <img src={link} alt="" />
        </div>
        <h3 className="text-lg font-medium">{name}</h3>
      </div>
    );
  };

  const skills = [
    {
      name: "HTML",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
    },

    {
      name: "CSS",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    },
    {
      name: "JavaScript",
      link: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
    },
    {
      name: "React",
      link: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
      name: "Tailwind",
      link: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/31/tailwind.png",
    },
    {
      name: "Figma",
      link: "https://cdn.sanity.io/images/599r6htc/regionalized/46a76c802176eb17b04e12108de7e7e0f3736dc6-1024x1024.png?w=804&h=804&q=75&fit=max&auto=format",
    },
    {
      name: "Postman",
      link: "https://www.svgrepo.com/show/354202/postman-icon.svg",
    },
    {
      name: "Node.js",
      link: "https://miro.medium.com/v2/resize:fit:1000/1*TGwJKcxY8kGEenRLLedeLw.png",
    },
    {
      name: "MySQL",
      link: "https://i0.wp.com/saixiii.com/wp-content/uploads/2017/04/mysql.png?ssl=1",
    },
    {
      name: "Prisma",
      link: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    },
    {
      name: "Leaflet",
      link: "https://logowik.com/content/uploads/images/leaflet2903.logowik.com.webp ",
    },
    {
      name: "Nodemailer",
      link: "https://i0.wp.com/community.nodemailer.com/wp-content/uploads/2015/10/n2-2.png?w=422&ssl=1",
    },
    {
      name: "DaisyUI",
      link: "https://img.daisyui.com/images/daisyui-logo/daisyui-logotype.svg",
    },
    {
      name: "JOI",
      link: "https://blog.shiftasia.com/content/images/2023/06/joiTransparent.png",
    },
    {
      name: "Git",
      link: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg",
    },
  ];

  return (
    <div className="w-full ">
      <section id="skills" className="py-10">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-8  text-black text-shadow-sm">
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
  );
}

export default AnimationSkills;
