import TeenagerList from "./TeenagerList";
import FirstTeenager from "./FirstTeenager";
import PeopleList from "./PeopleList";
import PeopleTable from "./PeopleTable";
import PersonDetail from "./PersonDetail";
import Sort from "./Sort";
import AreAllTeenager from "./AreAllTeenagers";
import GroupOccupation from "./GroupOccu";
import OldYoungPerson from "./OldYoung";
import AverageAges from "./AverageAge";

function People(){

    const people = [
        { name: "Hoàng Anh", age: "21", occupation: "Student" },
        { name: "Lê Ngọc", age: "25", occupation: "Doctor" },
        { name: "Văn Linh", age: "16", occupation: "Student" },
        { name: "Huy Hoàng", age: "27", occupation: "Pilot" },
        { name: "Tiến Đạt", age: "14", occupation: "Student" },
        { name: "Thành Đạt", age: "17", occupation: "Student" },
        { name: "Gia Bảo", age: "24", occupation: "Pilot" },
        { name: "Nhật Huy", age: "26", occupation: "Doctor" },
        { name: "Gia Khánh", age: "21", occupation: "Doctor" }
        
    ];

    return (
        <div>
            <h1>First person detail</h1>
            <PersonDetail
                name={people[0].name}
                age={people[0].age}
                occupation={people[0].occupation}
            />

            <h1>People List</h1>
            <PeopleList people={people} />

            <h1>People Table</h1>
            <PeopleTable people={people}/>

            <h1>First Teenager</h1>
            <FirstTeenager people={people}/>

            <h1>Teenager List</h1>
            <TeenagerList people={people}/>

            <h1>Are All Teenager?</h1>
            <AreAllTeenager people={people}/>

            <h1>Sorted List</h1>
            <Sort people={people}/>

            <h1>Group Occupation</h1>
            <GroupOccupation people={people}/>

            <h1>Oldest - Youngest Person</h1>
            <OldYoungPerson people={people}/>

            <h1>Average Ages by Occupation</h1>
            <AverageAges people={people}/>
        </div>
    );  
}
export default People