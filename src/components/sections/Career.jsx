import Container from './SectionContainer';

export default function Career({
  onStateChange,
  storeEducation,
  resetExperience,
  academy,
  education,
  deleteEducation,
}) {
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
        storeEducation={storeEducation}
        resetExperience={resetExperience}
        academy={academy}
      />
      <ul>
        {education.map((instance) => (
          <li key={instance.id}>
            {instance.academy}
            <button
              className='border-1'
              onClick={() => deleteEducation(instance.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

// Component for education details, job experience and related skills
function Experience({
  title,
  label,
  type,
  onStateChange,
  storeEducation,
  academy,
}) {
  return (
    <form>
      <h2 className='text-2xl font-medium'>{title}</h2>
      <label htmlFor={type}>{label}</label>
      <div>
        <input
          autoComplete='organization'
          className='border-1'
          id='academy'
          placeholder='e.g. Harvard University'
          value={academy}
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
        <button
          type='button'
          className='w-25 border-1'
          onClick={storeEducation}
        >
          Add
        </button>
      </div>
    </form>
  );
}

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
  const EDUCATION_TYPES = [
    'High School',
    'Bachelor',
    'Master',
    'PhD',
    'Certification',
  ];
  const FIELDS_OF_STUDY = [
    'Computer Science',
    'Web Development',
    'Frontend Development',
    'Backend Development',
    'Data Science',
    'AI / Machine Learning',
    'Information Technology',
    'Software Engineering',
    'Business Administration',
    'Economics',
    'Biology',
    'Chemistry',
    'Physics',
    'Mathematics',
    'High School Diploma - Science',
    'High School Diploma - Arts',
    'High School Diploma - General',
    'Certification - Cloud Computing',
    'Certification - Cybersecurity',
    'Certification - UX/UI Design',
  ];

  return (
    <div>
      <select
        className='border-1'
        id='degree'
        defaultValue=''
        onChange={(e) =>
          onStateChange('experience', e.target.id, e.target.value)
        }
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
      <select
        className='border-1'
        id='field'
        defaultValue=''
        onChange={(e) =>
          onStateChange('experience', e.target.id, e.target.value)
        }
      >
        <option value='' disabled>
          Select Field
        </option>
        {FIELDS_OF_STUDY.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
