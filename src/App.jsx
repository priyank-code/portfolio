import React, { useContext } from "react";
import { PortfolioContext } from "./Context/Context";
import First from "./Components/First";
import Second from "./Components/Second";

const App = () => {
const { theme } = useContext(PortfolioContext);

  return <>
    <div className={`lg:flex flex-col p-5 md:p-10 text-gray-200 select-none transition-all duration-500 ease-in-out`} style={{backgroundColor: theme.background, color: theme.textCol}}>
      <div
        className={`grid lg:grid-cols-3 grid-cols-1 gap-8`}
      >
        <First />
        <Second />
      </div>
    </div>
  </>
};

export default App;
