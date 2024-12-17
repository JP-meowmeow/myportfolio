import React from "react";
import { useState } from "react";

function History() {
  const [experience, setExperience] = useState("Study");
  const [studyActive, setStudyActive] = useState(true);
  const [workActive,setWorkActive] = useState(false);
  const hdlClick = (status) => {
    setExperience(status);
    setStudyActive(true);
    setWorkActive(false);
  };
  const hdlWorkClick =(status)=>{
    setExperience(status);
    setWorkActive(true);
    setStudyActive(false);
  }

  return (

    <div className="w-full bg-gray-100/50 text-black ">
      <section id="experience" className="py-10 mx-auto">
        <h2 className="text-5xl md:text-5xl font-bold text-center  text-black text-shadow-sm">
          Experience
        </h2>
        <div className="flex overflow-hidden px-10 justify-around items-center min-h-[700px]">
          <div className="flex flex-col w-1/3 gap-5 justify-end items-end">
            {
                studyActive == true 
                ?<button
                id="Study"
                className="btn btn-lg font-bold  w-1/2 bg-gradient-to-r from-blue-500  to-green-500 tracking-widest hover:text-white text-black/70"
                onClick={() => {
                  hdlClick("Study");
                }}
              >
                Study Experience
              </button>
                :<button
                id="Study"
                className="btn btn-lg w-1/2 hover:text-blue-500"
                onClick={() => {
                  hdlClick("Study");
                }}
              >
                Study Experience
              </button>
            }

            {
                workActive == true
                ?<button
                id="Work"
                className="btn btn-lg font-bold  w-1/2 bg-gradient-to-r from-blue-500  to-green-500 tracking-widest hover:text-white text-black/70"
                onClick={() => {
                  hdlWorkClick("Work");
                }}
              >
                Work Experience
              </button>
                :<button
                id="Work"
                className="btn btn-lg w-1/2 hover:text-blue-500"
                onClick={() => {
                  hdlWorkClick("Work");
                }}
              >
                Work Experience
              </button>
            }

           
          </div>
          <div className=" w-[1000px]">
            {experience == "Study" ? (
              <div className="flex flex-col gap-3">
                {/* 1st card */}
                <div className="p-5 rounded-md">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C560BAQFzqgedOoX_rg/company-logo_200_200/company-logo_200_200/0/1630644648038?e=1742428800&v=beta&t=OAH5Md5dxdbfIrbJXQkCdGndOYLPSy8j4mSJmC4EN6g"
                      alt=""
                      className="w-[150px] "
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">
                        SOFTWARE PARK THAILAND CODE CAMP{" "}
                      </p>
                      <p>Period Aug 2024 - Nov 2024</p>
                      <p>・Certificate in Full-Stack Developer</p>
                      <p>
                        ・Intensive program focusing on JavaScript (React,
                        Node.js, Prisma, Tailwind, etc.)
                      </p>
                    </div>
                  </div>
                </div>
                            {/*  2nd card */}
                            <div className="p-5 rounded-md">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Hokkaido_University_logo%2C_4.svg/640px-Hokkaido_University_logo%2C_4.svg.png"
                      alt=""
                      className="w-[150px]"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">HOKKAIDO UNIVERSITY </p>
                      <p>Period NOV 2021 - FEB 2022</p>
                      <p>
                        ・Short Term Japanese -English Course Program
                      </p>
                      
                    </div>
                  </div>
                </div>
                {/* 3rd card */}
                <div className="p-5 rounded-md">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Emblem_of_Thammasat_University.svg/512px-Emblem_of_Thammasat_University.svg.png?20181120082302"
                      alt=""
                      className="w-[150px]"
                    />
                    <div className="flex flex-col">
                      <p className="text-lg font-bold">THAMMASAT UNIVERSITY </p>
                      <p>Period Aug 2017 - Nov 2021</p>
                      <p>・GPA 3.44 (2nd Class Honors)</p>
                      <p>
                        ・Liberal Arts, Major in Japanese, Minor in Mass
                        Journalism{" "}
                      </p>
                      <p>・Vice president of the Thammasat board game club</p>
                      <p>
                        ・Thammasat's checker player in University Games of
                        Thailand
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
                <div className="flex flex-col gap-3">
                    {/* 1st card */}
                    <div className="p-5 rounded-md">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kyocera_logo.svg/640px-Kyocera_logo.svg.png"
                      alt=""
                      className="w-[150px] "
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold">
                      KYOCERA THAILAND CO. LTD LAMPHUN{" "}
                      </p>
                      <p>Period  APR 2022 - APR 2023</p>
                      <p>JAPANESE INTERPRETER | QA DEPARTMENT</p>
                      <p>・Interpreted and translated communication between Thai and Japanese staff.</p>
                      <p>
                        ・Interpreted training class.
                      </p>
                      <p>
                        ・Translate reports about defect in process, specification documents and working instruction documents.
                      </p>
                      <p>
                        ・Backup and maintenance process data server.
                      </p>
                    </div>
                  </div>
                </div>
                    {/* 2nd card */}
                    <div className="p-5 rounded-md">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://www.delta-dpd.com/wp-content/uploads/2021/04/Logo.svg"
                      alt=""
                      className="w-[150px] "
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-lg font-bold">
                      DELTA PARTS AND DIES COMPANY LIMITED{" "}
                      </p>
                      <p>Period  APR 2022 - APR 2023</p>
                      <p>JAPANESE INTERPRETER | QA DEPARTMENT</p>
                      <p>・Interpreted and translated communication between Thai and Japanese staff.</p>
                      <p>
                        ・Writing and translate report about defect in process.
                      </p>
                    </div>
                  </div>
                </div>
                    </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default History;
