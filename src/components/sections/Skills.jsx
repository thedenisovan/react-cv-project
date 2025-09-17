import Container from './SectionContainer';

export default function Skills({
  onStateChange,
  addSkill,
  skillInput,
  skills,
  deleteEntry,
}) {
  // Creates skill list comp on form side of screen so user can delete skill
  function SkillList({ skills }) {
    return (
      <ul className='flex flex-col gap-1 mb-1'>
        {skills.map((skill) => (
          <li
            key={skill}
            className='flex items-center justify-between border rounded-lg px-4 py-2 shadow-sm bg-white'
          >
            {skill}
            <button
              className='px-3 py-1 bg-red-500 text-white text-sm font-semibold rounded hover:bg-red-600 transition'
              onClick={() => deleteEntry('skills', skill, true)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Container>
      <div className='px-4 bg-gray-50 rounded-lg shadow-md space-y-3 mb-3'>
        <h1 className='text-2xl md:text-3xl font-medium'>About me section</h1>
        <p className='text-xl font-normal text-gray-700'>
          Here you can showcase your skills related to job you apply for.
        </p>
        <label htmlFor='about' className='mt-3'>
          Write short description why you apply for this role
        </label>
        <textarea
          className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none'
          id='about'
          onChange={(e) => onStateChange('skills', e.target.id, e.target.value)}
        ></textarea>
        <label htmlFor='skill' className='mt-3'>
          Write your relevant skill sets
        </label>
        <div>
          <input
            onChange={(e) =>
              onStateChange('skills', e.target.id, e.target.value)
            }
            id='skillInput'
            type='text'
            className='w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-emerald-500 focus:outline-none'
            value={skillInput}
          />
          <button
            className='mb-1 mt-2 px-4 py-2 bg-emerald-600 text-white font-semibold rounded-md hover:bg-emerald-700 transition'
            onClick={() => {
              addSkill();
            }}
          >
            Add
          </button>
        </div>
      </div>
      <SkillList skills={skills} />
    </Container>
  );
}
