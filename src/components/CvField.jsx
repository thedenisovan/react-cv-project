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

export default function CvField({ name, index, address }) {
  return (
    <section
      className={`${
        index === 2 ? 'block' : 'hidden' // If user is on small device and reaches last page display cv field
      } w-full max-w-xl aspect-[210/297] border-1 m-auto lg:block`}
    >
      <h1>{name}</h1>
      <div>
        <div>
          <DetailComponent src='location' alt='Address' data={address} />
        </div>
        <div>
          <DetailComponent src='mail' alt='Email address' data={address} />
        </div>
        <div>
          <DetailComponent src='phone' alt='Mobile number' data={address} />
        </div>
        <div>
          <DetailComponent src='github' alt='GitHub webpage' data={address} />
        </div>
        <div>
          <DetailComponent
            src='linkedin'
            alt='Linked in webpage'
            data={address}
          />
        </div>
      </div>
    </section>
  );
}
