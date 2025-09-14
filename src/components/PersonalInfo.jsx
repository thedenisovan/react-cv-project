import Container from './SectionContainer';

// Component for personal detail input field
function UserInput({ id, labelText, ...rest }) {
  return (
    <div className='flex flex-col'>
      <label htmlFor={id} className='text-gray-700'>
        {labelText}
      </label>
      <input
        id={id}
        className='border-solid border-1 rounded-md h-[2.2rem]'
        {...rest}
      />
    </div>
  );
}

export default function PersonalInfo({ onStateChange }) {
  return (
    <Container>
      <h1 className='text-3xl font-medium'>Personal details</h1>
      <p className='text-1xl font-normal text-gray-700'>
        Personal details such as - name, job title and email are crucial for any
        employers resume.
      </p>
      <form className='flex flex-col gap-[1rem]'>
        <UserInput
          id='name'
          autoComplete='given-name'
          labelText='First name'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          id='surname'
          labelText='Last name'
          autoComplete='family-name'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          id='location'
          autoComplete='address'
          labelText='Location'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          type='email'
          id='email'
          labelText='Email address'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          type='tel'
          id='phone'
          labelText='Phone number'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          type='url'
          id='linkedin'
          labelText='LinkedIn'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
        <UserInput
          type='url'
          id='github'
          labelText='GitHub'
          onChange={(e) =>
            onStateChange('personal', e.target.id, e.target.value)
          }
        />
      </form>
    </Container>
  );
}
