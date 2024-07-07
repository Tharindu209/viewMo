import React, { useEffect, useState } from "react";

const LoadingAnimation = ({ text }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => (prevDots.length < 3 ? prevDots + "." : ""));
    }, 500); // Adjust the speed of the animation if needed

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <>
        <div
          className="preloader"
        >
          <div
            className="loader"
          >
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div
              style={{
                marginTop: "70px",
                fontSize: "16px",
                color: "#A888FF",
                userSelect: "none",
                whiteSpace: "nowrap",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {text}
              <span style={{ display: "inline-block", width: "20px" }}>
                {dots}
              </span>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default LoadingAnimation;
