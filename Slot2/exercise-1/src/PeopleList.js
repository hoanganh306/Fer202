import PersonDetail from "./PersonDetail";
function PeopleList({ people }) {
    return (
        <ul>
            {people.map((person, index) => (
                <li key={index}>
                    <PersonDetail
                        name={person.name}
                        age={person.age}
                        occupation={person.occupation}
                    />
                </li>
            ))}
        </ul>
    );
}
export default PeopleList