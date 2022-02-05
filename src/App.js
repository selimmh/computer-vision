import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Error from "./components/Error";
import FaceDetection from "./Models/FaceDetection";
import HandDetection from "./Models/HandDetection";
import ObjectDetection from "./Models/ObjectDetection";

function App() {
  return (
    <Router basename="/computer-vision">
      <div className="w-screen h-screen bg-gray-100 text-gray-800 flex flex-col items-center justify-center overflow-hidden space-y-4 select-none">
        <Routes>
          <Route path="/" element={<ObjectDetection />} />
          <Route path="/faceDetection" element={<FaceDetection />} />
          <Route path="/handDetection" element={<HandDetection />} />
          <Route path="/*" element={<Error />} />
        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
