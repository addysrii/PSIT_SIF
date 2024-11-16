import React from 'react'
import MiddleSection from './Components/MiddleSection'
import BenifitedStartup from './Components/BenifitedStartup'
import Events from './Components/Events'
import ProgramPartners from './Components/ProgramPartners'
import Dean from './Components/Dean'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
const App = () => {
  return (
   <>
   <div className='bg-white'>
    <Navbar/>
   <MiddleSection/>
   <div className=' mx-4 pb-8'>
   <BenifitedStartup/>
   <Events/>
   <ProgramPartners/>
   <Dean></Dean>
   <Footer/>
   </div>
  
   </div>
   </>
  )
}

export default App