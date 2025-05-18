export default function GroupOccupation(props){
    const groupOccu = {}
    props.people.forEach(
        person => {
            const key = person.occupation
            if(!groupOccu[key]){
                groupOccu[key] = []
            }
        groupOccu[key].push(person)

    });

    //* Object.entries():  lấy cả key và value
    //* Object.key(): chỉ lấy key
    return(
        <div>
        {
            Object.keys(groupOccu).map((occupation)=>
                <div key={occupation}>
                    <h3>{occupation}</h3>
                    {
                        groupOccu[occupation].map((person)=>(
                            <li>{person.name}</li>
                        ))
                    }
                </div>
            )
        }
        </div>
    )
}