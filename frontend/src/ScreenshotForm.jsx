// src/ScreenshotForm.jsx
import { useState } from "react";

const ScreenshotForm = () => {
  const [url, setUrl] = useState("");
  const [screenshot, setScreenshot] = useState(null);
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="max-w-4xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700">
            Enter URL aman
          </label>
          <input
            id="url"
            type="url"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Loading..." : "Take Screenshot"}
        </button>
      </form>

      {screenshot && (
        <div className="mt-4 max-w-lg">
          <h2 className="text-xl font-semibold text-gray-900">Screenshot</h2>
          <div className ="max-w-xl">
            <img src={screenshot} alt="Screenshot" className="mt-2 border rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ScreenshotForm;
