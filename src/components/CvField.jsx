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
}) {
  return (
    <section
      className={`${
        index === 3 ? 'block' : 'hidden' // If user is on small device and reaches last page display cv field
      } font-[Gill Sans] max-w-xl w-full aspect-[210/297] border-1 m-auto lg:block`}
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
    </section>
  );
}

// Component for user personal details
function DetailComponent({ src, alt, data, isAnchor, isGithub }) {
  // Gets icon from svg object with given src
  function getIcon(src) {
    return svg[`../assets/${src}.svg`];
  }
  // If isAnchor, create anchor element to store link to gh or linkedin page, instead of p el
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
            data={
              address ? address : 'San Francisco County, San Francisco, CA, USA'
            }
          />
          <DetailComponent
            src='mail'
            alt='Email address'
            data={email ? email : 'crazy.bull@nba.com'}
          />
          <DetailComponent
            src='phone'
            alt='Mobile number'
            data={number ? number : '+371 2636 51 71'}
          />
        </div>
        <div>
          <DetailComponent
            src='github'
            alt='GitHub webpage'
            data={github ? github : 'https://github.com/thedenisovan'}
            isAnchor={true}
            isGithub={true}
          />
          <DetailComponent
            src='linkedin'
            alt='Linkedin page'
            data={
              linkedin
                ? linkedin
                : 'https://www.linkedin.com/in/dainis-dilevka-961a332b4/'
            }
            isAnchor={true}
            isGithub={false}
          />
        </div>
      </div>
    </header>
  );
}
