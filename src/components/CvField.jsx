// Imports all svg files to svg object
const svg = import.meta.glob('../assets/*.svg', {
  eager: true,
  import: 'default',
});

// Component for user personal details
function DetailComponent({ src, alt, data }) {
  // Gets icon from svg object with given src
  function getIcon(src) {
    return svg[`../assets/${src}.svg`];
  }
  return (
    <div>
      <img className='w-7' src={getIcon(src)} alt={alt} />
      <p>{data}</p>
    </div>
  );
}

function CvHeader({ name, surname, address, email, number, github, linkedin }) {
  return (
    <header>
      <h1>{name + ' ' + surname}</h1>
      <div>
        <DetailComponent src='location' alt='Address' data={address} />
        <DetailComponent src='mail' alt='Email address' data={email} />
        <DetailComponent src='phone' alt='Mobile number' data={number} />
        <DetailComponent src='github' alt='GitHub webpage' data={github} />
        <DetailComponent src='linkedin' alt='Linkedin page' data={linkedin} />
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
