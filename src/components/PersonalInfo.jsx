// import {useState} from 'react';

function UserInput({type = 'text', id, labelText}) {
  return (
    <>
      <label htmlFor={id} className="text-gray-700">{labelText}</label>
      <input type={type} id={id} className='border-solid border-1 rounded-md h-[2.2rem]'/>
    </>
  )
}

export default function PersonalInfo() {
  return (
    <div className="m-[1rem] font-[system-ui]">
      <h1 className="font-mono text-3xl font-bold">Personal details</h1>
      <p className="text-1xl font-normal text-gray-700">Personal details such as - name, job title and email are crucial for any employers resume.</p>
      <form className="flex flex-col">
        <UserInput
          id='name'
          labelText='First name'
        />
        <UserInput
          id='surname'
          labelText='Last name'
        />
        <UserInput
          type='email'
          id='email'
          labelText='Email address'
        />
        <UserInput
          id='job'
          labelText='Job title'
        />
      </form>
    </div>
  )
}