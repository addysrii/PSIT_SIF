import React from 'react'
import MiddleSection from './Components/MiddleSection'
import BenifitedStartup from './Components/BenifitedStartup'
import Events from './Components/Events'
import ProgramPartners from './Components/ProgramPartners'
const App = () => {
  return (
   <>
   <div className='bg-white'>
   <MiddleSection/>
   <div className=' mx-4 pb-8'>
   <BenifitedStartup/>
   <Events/>
   <ProgramPartners/>
   </div>
  
   </div>
   </>
  )
}

export default App