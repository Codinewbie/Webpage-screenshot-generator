import React, { useState } from "react";

const OnePage = ({onToggleChange}) => {
    const [isFullSize, setIsFullSize] = useState(false);

    const handleToggleChange = () => {
      setIsFullSize((prev) => !prev);
      onToggleChange(!isFullSize); // Call parent function with updated toggle state
    };
  
    return (
        <div className="bg-slate-600 hover:bg-slate-700 focus:ring-2 focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-600 focus:ring-green-600 font-medium rounded-lg  text-xs md:text-sm px-3 py-2.5 inline-flex items-center" >           
            <label className="inline-flex items-center cursor-pointer">
            <input 
                type="checkbox"
                className="sr-only peer"
                checked={isFullSize}
                onChange={handleToggleChange}
            />
            <div className="relative w-8 h-4 md:w-9 md:h-5 bg-gray-500 peer-focus:outline-none peer-focus:ring-1 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] md:after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3.5 md:after:h-4 after:w-3.5 md:after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-green-800"></div>
            <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">Full Size</span>
            </label>
        </div>
    );
};

export default OnePage;
