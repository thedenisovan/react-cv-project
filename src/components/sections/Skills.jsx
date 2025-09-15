import { useState } from 'react';
import Container from './SectionContainer';

export default function Skills({ onStateChange, addSkill, skillInput }) {
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
          onChange={(e) => onStateChange('skills', e.target.id, e.target.value)}
          id='skillInput'
          type='text'
          className='border-1'
          value={skillInput}
        />
        <button className='border-1' onClick={addSkill}>
          Add
        </button>
      </div>
    </Container>
  );
}
