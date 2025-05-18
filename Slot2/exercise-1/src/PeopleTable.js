function PeopleTable({ people }) {
  return (
    <table border="1" >
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {people.map((person, index) => (
          <tr key={index}>
            <td>{person.name}</td>
            <td>{person.age}</td>
            <td>{person.occupation}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default PeopleTable