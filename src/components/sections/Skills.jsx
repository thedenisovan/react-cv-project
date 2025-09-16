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
      <ul className='mt-1'>
        {skills.map((skill) => (
          <li key={skill}>
            {skill}
            <button
              className='ml-2 border-1'
              onClick={() => deleteEntry('skills', skill, true)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
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
          onChange={(e) => onStateChange('skills', e.target.id, e.target.value)}
          id='skillInput'
          type='text'
          className='border-1'
          value={skillInput}
        />
        <button
          className='border-1'
          onClick={() => {
            addSkill();
          }}
        >
          Add
        </button>
      </div>
      <SkillList skills={skills} />
    </Container>
  );
}
