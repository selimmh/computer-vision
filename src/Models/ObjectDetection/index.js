// imports
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";

import { drawRect } from "./utilities";
import { PulseLoader } from "react-spinners";

// main function
function ObjectDetection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  // load model
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Object Detect model loaded.");
    setInterval(() => {
      detect(net);
    }, 10);
  };

  // detector
  const detect = async (net) => {
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      const obj = await net.detect(video);

      // draw
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  // call
  useEffect(() => {
    runCoco();
  }, []);

  // loader
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center justify-center text-md md:text-2xl tracking-wider">
        {loading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="">Loading model</div>
            <PulseLoader
              size={20}
              color={"#1f2937"}
              loading={loading}
              margin={5}
            />
          </div>
        ) : (
          <div>Object Detect model is ready for use</div>
        )}
      </div>

      <div className="grid grid-cols-1 w-auto h-auto scale-75 md:scale-100">
        <Webcam
          className="row-start-1 col-start-1 w-full h-full"
          ref={webcamRef}
          muted={true}
          style={{
            zindex: 9,
          }}
        />
        <canvas
          className="row-start-1 col-start-1 w-full h-full"
          ref={canvasRef}
          style={{
            zindex: 8,
          }}
        />
      </div>
    </div>
  );
}

export default ObjectDetection;
