import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ScreenshotForm from './ScreenshotForm'
import Header from './components/header'
function App() {

  return (
    <div className="flex flex-col justify-center  backdrop-opacity-95 bg-gradient-to-b from-slate-900 to-slate-800">
      <Header />
      <div className="min-h-screen  items-center flex justify-center w-full px-7">
        <div className="pb-10 max-w-4xl mb-16" >
          <ScreenshotForm/>
        </div>
      </div> 
    </div>
  )
}

export default App
