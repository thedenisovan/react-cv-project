import { useState } from 'react';
import Container from './SectionContainer';

export default function Skills({ onStateChange }) {
  let [input, setInput] = useState('');
  const [skill, setSkill] = useState([]);

  function setSkillState() {
    setSkill((prev) => [...prev, input]);
    setInput('');
  }

  return (
    <Container>
      <h1 className='text-4xl font-medium'>About me section</h1>
      <p className='text-2xl font-normal text-gray-700'>
        Here you can showcase your skills related to job you apply for.
      </p>
      <label htmlFor='about' className='mt-3'>
        Write short description why you apply for this role
      </label>
      <textarea
        className='border-1'
        id='about'
        onChange={(e) => onStateChange('skills', e.target.id, e.target.value)}
      ></textarea>
      <label htmlFor='skill' className='mt-3'>
        Write your relevant skill sets
      </label>
      <div>
        <input
          type='text'
          id='skill'
          className='border-1'
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button onClick={() => setSkillState()} className='border-1'>
          Add
        </button>
      </div>
    </Container>
  );
}
