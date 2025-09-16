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
    id: self.crypto.randomUUID(),
    academy: '',
    degree: '',
    field: '',
    startYear: '',
    endYear: '',
  });

  const [education, setEducation] = useState([
    {
      id: self.crypto.randomUUID(),
      academy: 'Chicago academy',
      degree: 'High School',
      field: 'High School Diploma - Sports',
      startYear: '1998',
      endYear: '2003',
    },
    {
      id: self.crypto.randomUUID(),
      academy: 'Los angeles University',
      degree: 'Bachelor',
      field: 'Mathematics',
      startYear: '2003',
      endYear: '2008',
    },
  ]);

  const [career, setCareer] = useState({
    id: self.crypto.randomUUID(),
    company: '',
    role: '',
    startYear: '',
    endYear: '',
  });

  const [storedCareer, setCareerStore] = useState([
    {
      id: self.crypto.randomUUID(),
      company: 'Chicago Bulls',
      role: 'I led the Chicago Bulls as the main scorer and competitor, pushing my teammates and myself to win six championships. I took responsibility for delivering in crucial moments and setting the standard for excellence on the court.',
      startYear: '2020',
      endYear: '2024',
    },
  ]);

  function storeCareer() {
    if (
      !career.company ||
      !career.role ||
      !career.startYear ||
      !career.endYear
    ) {
      return;
    }
    // If career with same id exists exit
    const careerCopy = storedCareer.find((entry) => entry.id === experience.id);
    if (careerCopy) return;

    // Copy career prev state and add new entry to the end
    setCareerStore((prev) => [...prev, career]);
    setCareer({
      ...career,
      id: self.crypto.randomUUID(),
      company: '',
    });
  }

  // Adds education to array
  function storeEducation() {
    if (
      !experience.academy ||
      !experience.degree ||
      !experience.field ||
      !experience.startYear ||
      !experience.endYear
    ) {
      return;
    }
    // If education with same id exists exit
    const educationCopy = education.find((entry) => entry.id === experience.id);
    if (educationCopy) return;

    //Copies array of educations and adds new one to the end
    setEducation((prev) => [...prev, experience]);
    setExperience({
      ...experience,
      id: self.crypto.randomUUID(),
      academy: '',
    });
  }

  // Removes education with given key
  function deleteEducation(key) {
    const newList = education.filter((instance) => instance.id !== key);
    setEducation(newList);
  }

  const [skills, setSkills] = useState({
    about: '',
    skillInput: '',
  });
  const [skillStorage, setStorage] = useState([
    'Dunking',
    'Basketball',
    'Baseball',
    'Shoes',
  ]);

  // Adds skill to array
  function addSkill() {
    // If skill input is not empty
    if (skills.skillInput && skillStorage.length < 10) {
      // Check if skill all ready does not exist
      const skillCopy = skillStorage.find(
        (skill) => skill === skills.skillInput
      );
      if (skillCopy) return; // If skill exists return

      // Update the array that holds all skills
      setStorage((prev) => [...prev, skills.skillInput]);

      // Clear the input field
      setSkills({
        ...skills,
        skillInput: '',
      });
    }
  }
  // Deletes skill from list
  function deleteSkill(key) {
    const newStorage = skillStorage.filter((value) => value !== key);
    setStorage(newStorage);
  }

  // Sets state value on input change
  function onStateChange(section, field, value) {
    const mapping = {
      personal: [personal, setInput],
      experience: [experience, setExperience],
      skills: [skills, setSkills],
      career: [career, setCareer],
    };

    const entry = mapping[section];
    if (!entry) return;

    const [state, setter] = entry;
    setter({
      ...state,
      [field]: value,
    });
  }

  // Function to increase or decrease index and switch pages
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
      <Skills
        onStateChange={onStateChange}
        addSkill={addSkill}
        skillInput={skills.skillInput}
        skills={skillStorage}
        deleteSkill={deleteSkill}
      />,
      <Career
        onStateChange={onStateChange}
        storeEducation={storeEducation}
        academy={experience.academy}
        company={career.company}
        education={education}
        deleteEducation={deleteEducation}
        storeCareer={storeCareer}
      />,
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
        about={skills.about}
        skills={skillStorage}
        education={education}
      />
    </div>
  );
}
