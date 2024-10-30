import React from "react";
const Contact = () => {
    return(
    <div id = "Contact" className = "bg-slate-900 border-green-600 border-t flex justify-center">       
        <div className = " text-white md:px-7 py-6 md:py-10 flex justify-between w-full gap-6  items-center  flex-col md:flex-row ">
          <div>
            <p className="md:text-lg font-bold">
              Copyright © {new Date().getFullYear()}. All rights are reserved
            </p>
          </div>
          <div className="flex items-center gap-5 text-4xl"> 
            <a
                href="https://github.com/Codienewbie"
                title="GitHub"
                target="_blank"
              >
                <i className="bx bxl-github duration-300 hover:text-green-600"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/aman-kumar-559110250/"
                title="LinkedIn"
                target="_blank"
              >
                <i className="bx bxl-linkedin-square duration-300 hover:text-green-600"></i>
            </a>
            <a
                href="mailto:amanks2580@gmail.com"
                title="gmail"
                target="_blank"
              >
                <i className="bx bxl-gmail duration-300 hover:text-green-600"></i>
            </a>
          </div>

        </div>
    </div>
    )
}
export default Contact;