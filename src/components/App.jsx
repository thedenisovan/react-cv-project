import { useState } from "react";
import '../styles/index.css'
import PersonalInfo from './PersonalInfo.jsx'
import Skills from './Skills.jsx'
import Container from "./SectionContainer"

// Main projects component
export default function App() {
  const [index, setIndex] = useState(0);

  // Function to increase or decrease index
  const nextPage = () => { if (index < 1) setIndex(index + 1) }
  const previousPage = () => { if (index > 0) setIndex(index - 1) }

  // Return current active page based on current index
  function returnCorrectPage() {
    switch(index) {
      case 0:
        return <PersonalInfo id='0' />;
      case 1:
        return <Skills id='1' className='text-3xl font-bold' />;
    }
  }

  return (
    <Container>
      {returnCorrectPage()}
      <div className="flex justify-around">
        <button 
          disabled={index < 1}
          className='bg-gray-500 text-amber-50 rounded-xl w-[5rem]'
          onClick={previousPage}>Previous
        </button>
        <button 
          disabled={index > 3}
          className='bg-gray-500 text-amber-50 rounded-xl w-[5rem]'
          onClick={nextPage}>Next
        </button>
      </div>
    </Container>
  )
}

