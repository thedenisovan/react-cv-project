// Imports all svg files to svg object
const svg = import.meta.glob('../assets/*.svg', {
  eager: true,
  import: 'default',
});

export default function CvField({
  index,
  name,
  surname,
  address,
  email,
  number,
  github,
  linkedin,
  about,
  skills,
  education,
  storedCareer,
}) {
  return (
    <div
      className={`${
        index === 3 ? 'block' : 'hidden' // If user is on small device and reaches last page display cv field
      } font-[Gill Sans] max-w-xl w-full aspect-[210/297] border-1 m-auto mt-[2rem] lg:block`}
    >
      <CvHeader
        name={name}
        surname={surname}
        address={address}
        email={email}
        number={number}
        github={github}
        linkedin={linkedin}
      />
      <main className='mx-10 mt-2'>
        <section>
          <SectionTitle title='ABOUT ME' />
          <p className='text-[12px] mt-1'>
            {about ||
              'A six-time NBA champion and five-time MVP, known for my competitive drive and clutch performances. I helped popularize basketball worldwide and built a lasting global brand.'}
          </p>
        </section>
        <section className='mt-2'>
          <SectionTitle title='RELEVANT SKILLS' />
          <SkillList skills={skills} />
        </section>
        <section className='mt-2'>
          <SectionTitle title='EDUCATION & CERTIFICATION' />
          <ExperienceComp type={education} />
        </section>
        <section className='mt-2'>
          <SectionTitle title='PROFESSIONAL CAREER' />
          <ExperienceComp type={storedCareer} isEducation={false} />
        </section>
      </main>
    </div>
  );
}

function CvHeader({ name, surname, address, email, number, github, linkedin }) {
  return (
    <header>
      <div className='h-13 p-2 bg-gray-800'>
        <h1 className={`font-bold text-3xl text-white text-center`}>
          {name || surname ? name + ' ' + surname : 'Michael Jordan'}
        </h1>
      </div>
      <div className='mt-2 flex justify-center gap-6'>
        <div>
          <DetailComponent
            src='location'
            alt='Address'
            data={address || 'San Francisco County, San Francisco, CA, USA'}
          />
          <DetailComponent
            src='mail'
            alt='Email address'
            data={email || 'crazy.bull@nba.com'}
          />
          <DetailComponent
            src='phone'
            alt='Mobile number'
            data={number || '+371 2636 51 71'}
          />
        </div>
        <div>
          <DetailComponent
            src='github'
            alt='GitHub webpage'
            data={github || 'https://github.com/thedenisovan'}
            isAnchor={true}
            isGithub={true}
          />
          <DetailComponent
            src='linkedin'
            alt='Linkedin page'
            data={
              linkedin ||
              'https://www.linkedin.com/in/dainis-dilevka-961a332b4/'
            }
            isAnchor={true}
            isGithub={false}
          />
        </div>
      </div>
    </header>
  );
}

// Component for user personal details
function DetailComponent({ src, alt, data, isAnchor, isGithub }) {
  // Gets icon from svg object with given src
  function getIcon(src) {
    return svg[`../assets/${src}.svg`];
  }
  // If isAnchor, create anchor element to store link to gh or linkedin page
  // If !isAnchor, create p element for address, email or number
  return (
    <div className='flex gap-0.5 font-light'>
      <img className={`w-5`} src={getIcon(src)} alt={alt} />
      {isAnchor && data ? (
        <a
          className='underline text-shadow-gray-900 text-[13px] font-normal'
          href={data}
          target='_blank'
          rel='noopener noreferrer'
        >
          {isGithub ? 'My GitHub page' : 'My LinkedIn page'}
        </a>
      ) : (
        <p className='text-[13px] font-medium'>{data}</p>
      )}
    </div>
  );
}

function SectionTitle({ title }) {
  return (
    <>
      <h2 className='text-xl'>{title}</h2>
      <hr />
    </>
  );
}

// Creates lis of skills in cv field
function SkillList({ skills }) {
  return (
    <ul className='list-disc ml-5 mt-0 text-[1rem]'>
      {skills.map((skill) => (
        <li key={skill}>
          <span className='relative -left-2'>{skill}</span>
        </li>
      ))}
    </ul>
  );
}

// Component for education list and job list
function ExperienceComp({ type, isEducation = true }) {
  return (
    <ul>
      {type.map((instance) => (
        <li key={instance.id} className='mb-0 ml-4 list-disc'>
          <div className='relative -left-2'>
            <h3 className='text-s font-semibold'>
              {isEducation ? instance.academy : instance.company}
            </h3>
            <p className='text-sm text-gray-700'>
              <span className='font-medium'>
                {isEducation ? instance.degree : instance.role}
              </span>{' '}
              {isEducation ? '(' + instance.field + ')' : ''}{' '}
              <span className='font-bold text-[1rem]'>
                {instance.startYear} – {instance.endYear}
              </span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
