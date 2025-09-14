import Container from './SectionContainer';

// Reusable dropdown for selecting a year or "ongoing"
function LengthOfActivity({
  yearFrom,
  yearTo,
  placeholder,
  id,
  onStateChange,
  isOngoing,
}) {
  const years = [];
  for (let y = yearFrom; y <= yearTo; y++) years.push(y);

  return (
    <select
      className='border-1'
      id={id}
      defaultValue=''
      onChange={(e) => onStateChange('experience', e.target.id, e.target.value)}
    >
      <option value='' disabled>
        {placeholder}
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
      {isOngoing ? <option value='ongoing'>Ongoing</option> : ''}
    </select>
  );
}

// Dropdown for selecting type of education
function EducationSelect({ onStateChange }) {
  const EDUCATION_TYPES = ['High School', 'Bachelor', 'Master', 'PhD'];

  return (
    <select
      className='border-1'
      id='degree'
      defaultValue=''
      onChange={(e) => onStateChange('experience', e.target.id, e.target.value)}
    >
      <option value='' disabled>
        Select degree
      </option>
      {EDUCATION_TYPES.map((type) => (
        <option key={type} value={type}>
          {type}
        </option>
      ))}
    </select>
  );
}

// Component for education details, job experience and related skills
function Experience({ title, label, type, onStateChange }) {
  return (
    <form className='flex flex-col'>
      <h2 className='text-2xl font-medium'>{title}</h2>
      <label htmlFor={type}>{label}</label>
      <div>
        <input
          autoComplete='organization'
          className='border-1'
          id={type}
          placeholder='e.g. Harvard University'
          onChange={(e) =>
            onStateChange('experience', e.target.id, e.target.value)
          }
        />
        <LengthOfActivity
          id='startYear'
          placeholder='From'
          yearFrom={1970}
          yearTo={2025}
          onStateChange={onStateChange}
        />
        <LengthOfActivity
          id='endYear'
          placeholder='Until'
          yearFrom={1970}
          yearTo={2025}
          onStateChange={onStateChange}
          isOngoing
        />
      </div>
      <div>
        <EducationSelect onStateChange={onStateChange} />
        <button type='button' className='w-25 border-1'>
          Add
        </button>
      </div>
    </form>
  );
}

export default function Skills({ onStateChange }) {
  return (
    <Container>
      <h1 className='text-3xl font-medium'>
        Employee skills, education, and related experience
      </h1>
      <p className='text-1xl font-normal text-gray-700'>
        Here you can provide information about your formal education, work
        experience, and skills.
      </p>
      <Experience
        title='Education'
        label='Academy name'
        type='degree'
        onStateChange={onStateChange}
      />
    </Container>
  );
}
