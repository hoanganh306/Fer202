import PersonDetail from "./PersonDetail"

function FirstTeenager({people}){
    const firstTeenager = people.find(person => person.age <= 20)
    //* find() :Tìm một phần tử đầu tiên thỏa điều kiện	
    //* Dừng ngay khi tìm được phần tử đầu tiên	
    //* Trả về object
    return(
        <div>
            {
                firstTeenager && (
                    <PersonDetail
                        name={firstTeenager.name}
                        age={firstTeenager.age}
                        occupation={firstTeenager.occupation}
                    />
                )
            }
                    
        </div>
    )
}
export default FirstTeenager