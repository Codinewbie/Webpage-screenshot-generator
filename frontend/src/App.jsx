import './App.css'
import ScreenshotForm from './ScreenshotForm'
import Features from './components/Features'
import Contact from './components/Contact'
import Header from './components/header'
function App() {

  return (
    <div id= "Home"className="flex flex-col  backdrop-opacity-95 bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <div className="min-h-screen  items-center md:items-start mb-10 sm:mb-1 grid grid-cols-3 md:grid-cols-4 gap-4  w-full">
        <Features/>
        <div className="pb-10 flex justify-center xs:mb-1 xs:items-center mt-4 max-w-xl sm:max-w-full col-span-3" > 
          <ScreenshotForm/> 
        </div>
      </div> 
      <Contact/>
    </div>
  )
}
export default App