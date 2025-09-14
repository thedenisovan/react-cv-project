import { useState } from 'react';
import '../styles/index.css';
import PersonalInfo from './sections/PersonalInfo.jsx';
import Career from './sections/Career.jsx';
import CvField from './CvField.jsx';
import Skills from './sections/Skills.jsx';

export default function App() {
  const [index, setIndex] = useState(0);

  const [personal, setInput] = useState({
    name: '',
    surname: '',
    email: '',
    address: '',
    number: '',
    linkedin: '',
    github: '',
  });
  const [experience, setExperience] = useState({
    academy: '',
    degree: '',
    startYear: '',
    endYear: '',
  });
  const [skills, setSkills] = useState({
    about: '',
  });

  // function that is passed to children of this component to get on change input value
  function onStateChange(section, field, value) {
    const mapping = {
      personal: [personal, setInput],
      experience: [experience, setExperience],
      skills: [skills, setSkills],
    };

    const entry = mapping[section];
    if (!entry) return;

    const [state, setter] = entry;
    setter({
      ...state,
      [field]: value,
    });
  }

  // Function to increase or decrease index
  const nextPage = () => {
    if (index < 3) setIndex(index + 1);
  };
  const previousPage = () => {
    if (index > 0) setIndex(index - 1);
  };

  // Return current active page based on current index
  function returnCorrectPage() {
    const pages = [
      <PersonalInfo onStateChange={onStateChange} />,
      <Skills onStateChange={onStateChange} />,
      <Career onStateChange={onStateChange} />,
    ];
    return pages[index] || null;
  }

  return (
    <div className='h-full max-w-[1100px] flex justify-center m-auto flex-col lg:flex-row'>
      <div className='flex flex-col justify-center items-center'>
        {returnCorrectPage()}
        <div className='flex flex-row justify-around w-[100%]'>
          <button
            disabled={index < 1}
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            disabled={
              (window.innerWidth > 1023 && index > 1) ||
              (window.innerWidth < 1023 && index > 2)
            }
            className='bg-gray-500 text-amber-50 rounded-xl w-[5rem] disabled:bg-amber-500'
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
      <CvField
        index={index}
        name={personal.name}
        surname={personal.surname}
        address={personal.address}
        email={personal.email}
        number={personal.number}
        linkedin={personal.linkedin}
        github={personal.github}
      />
    </div>
  );
}
