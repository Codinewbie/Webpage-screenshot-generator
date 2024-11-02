import React from "react";
import CopyButton from "./CopyButton";

const ScreenshotDisplay = ({ screenshot, handleCopyImage, copyText, format }) => (
  <div className="flex justify-center">
    <div className="mt-10 min-w-full max-w-full">
      <div className="flex justify-between">
        <h1 className="text-md pt-1 sm:text-xl md:text-2xl items-center font-semibold text-green-600">Screenshot</h1>
        <a 
          href={screenshot}
          download={`screenshot.${format}`}
          className="text-white text-sm md:text-md bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
        >
          Download Screenshot<i className="bx bxs-download ml-1 w-1 h-1"></i>
        </a>
      </div>
      <div className="relative overflow-y-auto h-96 max-w-2xl shadow-lg mt-4">
        {format === 'pdf' ? (
          <iframe 
            src={screenshot} 
            title="Screenshot PDF" 
            className="border min-w-full max-w-full h-80"
            frameBorder="0"
          ></iframe>
        ) : (
          <img src={screenshot} alt="Screenshot" className="border max-w-full" />
        )}
        {format!=='pdf' ? (<CopyButton handleCopyImage={handleCopyImage} copyText={copyText} />) : (<></>)  }
        
        
      </div>
    </div>
  </div>
);

export default ScreenshotDisplay;
