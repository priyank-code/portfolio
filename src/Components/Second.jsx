import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faPhp, faReact } from "@fortawesome/free-brands-svg-icons";
import { PortfolioContext } from "../Context/Context";

const Second = () => {

  const { themes, setTheme, theme } = useContext(PortfolioContext);
  
  return (
    <div className=" lg:col-span-2">
      <div className="md:p-8 p-4 rounded-xl gap-5 shadow-xl" style={{ backgroundColor: theme.objectColor }}>
        <div className="flex justify-between mb-5">
          <h1 className="text-xl font-medium">Github Projects</h1>
          <a
            href="https://github.com/priyank-code"
            target="_blank"
            className="border-b text-sm"
          >
            See All
          </a>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a
              href="https://github.com/priyank-code/React-store"
              target="_blank"
            >
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">E-Commerce Store</span>
              </p>
            </a>
            <p className="text-sm py-3">
              🚀 E-Commerce website Built in React js and Tailwindcss with add
              to cart functionality and it store in local storage.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>257</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>1420</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f1e05a]"></span>
                  <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a href="https://github.com/priyank-code/chat-app" target="_blank">
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">Chat-app</span>
              </p>
            </a>
            <p className="text-sm py-3">
              A real-time messaging app built with React.js and integrated with
              the Gemini API for intelligent, dynamic conversations.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>124</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>541</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f1e05a]"></span>
                  <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a
              href="https://github.com/priyank-code/Movie-Search"
              target="_blank"
            >
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">Movie-Search</span>
              </p>
            </a>
            <p className="text-sm py-3">
              A simple React-based web application to search and display movies
              using the OMDb API.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>414</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>651</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f1e05a]"></span>
                  <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a
              href="https://github.com/priyank-code/portfolio"
              target="_blank"
            >
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">My Portfolio</span>
              </p>
            </a>
            <p className="text-sm py-3">
              🚀 My portfolio Built in React js and Tailwindcss with Multiple Theme selection functionality.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>1850</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>3451</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#f1e05a]"></span>
                  <p>Javascript</p>
                </div>
              </div>
            </div>
          </div>


          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a
              href="https://github.com/priyank-code/itsmysociety"
              target="_blank"
            >
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">Its-my-society</span>
              </p>
            </a>
            <p className="text-sm py-3">
              A "Online Society Management System" Developed a web-based
              platform that helps residential societies.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>950</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>321</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#4f5d95]"></span>
                  <p>PHP</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <a
              href="https://github.com/priyank-code/shoe_company"
              target="_blank"
            >
              <p className="flex flex-row gap-3 items-center">
                <FontAwesomeIcon icon={faLink} />
                <span className="font-medium">Shoes-Site</span>
              </p>
            </a>
            <p className="text-sm py-3">
              A Website of Shoes company in Html, Javascript and Tailwindcss for
              CSS.
            </p>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-5">
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faStar} />
                  <span>5</span>
                </p>
                <p className="text-sm flex flex-row gap-1 items-center">
                  <FontAwesomeIcon icon={faCodeBranch} />
                  <span>14</span>
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#663399]"></span>
                  <p>CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:p-8 p-4 rounded-xl gap-5 mt-5 shadow-xl" style={{ backgroundColor: theme.objectColor }}>
        <h1 className="text-xl font-medium mb-5">My Projects</h1>
        <div className="grid grid-cols-1 gap-5">
          <div className=" p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <p className="font-medium flex gap-3 items-center"><FontAwesomeIcon icon={faReact} /><span>E-Commerce</span></p>
            <p className="p-2">E-Commerce Website built with React and styled using TailwindCSS. This website allows users to browse, filter, and purchase products from an API-powered store. Key features include product search, category filters, price filters, sorting options, and an add-to-cart system that is integrated with local storage to persist cart data.</p>
            <p className="pl-2">Website: <a href="https://pri-shopify.netlify.app/" className="text-blue-700" target="_blank">Check now</a></p>
          </div>

          <div className=" p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <p className="font-medium flex gap-3 items-center"><FontAwesomeIcon icon={faReact} /><span>Real Time Chat</span></p>
            <p className="p-2">It is a real-time messaging application built with React.js and integrated with the Gemini API for AI-powered conversations. The app allows users to chat with a sophisticated AI model in real-time, providing dynamic, intelligent, and context-aware responses.</p>
            <p className="pl-2">Website: <a href="https://priyank-chat-app.netlify.app/" className="text-blue-700" target="_blank">Check now</a></p>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <p className="font-medium flex gap-3 items-center"><FontAwesomeIcon icon={faReact} /><span>Movie Search</span></p>
            <p className="p-2">It is a real-time messaging application built with React.js and integrated with the Gemini API for AI-powered conversations. The app allows users to chat with a sophisticated AI model in real-time, providing dynamic, intelligent, and context-aware responses.</p>
            <p className="pl-2">Website: <a href="https://movie-searching1.netlify.app/" className="text-blue-700" target="_blank">Check now</a></p>
          </div>

          <div className="p-5 rounded-xl cursor-pointer shadow-xl" style={{ backgroundColor: theme.cardColor }}>
            <p className="font-medium flex gap-3 items-center"><FontAwesomeIcon icon={faPhp} /><span>Itsmysociety</span></p>
            <p className="p-2">It is web-based society management system developed to streamline communication and management within residential societies. This platform allows users to register complaints, check notices, manage maintenance requests, and connect with admins – all through one easy-to-use website.</p>
            <p className="pl-2">Website: <a href="https://itsmysociety.great-site.net" className="text-blue-700" target="_blank">Check now</a></p>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Second;
