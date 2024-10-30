import './App.css'
import ScreenshotForm from './ScreenshotForm'
import Header from './components/Header'
import Features from './components/Features'
import Contact from './components/Contact'
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
      <Contact/>
    </div>
  )
}

export default App
 {/* <div className = "w-full h-20 opacity-95 bg-slate-900"></div>
        <div className = "w-full h-12 opacity-60 bg-slate-950"></div>
             */}