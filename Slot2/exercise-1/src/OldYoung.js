export default function OldYoungPerson(props){
    let youngPerson = props.people[0]
    let oldPerson = props.people[0]
    for(let i = 1; i< props.people.length;i++){
        const person = props.people[i]

        if(person.age < youngPerson.age){
            youngPerson = person
        }

        if(person.age > oldPerson.age){
            oldPerson = person
        }
    }
    console.log(youngPerson)
    return(
        <div>
            <h3>Youngest Person</h3>
            <p>{youngPerson.name}</p>
            <h3>Oldest Person</h3>
            <p>{oldPerson.name}</p>
        </div>
    )
}