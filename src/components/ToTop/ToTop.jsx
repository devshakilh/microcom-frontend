

import React, { ReactNode, useEffect, useRef, useState } from "react";

import { HiChevronDoubleUp } from "react-icons/hi";

import getFullPageHeight from "./getFullPageHeight";


const ToTop = () => {
  const [directionBottom, setDirectionBottom] = useState(true);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY >= 200) {
        setDirectionBottom(false);
      } else {
        setDirectionBottom(true);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollTop = () => {
    window.scrollTo({
      top: directionBottom ? getFullPageHeight() : 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <a 
        className={`custom-shadow right[10px] md:right[30px] ${directionBottom
          ? "bottom-[calc(100vh_-_26%)] md:bottom-[calc(100vh_-_35%)] xl:bottom-[calc(100vh_-_30%)]"
          : "bottom-[15px]"
          }`}
        onClick={scrollTop}
        style={{
          position: "fixed",
          transition: "all 1s ease-in-out",
          cursor: "pointer",
          display: "flex",
          bottom: directionBottom ? "calc(100vh - 28%)" : "15px",
          alignItems: "center",
          justifyContent: "center",
          height: "50px",
          width: "50px",
          background: "#FFFF19",
          borderRadius: "50%",
          zIndex: "1",
        }}
      >
        <HiChevronDoubleUp
          className={`duration-[1s] ${directionBottom ? "rotate-180" : "rotate-0"
            }`}
          color="#000"
        />

      </a>
    </div>
  );
};

export default ToTop;
