import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Error() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      You are lost
    </div>
  );
}

export default Error;
