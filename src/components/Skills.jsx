import Container from './SectionContainer';

// Component to generate reusable select dropdown menu in given year range
function SelectDropdownComp({ yearFrom, yearTo, status }) {
  if (typeof yearFrom !== 'number' || typeof yearTo !== 'number')
    throw new Error('Year parameters must be of type number');
  else if (yearTo < yearFrom)
    throw new Error('End year must be smaller than start year');

  const years = [];
  // Pushes years from yearFrom to yearTo in to the year array
  for (yearFrom; yearFrom <= yearTo; yearFrom++) years.push(yearFrom);

  return (
    <select>
      <option disabled selected>
        {status}
      </option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

function Experience({ title, type, label }) {
  return (
    <form className="flex flex-col">
      <h2>{title}</h2>
      <label htmlFor={type}>{label}</label>
      <input className="border-1" id={type} />
    </form>
  );
}

export default function Skills() {
  return (
    <Container>
      <h1 className="text-3xl font-bold">
        Employees skills, education and related experience
      </h1>
      <p className="text-1xl font-normal text-gray-700">
        Here you can leave information about you formal education, work
        experience and skills.
      </p>
      <Experience title="Education" label="Academy name" />
      <SelectDropdownComp status="From" yearFrom={2010} yearTo={2025} />
    </Container>
  );
}
