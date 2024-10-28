// src/ScreenshotForm.jsx
import { useState } from "react";
import Header from "./components/header";
import 'boxicons'
import 'boxicons/css/boxicons.min.css';
const ScreenshotForm = () => {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState("Copy Image"); // Initial state for the button text


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:3000/screenshot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setScreenshot(imageUrl);
      } else {
        console.error("Failed to capture screenshot");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCopyImage = async () => {
    try {
      const img = await fetch(screenshot);
      const blob = await img.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);

      // Update button text to "Copied" and reset after 3 seconds
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy image"), 3000);
    } catch (error) {
      console.error("Failed to copy image:", error);
    }
  };
  return (
    <>
    <div className="max-w-full p-4 ">
      <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
        <div className = "space-y-2">
          <label htmlFor="url" className=" text-md font-medium text-green-600">
            Enter URL 
          </label>
          <input
            id="url"
            type="url"
            className=" w-full md:max-w-xl p-2 border border-gray-300 rounded-md"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full md:max-w-xl py-2 px-4 bg-green-700 text-white rounded-lg hover:bg-green-800"
          disabled={loading}
        >
          {loading ? "Loading..." : "Take Screenshot"}
        </button>
      </form>

      {screenshot && (
        <div className="mt-10 max-w-full">
          <div className = "flex justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-green-600">Screenshot</h2>
            </div>
            <div>
              <a 
                href={screenshot}
                download="screenshot.png" 
                className="text-white bg-green-700 px-4 py-2 rounded-lg hover:bg-green-800"
              >
                Download Screenshot<i className="bx bxs-download ml-1"></i>
              </a>
            </div>
            
          </div>
          
          <div className="relative max-w-xl shadow-lg mt-2">
      <img src={screenshot} alt="Screenshot" className="border max-w-full" />

      <button
        onClick={handleCopyImage}
        className="absolute top-0 right-0 text-center items-center  opacity-90 bg-slate-800 border-t border-r rounded rounded-r-none text-xs text-white px-2 py-1"
      >
        {copyText === "Copy image" ? (
          <i className="bx bx-copy text-xs pr-1" style={{ color: '#ffffff' }}></i>
        ) : (
          <i className='bx bx-check text-sm pr-1' style={{color:'#ffffff'}} ></i>
        )}
        {copyText}
      </button>
    </div>

        </div>


        
      )}
    </div>
    </>
  );
};

export default ScreenshotForm;