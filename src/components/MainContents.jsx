import { useState, useEffect } from "react";
import Footer from "./Footer";
import AnimationSkills from "./AnimationSkills";
import History from "./History";

const TypingAnimation = ({
  words,
  typingSpeed = 150,
  deleteSpeed = 75,
  pauseTime = 2000,
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(
      () => {
        const currentWord = words[wordIndex];

        if (!isDeleting) {
          setText(currentWord.substring(0, text.length + 1));

          if (text === currentWord) {
            setIsDeleting(true);
            setTimeout(() => {}, pauseTime);
          }
        } else {
          setText(currentWord.substring(0, text.length - 1));

          if (text === "") {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deleteSpeed, pauseTime]);

  return text;
};

const ScrollToSection = ({ targetId }) => {
  const scrollToElement = (e) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={`#${targetId}`}
      onClick={scrollToElement}
      className="text-black  hover:text-blue-400 text-shadow-sm"
    >
      {targetId.charAt(0).toUpperCase() + targetId.slice(1)}
    </a>
  );
};

const MainContents = () => {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Japanese Translator",
    "Full Stack Developer",
    "React Developer",
    "Contents Creator",
    "Japanese Tutor",
    "Node.js Developer",
  ];

  return (
    // BG color change
    <div className="text-white font-kanit overflow-x-hidden bg-gray-50">
      {/* Fixed Navigation */}
      {/* <nav className="fixed px-10 top-0 left-0 right-0 bg-slate-500/95 backdrop-blur-sm z-50 border-b border-slate-800"> */}
      <nav className="absolute md:px-10 -mt-20 top-0 left-0 w-full h-[200px]">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
          <div className="font-bold">
            <img
              src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1734412073/logo_wxvc0a.png"
              alt="Logo"
              className="h-[300px]"
            />
          </div>
          <div className="hidden md:flex text-xl gap-6 items-center ">
            <ScrollToSection targetId="home" />
            <ScrollToSection targetId="skills" />
            <ScrollToSection targetId="projects" />
            <ScrollToSection targetId="experience" />
            <ScrollToSection targetId="contact" />
          </div>
          <a
            href="https://drive.google.com/file/d/1TKiHvPOC_gRcuzX56H-2JGuR0sFTPVEi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 underline"
          >
            <button className="hidden md:block btn btn-md md:btn-lg  text-lg font-bold  bg-gradient-to-r from-blue-500  to-green-500 tracking-widest hover:text-black text-white">
              Resume
            </button>
          </a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className=" mt-[100px] pt-20 ">
        <div className="max-w-7xl mx-auto px-4 pt-20 py-5 sm:py-0">
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-xl md:text-xl font-bold mb-4 text-black">
                HELLO, MY NAME IS
              </h1>
              <h1 className="relative z-10 w-[350px] md:w-[800px] h-[200px] md:h-[250px] text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500  to-green-500 bg-clip-text text-transparent">
                Jirapat <br />
                Thongbenjawat
              </h1>
              <div>
              <a
            href="https://drive.google.com/file/d/1TKiHvPOC_gRcuzX56H-2JGuR0sFTPVEi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            class="text-blue-500 underline"
          >
            <button className="md:hidden absolute z-10 top-[155px] btn btn-md md:btn-lg  text-lg font-bold  bg-gradient-to-r from-blue-500  to-green-500 tracking-widest hover:text-black text-white">
              Resume
            </button>
          </a>
              </div>
              
              
              <div className="absolute -top-44 -right-[250px] h-[500px] md:hidden overflow-x-hidden ">
                <img
                  // src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732521921/Untitled_design_5_jtnxt4.png"
                  src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732548290/Untitled_design_6_txpdfu.png"
                  alt="Profile"
                  className="w-[500px] h-full object-cover"
                />
              </div>
              
              <div className="-mt-[40px] text-2xl md:text-3xl text-blue-500 font-bold mb-4">
                <span>
                  <TypingAnimation words={roles} />
                  <span className="">|</span>
                </span>
              </div>
              
              <p className="text-xl md:text-xl font-bold mb-4 text-black ">
                I'M WEB DEVELOPER, JAPANESE TRANSLATOR & TUTOR <br />
                <span className="font-noto-sans-jp">
                  ジャンパンと申します。よろしくお願いします。！
                </span>
              </p>
              <div className="logo flex gap-5 justify-center md:justify-start ">
                <a
                  href="https://www.instagram.com/sarupsaisin/"
                  target="_blank"
                >
                  <svg
                    width="54px"
                    height="56px"
                    viewBox="0 2 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint0_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint1_radial_87_7153)"
                      ></rect>{" "}
                      <rect
                        x="2"
                        y="2"
                        width="28"
                        height="28"
                        rx="6"
                        fill="url(#paint2_radial_87_7153)"
                      ></rect>{" "}
                      <path
                        d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z"
                        fill="white"
                      ></path>{" "}
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z"
                        fill="white"
                      ></path>{" "}
                      <defs>
                        {" "}
                        <radialGradient
                          id="paint0_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"
                        >
                          {" "}
                          <stop stop-color="#B13589"></stop>{" "}
                          <stop offset="0.79309" stop-color="#C62F94"></stop>{" "}
                          <stop offset="1" stop-color="#8A3AC8"></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint1_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"
                        >
                          {" "}
                          <stop stop-color="#E0E8B7"></stop>{" "}
                          <stop offset="0.444662" stop-color="#FB8A2E"></stop>{" "}
                          <stop offset="0.71474" stop-color="#E2425C"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#E2425C"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                        <radialGradient
                          id="paint2_radial_87_7153"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"
                        >
                          {" "}
                          <stop
                            offset="0.156701"
                            stop-color="#406ADC"
                          ></stop>{" "}
                          <stop offset="0.467799" stop-color="#6A45BE"></stop>{" "}
                          <stop
                            offset="1"
                            stop-color="#6A45BE"
                            stop-opacity="0"
                          ></stop>{" "}
                        </radialGradient>{" "}
                      </defs>{" "}
                    </g>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/jirapat-thongbenjawat-18a34a195/"
                  target="_blank"
                >
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 256 256"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <g fill="none">
                        {" "}
                        <path
                          d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                          fill="#069"
                        ></path>{" "}
                        <path
                          d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
                {/* GitHuB */}
                <a href="https://github.com/JP-meowmeow" target="_blank">
                  <svg
                    width="50px"
                    height="50px"
                    viewBox="0 0 73 73"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <title>
                        team-collaboration/version-control/github
                      </title>{" "}
                      <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                      <g
                        id="team-collaboration/version-control/github"
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        {" "}
                        <g
                          id="container"
                          transform="translate(2.000000, 2.000000)"
                          fill-rule="nonzero"
                        >
                          {" "}
                          <rect
                            id="mask"
                            stroke="#000000"
                            stroke-width="2"
                            fill="#000000"
                            x="-1"
                            y="-1"
                            width="71"
                            height="71"
                            rx="14"
                          >
                            {" "}
                          </rect>{" "}
                          <path
                            d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5716416,55.5036246 21.0008949,58.7507436 26.4304251,60.5527176 C27.0624378,60.6700211 27.5302994,60.5875152 27.8345016,60.3072901 C28.1388268,60.0266961 28.290805,59.6752774 28.290805,59.2545094 C28.290805,59.1842994 28.2847799,58.5526556 28.2730988,57.3588401 C28.2610487,56.1650247 28.2553926,55.1235563 28.2553926,54.2349267 L27.4479164,54.3746089 C26.9330843,54.468919 26.2836113,54.5088809 25.4994975,54.4975686 C24.7157525,54.4866252 23.9021284,54.4044881 23.0597317,54.2517722 C22.2169661,54.1004088 21.4330982,53.749359 20.7075131,53.1993604 C19.982297,52.6493618 19.4674649,51.9294329 19.1631397,51.0406804 L18.8120898,50.2328353 C18.5780976,49.6950097 18.2097104,49.0975487 17.7064365,48.4426655 C17.2031625,47.7871675 16.6942324,47.3427912 16.1794003,47.108799 L15.9336039,46.9328437 C15.7698216,46.815909 15.6178435,46.6748743 15.4773006,46.511215 C15.3368806,46.3475556 15.2317501,46.1837734 15.1615401,46.0197452 C15.0912072,45.855594 15.1494901,45.7209532 15.3370036,45.6153308 C15.5245171,45.5097084 15.8633939,45.4584343 16.3551097,45.4584343 L17.0569635,45.5633189 C17.5250709,45.6571371 18.104088,45.9373622 18.7947525,46.4057156 C19.4850481,46.8737001 20.052507,47.4821045 20.4972521,48.230683 C21.0358155,49.1905062 21.6846737,49.9218703 22.4456711,50.4251443 C23.2060537,50.9284182 23.9727072,51.1796248 24.744894,51.1796248 C25.5170807,51.1796248 26.1840139,51.121096 26.7459396,51.0046532 C27.3072505,50.8875956 27.8338868,50.7116403 28.3256025,50.477771 C28.5362325,48.9090515 29.1097164,47.7039238 30.0455624,46.8615271 C28.7116959,46.721353 27.5124702,46.5102313 26.4472706,46.2295144 C25.3826858,45.9484285 24.2825656,45.4922482 23.1476478,44.8597436 C22.0121153,44.2280998 21.0701212,43.44374 20.3214198,42.5080169 C19.5725954,41.571802 18.9580429,40.3426971 18.4786232,38.821809 C17.9989575,37.300306 17.7590632,35.5451796 17.7590632,33.5559381 C17.7590632,30.7235621 18.6837199,28.3133066 20.5326645,26.3238191 C19.6665366,24.1944035 19.7483048,21.8072644 20.778215,19.1626478 C21.4569523,18.951772 22.4635002,19.1100211 23.7973667,19.6364115 C25.1314792,20.1630477 26.1082708,20.6141868 26.7287253,20.9882301 C27.3491798,21.3621504 27.8463057,21.6790175 28.2208409,21.9360032 C30.3978419,21.3277217 32.644438,21.0235195 34.9612442,21.0235195 C37.2780503,21.0235195 39.5251383,21.3277217 41.7022622,21.9360032 L43.0362517,21.0938524 C43.9484895,20.5319267 45.0257392,20.0169716 46.2654186,19.5488642 C47.5058357,19.0810026 48.4543466,18.9521409 49.1099676,19.1630167 C50.1627483,21.8077563 50.2565666,24.1947724 49.3901927,26.324188 C51.2390143,28.3136755 52.1640399,30.7245457 52.1640399,33.556307 C52.1640399,35.5455485 51.9232849,37.3062081 51.444357,38.8393922 C50.9648143,40.3728223 50.3449746,41.6006975 49.5845919,42.5256002 C48.8233486,43.4503799 47.8753296,44.2285916 46.7404118,44.8601125 C45.6052481,45.4921252 44.504759,45.9483056 43.4401742,46.2293914 C42.3750975,46.5104772 41.1758719,46.7217219 39.8420054,46.8621419 C41.0585683,47.9149226 41.6669728,49.5767225 41.6669728,51.846804 L41.6669728,59.2535257 C41.6669728,59.6742937 41.8132948,60.0255895 42.1061847,60.3063064 C42.3987058,60.5865315 42.8606653,60.6690374 43.492678,60.5516109 C48.922946,58.7498829 53.3521992,55.5026409 56.7806837,50.810008 C60.2087994,46.117744 61.923472,40.8347817 61.923472,34.9597686 C61.9222424,30.0695396 60.7162539,25.5590099 58.3067362,21.4281798 Z"
                            id="Shape"
                            fill="#FFFFFF"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>
                  </svg>
                </a>
                {/* IG */}
                {/*  */}
                {/* <svg width="50px" height="50px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint0_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint1_radial_87_7153)"></rect> <rect x="2" y="2" width="28" height="28" rx="6" fill="url(#paint2_radial_87_7153)"></rect> <path d="M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M16 21C18.7614 21 21 18.7614 21 16C21 13.2386 18.7614 11 16 11C13.2386 11 11 13.2386 11 16C11 18.7614 13.2386 21 16 21ZM16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19Z" fill="white"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M6 15.6C6 12.2397 6 10.5595 6.65396 9.27606C7.2292 8.14708 8.14708 7.2292 9.27606 6.65396C10.5595 6 12.2397 6 15.6 6H16.4C19.7603 6 21.4405 6 22.7239 6.65396C23.8529 7.2292 24.7708 8.14708 25.346 9.27606C26 10.5595 26 12.2397 26 15.6V16.4C26 19.7603 26 21.4405 25.346 22.7239C24.7708 23.8529 23.8529 24.7708 22.7239 25.346C21.4405 26 19.7603 26 16.4 26H15.6C12.2397 26 10.5595 26 9.27606 25.346C8.14708 24.7708 7.2292 23.8529 6.65396 22.7239C6 21.4405 6 19.7603 6 16.4V15.6ZM15.6 8H16.4C18.1132 8 19.2777 8.00156 20.1779 8.0751C21.0548 8.14674 21.5032 8.27659 21.816 8.43597C22.5686 8.81947 23.1805 9.43139 23.564 10.184C23.7234 10.4968 23.8533 10.9452 23.9249 11.8221C23.9984 12.7223 24 13.8868 24 15.6V16.4C24 18.1132 23.9984 19.2777 23.9249 20.1779C23.8533 21.0548 23.7234 21.5032 23.564 21.816C23.1805 22.5686 22.5686 23.1805 21.816 23.564C21.5032 23.7234 21.0548 23.8533 20.1779 23.9249C19.2777 23.9984 18.1132 24 16.4 24H15.6C13.8868 24 12.7223 23.9984 11.8221 23.9249C10.9452 23.8533 10.4968 23.7234 10.184 23.564C9.43139 23.1805 8.81947 22.5686 8.43597 21.816C8.27659 21.5032 8.14674 21.0548 8.0751 20.1779C8.00156 19.2777 8 18.1132 8 16.4V15.6C8 13.8868 8.00156 12.7223 8.0751 11.8221C8.14674 10.9452 8.27659 10.4968 8.43597 10.184C8.81947 9.43139 9.43139 8.81947 10.184 8.43597C10.4968 8.27659 10.9452 8.14674 11.8221 8.0751C12.7223 8.00156 13.8868 8 15.6 8Z" fill="white"></path> <defs> <radialGradient id="paint0_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12 23) rotate(-55.3758) scale(25.5196)"> <stop stop-color="#B13589"></stop> <stop offset="0.79309" stop-color="#C62F94"></stop> <stop offset="1" stop-color="#8A3AC8"></stop> </radialGradient> <radialGradient id="paint1_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31) rotate(-65.1363) scale(22.5942)"> <stop stop-color="#E0E8B7"></stop> <stop offset="0.444662" stop-color="#FB8A2E"></stop> <stop offset="0.71474" stop-color="#E2425C"></stop> <stop offset="1" stop-color="#E2425C" stop-opacity="0"></stop> </radialGradient> <radialGradient id="paint2_radial_87_7153" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.500002 3) rotate(-8.1301) scale(38.8909 8.31836)"> <stop offset="0.156701" stop-color="#406ADC"></stop> <stop offset="0.467799" stop-color="#6A45BE"></stop> <stop offset="1" stop-color="#6A45BE" stop-opacity="0"></stop> </radialGradient> </defs> </g></svg> */}
              </div>
            </div>
            <div className="hidden sm:block h-[800px] overflow-hidden ">
              <img
                // src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732521921/Untitled_design_5_jtnxt4.png"
                src="https://res.cloudinary.com/dhwgh6rof/image/upload/v1732548290/Untitled_design_6_txpdfu.png"
                alt="Profile"
                className="w-[800px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="">
        <History />
      </section>
      {/* Skills Section */}
      <section id="skills" className="">
        <AnimationSkills />
      </section>

      {/* Projects Section */}
      <section id="projects" className=" w-full bg-gray-100/50 text-black ">
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
                  <strong>Backend Tools:</strong> Node.js, Express, bcryptjs,
                  jsonwebtoken, nodemailer, Prisma-ORM
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
      <Footer />
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300"
      >
        ↑
      </button>
    </div>
  );
};

export default MainContents;
