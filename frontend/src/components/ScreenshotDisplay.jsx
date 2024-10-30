import React from "react";
import CopyButton from "./CopyButton";

const ScreenshotDisplay = ({ screenshot, handleCopyImage, copyText }) => (
    <div className = "flex justify-center">
  <div className="mt-10 max-w-full ">
    <div className="flex justify-between">
      <h1 className=" text-md pt-1 sm:text-xl md:text-2xl items-center font-semibold text-green-600">Screenshot</h1>
      <a 
        href={screenshot}
        download="screenshot.png"
        className="text-white text-sm md:text-md bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
      >
        Download Screenshot<i className="bx bxs-download ml-1 w-1 h-1"></i>
      </a>
    </div>
    <div className="relative max-w-2xl shadow-lg mt-4">
      <img src={screenshot} alt="Screenshot" className="border max-w-full" />
    
      <CopyButton handleCopyImage={handleCopyImage} copyText={copyText} />
    </div>
  </div>
  </div>
);

export default ScreenshotDisplay;
