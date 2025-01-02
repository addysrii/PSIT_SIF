import React from 'react'
import MiddleSection from './Components/MiddleSection'
import BenifitedStartup from './Components/BenifitedStartup'
import Events from './Components/Events'
import ProgramPartners from './Components/ProgramPartners'
import Dean from './Components/Dean'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import MissionSection from './Components/MissionSection'
import TestimonialSection from './Components/TestimonialSection'

const App = () => {
  return (
   <>
   <div className='bg-blue-50 overflow-hidden '>
    <Navbar/>
    <MissionSection/>
    <TestimonialSection/>
   <MiddleSection/>

   <BenifitedStartup/>
   <Events/>
   <ProgramPartners/>

   {/* <Dean></Dean> */}
   <Footer/>
   
  
   </div>
   </>
  )
}

export default App