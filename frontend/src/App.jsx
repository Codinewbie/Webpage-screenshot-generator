import './App.css'
import ScreenshotForm from './ScreenshotForm'
import Header from './components/Header'
import Features from './components/Features'
function App() {

  return (
    <div id= "Home"className="flex flex-col  backdrop-opacity-95 bg-gradient-to-b from-slate-900 to-slate-800">
      
      <Header />
      
      <div className="min-h-screen  items-center md:items-start mb-10 sm:mb-1 grid grid-cols-3 md:grid-cols-4 gap-4  w-full">
        <Features/>
        <div className="pb-10 flex justify-center mb-32 xs:mb-1 xs:items-center max-w-xl sm:max-w-full mt-24 col-span-3" > 
          <ScreenshotForm/> 
        </div>
      </div> 
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
    </div>
  )
}

export default App
 {/* <div className = "w-full h-20 opacity-95 bg-slate-900"></div>
        <div className = "w-full h-12 opacity-60 bg-slate-950"></div>
             */}