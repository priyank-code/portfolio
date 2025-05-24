import { createContext, useState } from "react";

export const PortfolioContext = createContext();

const MyProvider = ({ children }) => {
  const techStack = [
    "React.js",
    "Javascript",
    "PHP",
    "ASP.NET",
    "MySQL",
    "Git",
    "Rest API",
    "CSS",
    "Tailwind",
    "Java",
  ];
  const themes = [
    {
      name: "Default",
      background: "#E7E7E7",
      cardColor: "#FFFFFF",
      objectColor: "#D1D5DB",
      ringColor: "#1F2937",
      textCol: "#374151",
      techStack: "#BFDBFE",
    },
    {
      name: "Light",
      background: "#F8FAFC",
      cardColor: "#FFFFFF",
      objectColor: "#E2E8F0",
      ringColor: "#E2E8F0",
      textCol: "#1E293B",
      techStack: "#2563EB",
    },
    {
      name: "Dark",
      background: "#0F172A",
      cardColor: "#1E293B",
      objectColor: "#334155",
      ringColor: "#334155",
      textCol: "#E0E7FF",
      techStack: "#3B82F6",
    },
    {
      name: "Sunrise Glow",
      background: "#FFFAF0",
      cardColor: "#FFDAB9",
      objectColor: "#FFA07A",
      ringColor: "#FF7F50",
      textCol: "#8B4513",
      techStack: "#FF4500",
    },
    {
      name: "Ocean Breeze",
      background: "#E0FFFF",
      cardColor: "#AFEEEE",
      objectColor: "#40E0D0",
      ringColor: "#48D1CC",
      textCol: "#2F4F4F",
      techStack: "#20B2AA",
    },
    {
      name: "Forest Walk",
      background: "#F0FFF0",
      cardColor: "#98FB98",
      objectColor: "#228B22",
      ringColor: "#006400",
      textCol: "#013220",
      techStack: "#32CD32",
    },
    {
      name: "Dusk Glow",
      background: "#2C3E50",
      cardColor: "#34495E",
      objectColor: "#E67E22",
      ringColor: "#D35400",
      textCol: "#ECF0F1",
      techStack: "#F39C12",
    },
    {
      name: "Lavender Dream",
      background: "#E6E6FA",
      cardColor: "#D8BFD8",
      objectColor: "#9370DB",
      ringColor: "#8A2BE2",
      textCol: "#4B0082",
      techStack: "#6A5ACD",
    },
    {
      name: "Retro Vibes",
      background: "#FFF8DC",
      cardColor: "#F5DEB3",
      objectColor: "#CD853F",
      ringColor: "#D2691E",
      textCol: "#8B4513",
      techStack: "#A0522D",
    },
    {
      name: "Cyber Pulse",
      background: "#0F2027",
      cardColor: "#203A43",
      objectColor: "#2C5364",
      ringColor: "#00FFFF",
      textCol: "#00CED1",
      techStack: "#40E0D0",
    },
    {
      name: "Sunset Blush",
      background: "#FFE4E1",
      cardColor: "#FFB6C1",
      objectColor: "#FF69B4",
      ringColor: "#DB7093",
      textCol: "#800080",
      techStack: "#C71585",
    },
    {
      name: "Metal Works",
      background: "#fff",
      cardColor: "#A9A9A9",
      objectColor: "#808080",
      ringColor: "#696969",
      textCol: "#2F4F4F",
      techStack: "#778899",
    },
    {
      name: "Candy Land",
      background: "#FFF0F5",
      cardColor: "#FFD1DC",
      objectColor: "#FF69B4",
      ringColor: "#FF85A1",
      textCol: "#800040",
      techStack: "#FFA6C9",
    },
    {
      name: "Earthy Tones",
      background: "#F5F5DC",
      cardColor: "#DEB887",
      objectColor: "#A0522D",
      ringColor: "#8B4513",
      textCol: "#654321",
      techStack: "#D2691E",
    },
    {
      name: "Neon Lights",
      background: "#000000",
      cardColor: "#111111",
      objectColor: "#222222",
      ringColor: "#00FFFF",
      textCol: "#00FFFF",
      techStack: "#FF1493",
    },
    {
      name: "Pastel Paradise",
      background: "#FFF0F5",
      cardColor: "#FFB6C1",
      objectColor: "#FF69B4",
      ringColor: "#DB7093",
      textCol: "#800080",
      techStack: "#DDA0DD",
    },
  ];

  const [theme, setTheme] = useState(themes[0]);
  return (
    <PortfolioContext.Provider value={{ techStack, themes, setTheme, theme }}>
      {children}
    </PortfolioContext.Provider>
  );
};

export default MyProvider;
