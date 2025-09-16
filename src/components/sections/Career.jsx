import Container from './SectionContainer';

export default function Career({
  onStateChange,
  storeEducation,
  resetExperience,
  academy,
  education,
  deleteEntry,
  company,
  storeCareer,
  storedCareer,
}) {
  return (
    <Container>
      <h1 className='text-3xl font-medium'>
        Employee education and related experience
      </h1>
      <p className='text-1xl font-normal text-gray-700'>
        Here you can provide information about your formal education, work
        experience, and skills.
      </p>
      <Experience
        title='Education'
        label='Academy'
        type='degrees'
        field='experience'
        placeholder='e.g Harvard university'
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
              onClick={() => deleteEntry('education', instance.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <Experience
        title='Professional career'
        label='Company'
        type='career'
        field='career'
        placeholder='e.g Google'
        onStateChange={onStateChange}
        company={company}
        isEducation={false}
        storeCareer={storeCareer}
      />
      <ul>
        {storedCareer.map((instance) => (
          <li key={instance.id}>
            {instance.company}
            <button
              className='border-1'
              onClick={() => deleteEntry('storedCareer', instance.id)}
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
  isEducation = true,
  field,
  placeholder,
  storeCareer,
}) {
  return (
    <form>
      <h2 className='text-2xl font-medium mt-2 -mb-1'>{title}</h2>
      <label htmlFor={type}>{label}</label>
      <div>
        <input
          autoComplete='organization'
          className='border-1'
          id={isEducation ? 'academy' : 'company'}
          placeholder={placeholder}
          value={academy}
          onChange={(e) => onStateChange(field, e.target.id, e.target.value)}
        />
        <LengthOfActivity
          id='startYear'
          placeholder='From'
          yearFrom={1970}
          yearTo={2025}
          onStateChange={onStateChange}
          isEducation={isEducation}
        />
        <LengthOfActivity
          id='endYear'
          placeholder='Until'
          yearFrom={1970}
          yearTo={2025}
          onStateChange={onStateChange}
          isEducation={isEducation}
          isOngoing
        />
      </div>
      <div>
        {
          /* If isEducation display education related select comp*/
          isEducation ? (
            <EducationSelect onStateChange={onStateChange} />
          ) : (
            <CareerInputComponent onStateChange={onStateChange} />
          )
        }
        <button
          type='button'
          className='w-25 border-1'
          onClick={isEducation ? storeEducation : storeCareer}
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
  isEducation = true,
}) {
  const years = [];
  for (let y = yearFrom; y <= yearTo; y++) years.push(y);

  return (
    <select
      className='border-1'
      id={id}
      defaultValue=''
      onChange={(e) =>
        onStateChange(
          isEducation ? 'experience' : 'career',
          e.target.id,
          e.target.value
        )
      }
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

function CareerInputComponent({ onStateChange }) {
  return (
    <>
      <label htmlFor='role'>
        Short description of your role in this company
      </label>
      <input
        type='text'
        id='role'
        className='border'
        onChange={(e) => onStateChange('career', e.target.id, e.target.value)}
      />
    </>
  );
}
