import {useState} from 'react';

// Component for personal detail input field
function UserInput({id, labelText, ...rest}) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className="text-gray-700">{labelText}</label>
      <input 
        id={id} 
        className='border-solid border-1 rounded-md h-[2.2rem]'
        {...rest}
      />
    </div>
  )
}

export default function PersonalInfo() {
  const [input, setInput] = useState({name: '', surname: '', email: '', job: ''});

  function handleChange(event) {
    setInput({
      ...input,
      [event.target.id]: event.target.value
    });
  }

  return (
    <div>
      <h1 className="text-3xl font-bold">Personal details</h1>
      <p className="text-1xl font-normal text-gray-700">
        Personal details such as - name, job title and email are crucial for any employers resume.
      </p>
      <form className="flex flex-col gap-[1rem]">
        <UserInput
          id='name'
          labelText='First name'
          
          onChange={handleChange}
        />
        <UserInput
          id='surname'
          labelText='Last name'
          
          onChange={handleChange}
        />
        <UserInput
          type='email'
          id='email'
          labelText='Email address'
          onChange={handleChange}
        />
        <UserInput
          id='job'
          labelText='Job title'
          onChange={handleChange}
        />
      </form>
    </div>
  )
}