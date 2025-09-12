import Container from "./SectionContainer"

export default function Skills({className}) {
  return (
    <Container>
      <h1 className={className}>Employees skills and experience</h1>
      <p className="text-1xl font-normal text-gray-700">
        Here you can leave information about you formal education, work experience and skills.
      </p>
      <input type="text" />
    </Container>
  )
}