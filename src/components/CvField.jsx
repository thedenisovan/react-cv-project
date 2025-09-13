export default function CvField({ name, index }) {
  return (
    <section
      className={`${
        index === 2 ? 'block' : 'hidden' // If user is on small device and reaches last page display cv field
      } w-full max-w-xl aspect-[210/297] bg-[#ff0000] m-auto lg:block`}
    >
      <h1>{name}</h1>
    </section>
  );
}
