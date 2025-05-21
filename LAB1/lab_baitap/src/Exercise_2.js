export default function Exercise2(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  return(
    <div>
      {
        employees.map((emp, index)=>(
          <li key={emp.id || index}>
            {emp.name} - {emp.department}
          </li>
        ))
      }
    </div>
  )
}