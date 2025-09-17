import Container from './SectionContainer';

export default function PersonalInfo({ onStateChange }) {
  return (
    <Container>
      <h1 className='text-2xl md:text-3xl lg:text-4xl font-medium mt-[5-rem]'>
        Personal details
      </h1>
      <p className='text-1xl font-normal text-gray-700'>
        Personal details such as - name, job title and email are crucial for any
        employers resume.
      </p>
      <form className='flex flex-col gap-[1rem]'>
        <UserInput
          onStateChange={onStateChange}
          id='name'
          autoComplete='given-name'
          labelText='First name'
        />
        <UserInput
          onStateChange={onStateChange}
          id='surname'
          labelText='Last name'
          autoComplete='family-name'
        />
        <UserInput
          onStateChange={onStateChange}
          id='address'
          autoComplete='address'
          labelText='Address'
        />
        <UserInput
          onStateChange={onStateChange}
          type='email'
          id='email'
          labelText='Email address'
        />
        <UserInput
          onStateChange={onStateChange}
          type='tel'
          id='number'
          labelText='Phone number'
        />
        <UserInput
          onStateChange={onStateChange}
          type='url'
          id='linkedin'
          labelText='LinkedIn'
        />
        <UserInput
          onStateChange={onStateChange}
          type='url'
          id='github'
          labelText='GitHub'
        />
      </form>
    </Container>
  );
}

// Component for personal detail input field
function UserInput({ id, onStateChange, labelText, ...rest }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='text-gray-700'>
        {labelText}
      </label>
      <input
        id={id}
        className='border-solid border-1 rounded-md h-[2.2rem]'
        {...rest}
        onChange={(e) => onStateChange('personal', e.target.id, e.target.value)}
      />
    </div>
  );
}
