import React from "react";
import { useNavigate } from "react-router";

import FaceIcon from "./../icons/Face.png";
import HandIcon from "./../icons/Hand.png";
import ObjectIcon from "./../icons/Object.png";

function Navigation() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center space-y-4 z-20">
      <div className="text-md md:text-2xl tracking-widest">
        Detection Models
      </div>
      <div className="flex space-x-10">
        <div
          onClick={() => {
            navigate("/");
          }}
          className="cursor-pointer w-16 h-16 md:w-24 md:h-24 flex bg-white items-center justify-center rounded-md hover:scale-105 transition-all duration-300 p-2 shadow-xl border-2 border-black"
        >
          <img src={ObjectIcon} alt="objectIcon" />
        </div>

        <div
          onClick={() => {
            navigate("/faceDetection");
          }}
          className="cursor-pointer w-16 h-16 md:w-24 md:h-24 flex bg-white items-center justify-center rounded-md hover:scale-105 transition-all duration-300 p-2 shadow-xl border-2 border-black"
        >
          <img src={FaceIcon} alt="faceIcon" />
        </div>

        <div
          onClick={() => {
            navigate("/handDetection");
          }}
          className="cursor-pointer w-16 h-16 md:w-24 md:h-24 flex bg-white items-center justify-center rounded-md hover:scale-105 transition-all duration-300 p-2 shadow-xl border-2 border-black"
        >
          <img src={HandIcon} alt="handIcon" />
        </div>
      </div>
    </div>
  );
}

export default Navigation;
