import React from "react";

const Features = () => {

    return (
        <div  className = "col-span-1 space-y-5 min-w-xs max-w-xs min-h-screen bg-gradient-to-b from-slate-800 flex items-center shrink text-justify hidden md:block text-white "> 
          <div id="Home" className = "border border-green-600 rounded-full mt-3 mx-2 px-4 py-3 md:text-lg lg:text-xl xl:text-2xl  text-center font-bold bg-slate-900 hover:bg-slate-950 hover:text-green-600 mr-2 ">
                Features
          </div>
          <div className = "px-2 mx-2 py-3 rounded-md border border-green-600 md:text-md lg:text-lg xl:text-xl  justify-center items-center center font-semibold text-center bg-slate-900 hover:bg-slate-950 mr-2 ">
                Generate a <span className="text-green-600 font-bold ">full-page</span> image of the webpage.
          </div>
          <div className = "px-2 py-3 mx-2 border border-green-600 rounded-md md:text-md lg:text-lg xl:text-xl  font-semibold text-center bg-slate-900 hover:bg-slate-950 mr-2 ">
                Save the screenshot as a <span className="text-green-600 font-bold ">PNG</span> file.
          </div>
          <div className = "px-2 py-3 mx-2 rounded-md border border-green-600 md:text-md  lg:text-lg xl:text-xl font-semibold text-center bg-slate-900 hover:bg-slate-950  mr-2 ">
                <span className="text-green-600 font-bold ">Copy</span> the image directly for easy sharing.
          </div>
        </div>
    )

}

export default Features;