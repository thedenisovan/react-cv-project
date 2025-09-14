// Imports all svg files to svg object
const svg = import.meta.glob('../assets/*.svg', {
  eager: true,
  import: 'default',
});

// Component for user personal details
function DetailComponent({ src, alt, data, isAnchor, isGithub }) {
  // Gets icon from svg object with given src
  function getIcon(src) {
    return svg[`../assets/${src}.svg`];
  }
  // If isAnchor, create anchor element to store link to gh or linkedin page, instead of p el
  return (
    <div className='flex'>
      <img className='w-7' src={getIcon(src)} alt={alt} />
      {isAnchor && data !== '' ? (
        <a href={data} target='_blank' rel='noopener noreferrer'>
          {isGithub ? 'My GitHub page' : 'My LinkedIn page'}
        </a>
      ) : (
        <p>{data}</p>
      )}
    </div>
  );
}

function CvHeader({ name, surname, address, email, number, github, linkedin }) {
  return (
    <header>
      <h1>{name + ' ' + surname}</h1>
      <div className='flex'>
        <div className='flex-[.6]'>
          <DetailComponent src='location' alt='Address' data={address} />
          <DetailComponent src='mail' alt='Email address' data={email} />
          <DetailComponent src='phone' alt='Mobile number' data={number} />
        </div>
        <div>
          <DetailComponent
            src='github'
            alt='GitHub webpage'
            data={github}
            isAnchor={true}
            isGithub={true}
          />
          <DetailComponent
            src='linkedin'
            alt='Linkedin page'
            data={linkedin}
            isAnchor={true}
            isGithub={false}
          />
        </div>
      </div>
    </header>
  );
}

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
        index === 2 ? 'block' : 'hidden' // If user is on small device and reaches last page display cv field
      } w-full max-w-xl aspect-[210/297] border-1 m-auto lg:block`}
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
