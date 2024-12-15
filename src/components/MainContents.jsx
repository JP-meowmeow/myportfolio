import {useState,useEffect} from 'react'
import Skills from './Skills';
import Footer from './Footer';

const TypingAnimation = ({ words, typingSpeed = 150, deleteSpeed = 75, pauseTime = 2000 }) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        const currentWord = words[wordIndex];
        
        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));
          
          if (text === currentWord) {
            setIsDeleting(true);
            setTimeout(() => {}, pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));
          
          if (text === '') {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      }, isDeleting ? deleteSpeed : typingSpeed);
  
      return () => clearTimeout(timer);
    }, [text, wordIndex, isDeleting, words, typingSpeed, deleteSpeed, pauseTime]);
  
    return text;
  };
  
const ScrollToSection = ({ targetId }) => {
  const scrollToElement = (e) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a href={`#${targetId}`} onClick={scrollToElement} className="hover:text-blue-400">
      {targetId.charAt(0).toUpperCase() + targetId.slice(1)}
    </a>
  );
};

const MainContents = () => {
  const roles = [
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer"
  ];

  return (
    // BG color change
    <div className="text-white font-kanit overflow-x-hidden"> 
      {/* Fixed Navigation */}
      <nav className="fixed px-10 top-0 left-0 right-0 bg-slate-500/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold"><a href="/"></a><img src="https://www.svgrepo.com/show/364387/club-fill.svg" alt="" className='h-[50px]'/></div>
          <div className="flex gap-6">
            <ScrollToSection targetId="home" />
            <ScrollToSection targetId="skills" />
            <ScrollToSection targetId="projects" />
            {/* <ScrollToSection targetId="contact" /> */}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="  pt-20">
        <div className="max-w-6xl mx-auto px-4 pt-20 py-5 sm:py-0">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-[500px] h-[500px] overflow-hidden ">
              <img
                // src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732521921/Untitled_design_5_jtnxt4.png"
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732548290/Untitled_design_6_txpdfu.png"
                alt="Profile"
                className="w-[500px] h-full object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Jirapat Thongbenjawat
              </h1>
              <div className="text-2xl md:text-3xl text-blue-500 font-bold mb-4">
              <TypingAnimation words={roles} />
              </div>
              <p className="text-gray-500 text-lg">
              I am a web developer specializing in React and Node.js, seeking a position
              as a Front-End Developer, Back-End Developer and Full Stack Developer. I am passionate about creating high-quality
              and impactful projects while continuously learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Skills Section */}
      <section id="skills" className="min-h-screen ">
        {/* <div className="max-w-6xl mx-auto px-4 py-20"> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2> */}

        <Skills/>
        {/* </div> */}
      </section>

     {/* Projects Section */}
<section id="projects" className=" bg-gray-50">
  <div className="max-w-6xl mx-auto px-4 py-20">
    <h2 className="text-5xl md:text-4xl font-bold text-center mb-8 text-black">
      PROJECTS
    </h2>
    <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl text-gray-800 flex flex-col items-center gap-8 mt-8">
      {/* Video Container */}
      <div className="w-full sm:w-[400px] md:w-[600px] h-[200px] sm:h-[250px] md:h-[315px]">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/8JQO5Tn4GMA?si=7G2S79dOKwHqGz_b"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      {/* Project Details */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl text-black">
            Sarupsaisin Project: Japanese Online Course
          </h1>
          <p className="text-sm sm:text-base">
            <strong>Frontend Tools:</strong> React, Tailwind, DaisyUI
          </p>
          <p className="text-sm sm:text-base">
            <strong>Backend Tools:</strong> Node.js, Express, bcryptjs, jsonwebtoken, nodemailer, Prisma-ORM
          </p>
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <a
            href="https://sarupsaisin-web.onrender.com/"
            className="btn btn-sm sm:btn-sm md:btn-md w-full sm:w-3/4 text-white bg-[#F3747F] text-center py-2 rounded-lg hover:bg-[#e0636e]"
          >
           Visit Sarupsaisin สรุปสายศิลป์
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Contact Section */}
      {/* <section id="contact" className="min-h-screen bg-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-black">CONTACT</h2>

        </div>
      </section> */}

      {/* Scroll to Top Button */}
      <Footer/>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        ↑
      </button>
    </div>
  );
};

export default MainContents