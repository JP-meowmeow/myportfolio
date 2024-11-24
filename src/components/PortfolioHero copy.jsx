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

const PortfolioHero = () => {
  const roles = [
    "Backend Developer",
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer"
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold">SV</div>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
    </div>
  );
};

export default PortfolioHero;