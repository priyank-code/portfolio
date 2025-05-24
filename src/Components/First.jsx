import React, { useContext, useEffect, useState } from "react";
import { PortfolioContext } from "../Context/Context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faCaretDown,
  faLocationDot,
  faCode,
  faEnvelope,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faXTwitter,
  faLinkedinIn,
  faMedium,
  faDev,
} from "@fortawesome/free-brands-svg-icons";
import Portfolio from "../assets/Portfolio1.png";

const First = () => {
  const { techStack, themes, setTheme, theme } = useContext(PortfolioContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const mql = window.matchMedia("(hover: hover)");
    setIsDesktop(mql.matches);

    // Listen for changes (optional)
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);

    return () => mql.removeEventListener("change", handler);
  }, []);

  return (
    <div className="flex flex-col gap-5">
      <div
        className={`flex justify-between p-8 rounded-xl shadow-xl`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div>
          <h1 className="text-xl font-medium">Theme</h1>
          <p className="text-sm">{theme.name}</p>
        </div>

        <div className="relative w-max cursor-pointer flex items-center group">
          <div
            className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-200 cursor-pointer hover:text-gray-700"
            onClick={() => {
              if (!isDesktop) setIsOpen(!isOpen);
            }}
          >
            <FontAwesomeIcon
              icon={faSliders}
              className={`transition-all ${
                isOpen ? "rotate-90" : ""
              } group-hover:rotate-90`}
            />
            <span className="text-sm font-medium">Change Theme</span>
            <FontAwesomeIcon
              icon={faCaretDown}
              className={`transition-all ${
                isOpen ? "rotate-180" : ""
              } group-hover:rotate-180`}
            />
          </div>

          <div
            className={`absolute right-0 top-10 mt-1 w-40 border rounded shadow text-sm bg-gray-200
          ${
            isDesktop
              ? "opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              : ""
          }
          ${
            !isDesktop && isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }
          `}
          >
            {themes.map((theme, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                onClick={() => {
                  setTheme(theme);
                  if (!isDesktop) setIsOpen(false);
                }}
              >
                {theme.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={`grid grid-rows-1 p-8 rounded-xl shadow-xl justify-center items-center gap-3`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div
          className="group w-34 h-34 rounded-full border-3 flex items-center justify-center mx-auto transition-transform duration-300 
             group-hover:border-transparent group-hover:scale-110"
          style={{
            borderColor: theme.ringColor,
            backgroundColor: theme.background,
          }}
        >
          <img
            src={Portfolio}
            alt="Profile Pic"
            className="rounded-full w-full h-full transition-all duration-300"
          />
        </div>

        <h2 className="text-center font-bold text-2xl">Priyank Vaghani</h2>
        <p className="font-mono justify-center text-center">
          Frontend Developer | React.js Specialist | JavaScript, REST APIs, Git
        </p>
        <button
          className="text-sm font-medium border-1 p-2 w-40 mx-auto rounded-sm"
          style={{
            backgroundColor: hovered ? theme.objectColor : "",
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <a
            href="/assets/Resume/priyank_resume.pdf"
            download="priyank_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Resume
          </a>
        </button>
      </div>

      <div
        className={`grid p-8 rounded-xl gap-3 shadow-xl`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faLocationDot} />
            Based in:
          </p>
          <p>Surat, Gujarat</p>
        </div>

        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faGithub} />
            Github:
          </p>
          <a href="https://github.com/priyank-code/">Priyank patel</a>
        </div>

        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faCode} />
            Leetcode:
          </p>
          <a href="https://leetcode.com/priyankvaghani">Priyank vaghani</a>
        </div>

        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faXTwitter} />
            X:
          </p>
          <a href="https://x.com/">X</a>
        </div>

        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faLinkedinIn} />
            LinkedIn:
          </p>
          <a href="https://linkedin.com/in/priyankvaghani">Priyank vaghani</a>
        </div>

        <div className="flex flex-row justify-between items-center text-sm">
          <p className="flex flex-row gap-2 items-center font-medium">
            <FontAwesomeIcon icon={faEnvelope} />
            Email:
          </p>
          <a href="mailto:vaghanipriyank1@gmail.com">
            vaghanipriyank1@gmail.com
          </a>
        </div>
      </div>

      <div
        className={`grid p-8 rounded-xl gap-3 shadow-xl`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div className="text-left font-bold text-xl">Tech Stack</div>
        <div className="text-sm font-medium flex flex-wrap justify-center">
          {techStack.map((item) => (
            <p
              className="border-1 rounded-l-full rounded-b-full text-center p-2 m-1 transition-all cursor-pointer"
              style={{ backgroundColor: theme.background }}
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`grid p-8 rounded-xl gap-5 shadow-xl`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div className="text-left font-bold text-xl">Experience</div>
        <div
          className="relative border-l-2 pl-6 space-y-6"
          style={{ borderColor: theme.ringColor }}
        >
          <div className="relative before:absolute before:top-1 before:-left-[30.5px] before:w-3 before:h-3 before:rounded-full before:bg-[#e6e5e5]">
            <p className=" text-sm">April 2025 - Present</p>
            <p className="font-semibold">Frontend Developer Intern</p>
            <p className="">
              <a href="https://connectgoinfoware.com" target="_blank">
                ConnectGo infoware
              </a>
            </p>
          </div>
        </div>
      </div>

      <div
        className={`grid p-8 rounded-xl gap-5 shadow-xl`}
        style={{ backgroundColor: theme.cardColor }}
      >
        <div className="text-left font-bold text-xl">Education</div>
        <div
          className="relative border-l-2 pl-6 space-y-6"
          style={{ borderColor: theme.ringColor }}
        >
          <div className="relative before:absolute before:top-1 before:-left-[30.5px] before:w-3 before:h-3 before:rounded-full before:bg-[#e6e5e5]">
            <p className=" text-sm">2022 - 2025</p>
            <p className="font-semibold ">
              Bachelor Of Computer Application (BCA)
            </p>
            <p>Shree Swaminarayan College Of Computer Science</p>
          </div>

          <div className="relative before:absolute before:top-1 before:-left-[30.5px] before:w-3 before:h-3 before:rounded-full before:bg-[#e6e5e5]">
            <p className=" text-sm">2021 - 2022</p>
            <p className="font-semibold ">HSC</p>
            <p>Vidhyadhish Vidhyasankul</p>
          </div>

          <div className="relative before:absolute before:top-1 before:-left-[30.5px] before:w-3 before:h-3 before:rounded-full before:bg-[#e6e5e5]">
            <p className=" text-sm">2019 - 2020</p>
            <p className="font-semibold">SSC</p>
            <p>Shree Swaminarayan Gurukul Vidhyalay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
