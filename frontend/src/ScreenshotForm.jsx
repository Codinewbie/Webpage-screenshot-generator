// src/ScreenshotForm.jsx
import { useState } from "react";
import UrlInput from "./components/UrlInput";
import SubmitButton from "./components/SubmitButton";
import ErrorMessage from "./components/ErrorMessage";
import ScreenshotDisplay from "./components/ScreenshotDisplay";
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import Dropdown from "./components/Dropdown";
import OnePage from "./components/Onepage";


const ScreenshotForm = () => {
  const [url, setUrl] = useState("");
  const [format,setFormat] = useState("png");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState("Copy Image");
  const [errorMessage, setErrorMessage] = useState("");
  const [isFullSize, setIsFullSize] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:3000/api/screenshot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url , format , isFullSize }),
      });
      console.log('Submitting:', { url, format });

      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
        setScreenshot(imageUrl);
      } else {
        setErrorMessage("LALA Something went wrong, please check your connection and try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("NONO Something went wrong, please check your connection and try again!");
    } finally {
      setLoading(false);
    }
  };

  const handleCopyImage = async () => {
    try {
      const img = await fetch(screenshot);
      const blob = await img.blob();
      await navigator.clipboard.write([new ClipboardItem({ [blob.type]: blob })]);
      setCopyText("Copied!");
      setTimeout(() => setCopyText("Copy image"), 3000);
    } catch (error) {
      console.error("Failed to copy image:", error);
    }
  };

  const handleToggleChange = (value) => {
    setIsFullSize(value);
  };
  return (
    <>
      <div className="max-w-xl p-6">
        <div className = "mt-5 text-white  font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">Looking to Save a Webpage Snapshot?</div>
        <div className = "text-green-600 font-bold text-md md:text-xl lg:text-2xl text-center mb-5 mt-3">Enter The Link Here!</div>
        <form onSubmit={handleSubmit} className="max-w-full space-y-4">
          <UrlInput url = {url} setUrl = {setUrl}/>
          <div className = "flex flex-cols items-center justify-between space-x-4">
            <Dropdown format = {format} setFormat = {setFormat} setScreenshot={setScreenshot}/>
            <OnePage onToggleChange = {handleToggleChange}/>
     
          </div>
          <SubmitButton loading={loading} />
          <ErrorMessage errorMessage={errorMessage} />
        </form>

        {screenshot && (
          <ScreenshotDisplay
            screenshot={screenshot}
            handleCopyImage={handleCopyImage}
            copyText={copyText}
            format = {format}
          />
        )}
      </div>
    </>
  );
};

export default ScreenshotForm;
