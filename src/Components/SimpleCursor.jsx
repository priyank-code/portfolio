import React, { useEffect, useRef, useState } from "react";

// SimpleCursor component
const SimpleCursor = ({
  size = 20,
  color = "rgba(0, 0, 0, 0.3)",
  opacity = 0.9,
  border = "1px solid rgba(0, 0, 0, 0.5)",
  transitionTime = 0.2,
}) => {
  const cursorRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileCheck =
      /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(userAgent) ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsMobile(mobileCheck);
  }, []);

  // Cursor logic for desktop only
  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const click = () => {
      cursor.classList.add("expand");
      setTimeout(() => cursor.classList.remove("expand"), 500);
    };

    document.addEventListener("mousemove", move);
    document.addEventListener("click", click);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("click", click);
    };
  }, [isMobile]);

  // On mobile, render nothing
  if (isMobile) return null;

  return (
    <>
      {/* Cursor Element */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: `${size}px`,
          height: `${size}px`,
          backgroundColor: color,
          opacity: opacity,
          border: border,
          borderRadius: "50%",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
          transition: `all ${transitionTime}s ease-out`,
        }}
        className="custom-cursor"
      ></div>

      {/* Hide system cursor on desktop */}
      <style>{`body, * { cursor: none !important; }`}</style>

      {/* Cursor expand animation */}
      <style>{`
        .custom-cursor.expand {
          animation: cursorExpand 0.5s forwards;
          background-color: transparent !important;
          border-color: rgba(0, 0, 0, 0.3);
          box-shadow: 0 0 8px rgba(0, 0, 0, 0.4);
        }

        @keyframes cursorExpand {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0.5;
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SimpleCursor;
