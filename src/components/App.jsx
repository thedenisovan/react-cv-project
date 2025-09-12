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
    <div className="flex md:flex-col lg:flex-row">
      <div>
        {returnCorrectPage()}
        <div className="flex justify-around">
          <button
            disabled={index < 1}
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={previousPage}>Previous
          </button>
          <button
            disabled={index > 0}
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={nextPage}>Next
          </button>
        </div>
      </div>
      <section className="hidden md:block">
        Hello mama
      </section>
    </div>
  )
}

