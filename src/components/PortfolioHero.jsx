import React, { useState, useEffect } from 'react';



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

const PortfolioHero = () => {
  const roles = [
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer"
  ];

  return (
    <div className="bg-slate-900 text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <div className="text-2xl font-bold">SV</div>
          <div className="flex gap-6">
            <ScrollToSection targetId="home" />
            <ScrollToSection targetId="skills" />
            <ScrollToSection targetId="projects" />
            <ScrollToSection targetId="contact" />
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen pt-20">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-blue-400">
              <img
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732458198/S__36225061_hhcwgq.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Jirapat Thongbenjawat
              </h1>
              <div className="text-2xl md:text-3xl text-blue-400 font-bold mb-4">
              <TypingAnimation words={roles} />
              </div>
              <p className="text-gray-300 text-lg">
              I am a web developer specializing in React and Node.js, seeking a position
              as a Full Stack Developer. I am passionate about creating high-quality
              and impactful projects while continuously learning new technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Skills</h2>
          {/* Add your skills content here */}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
          {/* Add your projects content here */}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 py-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Contact</h2>
          {/* Add your contact content here */}
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        ↑
      </button>
    </div>
  );
};

export default PortfolioHero;