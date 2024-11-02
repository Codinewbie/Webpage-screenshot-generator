import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({format , setFormat, setScreenshot}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("png"); // Default option label
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setFormat(option);
        setScreenshot(null);
        setIsOpen(false); // Close the dropdown after selecting an option
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-center" ref={dropdownRef}>
            <button 
                onClick={toggleDropdown} 
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" 
                type="button"
            >
                {selectedOption} {/* Show the selected option here */}
                <svg className="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10 w-48 bg-slate-800 divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 mt-2">
                    <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                        <li>
                            <div
                                className="flex items-center p-2 text-white rounded hover:bg-slate-700 dark:hover:bg-gray-600 cursor-pointer"
                                onClick={() => handleOptionClick("png")}
                            >
                                <input 
                                    id="default-radio-4" 
                                    type="radio" 
                                    value="" 
                                    name="default-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    checked={selectedOption === "png"} // Mark it as checked
                                    readOnly
                                />
                                <label 
                                    htmlFor="default-radio-4" 
                                    className="ml-2 text-sm font-medium text-white"
                                >
                                    png
                                </label>
                            </div>
                        </li>
                        <li>
                            <div
                                className="flex items-center p-2 rounded hover:bg-slate-700 dark:hover:bg-gray-600 cursor-pointer"
                                onClick={() => handleOptionClick("jpeg")}
                            >
                                <input 
                                    id="default-radio-5" 
                                    type="radio" 
                                    value="" 
                                    name="default-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    checked={selectedOption === "jpeg"} // Mark it as checked
                                    readOnly
                                />
                                <label 
                                    htmlFor="default-radio-5" 
                                    className="ml-2 text-sm font-medium text-white"
                                >
                                    jpeg
                                </label>
                            </div>
                        </li>
                        <li>
                            <div
                                className="flex items-center p-2 rounded hover:bg-slate-700 dark:hover:bg-gray-600 cursor-pointer"
                                onClick={() => handleOptionClick("pdf")}
                            >
                                <input 
                                    id="default-radio-6" 
                                    type="radio" 
                                    value="" 
                                    name="default-radio" 
                                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" 
                                    checked={selectedOption === "pdf"} // Mark it as checked
                                    readOnly
                                />
                                <label 
                                    htmlFor="default-radio-6" 
                                    className="ml-2 text-sm font-medium text-white"
                                >
                                    pdf
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
