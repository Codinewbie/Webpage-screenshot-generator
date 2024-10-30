// src/ScreenshotForm.jsx
import { useState } from "react";
import UrlInput from "./components/URLinput";
import SubmitButton from "./components/SubmitButton";
import ErrorMessage from "./components/ErrorMessage";
import ScreenshotDisplay from "./components/ScreenshotDisplay";
import 'boxicons';
import 'boxicons/css/boxicons.min.css';


const ScreenshotForm = () => {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);
  const [copyText, setCopyText] = useState("Copy Image");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

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
        setErrorMessage("Something went wrong, please check your connection and try again!");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Something went wrong, please check your connection and try again!");
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

  return (
    <>
      <div className="max-w-xl p-6">
        <div className = "mt-5 text-white  font-bold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">Looking to Save a Webpage Snapshot?</div>
        <div className = "text-green-600 font-bold text-md md:text-xl lg:text-2xl text-center mb-5 mt-3">Enter The Link Here!</div>
        <form onSubmit={handleSubmit} className="max-w-full space-y-4">
          <UrlInput url = {url} setUrl = {setUrl}/>
          <SubmitButton loading={loading} />
          <ErrorMessage errorMessage={errorMessage} />
        </form>

        {screenshot && (
          <ScreenshotDisplay
            screenshot={screenshot}
            handleCopyImage={handleCopyImage}
            copyText={copyText}
          />
        )}
      </div>
    </>
  );
};

export default ScreenshotForm;
