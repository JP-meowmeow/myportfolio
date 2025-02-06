import { useState, useEffect } from "react";
import Footer from "./Footer";
import Information from "./Information";
import Service from "./Service";
import MapEmbed from "./MapEmbed";
import Slideshow from "./Slideshow";
import Contacts from "./Contacts";
import NearPlace from "./NearPlace";

const TypingAnimation = ({
  words,
  typingSpeed = 150,
  deleteSpeed = 75,
  pauseTime = 1000,
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
  const roles = ["บ้านพักให้เช่า", "Home for rent"];

  return (
    // BG color change
    <div className="text-white font-kanit overflow-x-hidden bg-gray-50">
      {/* Fixed Navigation */}
      <nav className="absolute md:px-10 -mt-20 top-0 left-0 w-full h-[200px]">
        <div className="max-w-7xl mx-auto flex justify-center md:justify-between items-center">
          <div className="flex items-center font-bold">
            <img
              src="https://res.cloudinary.com/dfooq3ws5/image/upload/v1738481298/trans_bg_rgocl2.png"
              alt="Logo"
              className="h-[200px] mt-16"
            />
          </div>
          <div className="hidden md:flex text-xl gap-6 mt-10 items-center">
            <ScrollToSection targetId="home" />
            <ScrollToSection targetId="information" />
            <ScrollToSection targetId="service" />
            <ScrollToSection targetId="picture" />
            <ScrollToSection targetId="location" />
            <ScrollToSection targetId="contact us" />
          </div>
          {/* change language */}
         <div className="hidden text-black md:flex text-xl justify-center mt-10 items-center">
          <h1>EN/</h1>
          <h1>TH/</h1>
          <h1>CN</h1>
         </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className=" mt-[100px] pt-20 ">
        <div className="max-w-7xl mx-auto px-4 md:pt-20 py-5 sm:py-0">
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <div className="max-w-xl">
              <h1 className="text-center md:text-left text-xl md:text-xl font-bold mb-4 text-black">
                HELLO, Welcome to
              </h1>
              <h1 className="text-center md:text-left  relative z-10 w-[350px] md:w-[800px] md:h-[250px] text-5xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500  to-green-500 bg-clip-text text-transparent">
                SP HOUSE
              </h1>

              <div className="h-[500px] md:hidden overflow-x-hidden ">
                <img
                  src="https://www.apthai.com/images/production/UsbWh2YUeismNDXKSRZlZOm8Xynz0ITGJAreFR7B.jpg"
                  alt="Profile"
                  className="w-[500px] h-full object-cover"
                />
              </div>

              <div className="mt-10 md:-mt-[150px] text-2xl md:text-3xl text-blue-500 font-bold mb-4">
                <span>
                  <TypingAnimation words={roles} />
                  <span className="">|</span>
                </span>
              </div>

              <p className="text-xl md:text-xl font-bold mb-4 text-black ">
                Luxurious pool villa on the outskirts of Chiang Mai, not far
                away. Just around the 3rd ring road, not far from tourist
                attractions. Complete with entertainment equipment, suitable for
                relaxing with friends. Large groups accommodate up to 20 people.
              </p>
              <div className="logo flex gap-5 justify-center md:justify-start ">
                {/* facebook */}
                <svg
                  width="54px"
                  height="56px"
                  viewBox="0 0 266.895 266.895"
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
                    <path
                      d="M252.164 266.895c8.134 0 14.729-6.596 14.729-14.73V14.73c0-8.137-6.596-14.73-14.729-14.73H14.73C6.593 0 0 6.594 0 14.73v237.434c0 8.135 6.593 14.73 14.73 14.73h237.434z"
                      fill="#485a96"
                    ></path>
                    <path
                      d="M184.152 266.895V163.539h34.692l5.194-40.28h-39.887V97.542c0-11.662 3.238-19.609 19.962-19.609l21.329-.01V41.897c-3.689-.49-16.351-1.587-31.08-1.587-30.753 0-51.807 18.771-51.807 53.244v29.705h-34.781v40.28h34.781v103.355h41.597z"
                      fill="#ffffff"
                    ></path>
                  </g>
                </svg>
                {/* IG */}
                <a
                  href="#"
                  target="_blank"
                >
                  <svg
                    width="62px"
                    height="64px"
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
                {/* Line */}
                <svg
                width="54px"
                    height="56px"
                  viewBox="0 0 377.764 377.764"
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
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3ACE01"
                      d="M77.315 0h223.133c42.523 0 77.315 34.792 77.315 77.315v223.133c0 42.523-34.792 77.315-77.315 77.315H77.315C34.792 377.764 0 342.972 0 300.448V77.315C0 34.792 34.792 0 77.315 0z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#FFF"
                      d="M188.515 62.576c76.543 0 138.593 49.687 138.593 110.979 0 21.409-7.576 41.398-20.691 58.351-.649.965-1.497 2.031-2.566 3.209l-.081.088c-4.48 5.36-9.525 10.392-15.072 15.037-38.326 35.425-101.41 77.601-109.736 71.094-7.238-5.656 11.921-33.321-10.183-37.925-1.542-.177-3.08-.367-4.605-.583l-.029-.002v-.002c-64.921-9.223-114.222-54.634-114.222-109.267-.002-61.292 62.049-110.979 138.592-110.979z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      fill="#3ACE01"
                      d="M108.103 208.954h27.952c3.976 0 7.228-3.253 7.228-7.229v-.603c0-3.976-3.252-7.228-7.228-7.228h-20.121v-45.779c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.977 3.252 7.23 7.228 7.23zm173.205-33.603v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976 0 7.229-3.252 7.229-7.228v-.603c0-3.976-3.253-7.228-7.229-7.228h-27.952c-3.976 0-7.228 3.252-7.228 7.228v53.609c0 3.976 3.252 7.229 7.228 7.229h27.952c3.976 0 7.229-3.253 7.229-7.229v-.603c0-3.976-3.253-7.228-7.229-7.228h-20.12v-11.445h20.12c3.976.002 7.229-3.251 7.229-7.226zm-53.755 31.448l.002-.003a7.207 7.207 0 0 0 2.09-5.07v-53.609c0-3.976-3.252-7.228-7.229-7.228h-.603c-3.976 0-7.228 3.252-7.228 7.228v31.469l-26.126-35.042c-1.248-2.179-3.598-3.655-6.276-3.655h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.252 7.229 7.229 7.229h.603c3.976 0 7.228-3.253 7.228-7.229v-32.058l26.314 35.941c.162.252.339.494.53.724l.001.002c.723.986 1.712 1.662 2.814 2.075.847.35 1.773.544 2.742.544h.603a7.162 7.162 0 0 0 3.377-.844c.723-.344 1.332-.788 1.761-1.311zm-71.208 2.155h.603c3.976 0 7.228-3.253 7.228-7.229v-53.609c0-3.976-3.252-7.228-7.228-7.228h-.603c-3.976 0-7.229 3.252-7.229 7.228v53.609c0 3.976 3.253 7.229 7.229 7.229z"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="hidden sm:block h-[800px] overflow-hidden ">
              <img
                src="https://www.apthai.com/images/production/UsbWh2YUeismNDXKSRZlZOm8Xynz0ITGJAreFR7B.jpg"
                alt="Profile"
                className="w-[800px] h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* InformationSection */}
      <section id="information" className="">
        <Information/>
      </section>
      {/* service section */}
      <section id="service" className=""> 

      <Service/>
      </section>
      {/* Image */}
      <section id="picture"> 

      <Slideshow/>
      </section>

      {/* Projects Section */}
      <section id="location" className="md:w-1/2  mx-auto py-10 text-black ">
      <MapEmbed/>
      <NearPlace/>
      </section>
{/* contact us */}
      <section id="contact us" className=" w-1/2  mx-auto py-10 text-black ">
      <Contacts/>
      </section>

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
