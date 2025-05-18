export default function Sort(props){
    const SortedList = [...props.people].sort((a,b)=> a.occupation.localeCompare(b.occupation))
    const SortedAgeList = [...SortedList].sort((a,b) => a.age.localeCompare(b.age))
    return(
        <ul>
            {SortedAgeList.map(item => (
                <li>
                    <p key={item.id}>Name: {item.name}</p>
                    <p key={item.id}>age: {item.age}</p>
                    <p key={item.id}>Name: {item.occupation}</p>                    
                </li>
                
            ))}
        </ul>
    )
}