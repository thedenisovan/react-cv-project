import { useState } from "react";
import '../styles/index.css'
import PersonalInfo from './PersonalInfo.jsx'
import Skills from './Skills.jsx'
import CvField from "./CvField.jsx";

// Main projects component
export default function App() {
  const [index, setIndex] = useState(0);
  const [input, setInput] = useState({
      name: '', 
      surname: '', 
      email: '', 
      job: '',
      number: ''
    });
  
  // function that is passed to children of this component to get on change input value
  function onStateChange(field, value) {
    setInput({
      ...input,
      [field]: value
    });
  }

  // Function to increase or decrease index
  const nextPage = () => { if (index < 2) setIndex(index + 1) }
  const previousPage = () => { if (index > 0) setIndex(index - 1) }

  // Return current active page based on current index
  function returnCorrectPage() {
    switch(true) {
      case (index === 0):
        return <PersonalInfo onStateChange={onStateChange} id='0' />;
      case (index === 1):
        return <Skills id='1' />;
    }
  }

  return (
    <div className="max-w-[1200px] flex justify-center m-auto md:flex-col lg:flex-row">
      <div>
        {returnCorrectPage()}
        <div className="flex justify-around m-auto max-w-[400px]">
          <button
            disabled={index < 1}
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={previousPage}>Previous
          </button>
          <button
            disabled={index > 1}
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={nextPage}>Next
          </button>
        </div>
      </div>
      <CvField
        name={input.name}
      />
    </div>
  )
}

