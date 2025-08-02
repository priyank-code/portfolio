import React, { useEffect } from "react";

const HideCursor = ({ hideDefaultCursor = true }) => {
  useEffect(() => {
    if (hideDefaultCursor) {
      const style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `
        body {
          cursor: none;
        }
        * {
          cursor: none !important;
        }
      `;
      document.head.appendChild(style);

      // Cleanup on unmount or prop change
      return () => {
        document.head.removeChild(style);
      };
    }
  }, [hideDefaultCursor]);

  return null; // Component renders nothing
};

export default HideCursor;
