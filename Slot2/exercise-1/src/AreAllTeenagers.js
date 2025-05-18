export default function AreAllTeenager(props){
    const areAllTeenager = props.people.every(person => person.age <= 20)
    //* every: Kiểm tra tất cả phần tử thỏa điều kiện
    return(
    <div>
        {
            areAllTeenager ? (
                <p>All are Teenager</p>
            ) : (
                <p>All are not Teenager</p>
                )
        }
    </div>
    )
}