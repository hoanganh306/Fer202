import PersonDetail from "./PersonDetail"

function TeenagerList({people}){
    const Teenager = people.filter(person => person.age <= 20)
    //* filter(): Lọc ra tất cả phần tử thỏa điều kiện
    //* Duyệt hết mảng
    //* Trả về một mảng mới chứa các phần tử thỏa điều kiện
    return(
        <ul>
            {
                Teenager.map((person, index) => (
                    <li key={index}>
                        {
                             (
                                <PersonDetail
                                    name={person.name}
                                    age={person.age}
                                    occupation={person.occupation}
                                />
                            )
            }
                    </li>
                ))
            }
        </ul>
    )
}
export default TeenagerList