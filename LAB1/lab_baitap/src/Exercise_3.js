export default function Exercise3(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  
  return(
    <table border="1">
      <thead>
        <tr>
          <th>ID / Index</th>
          <th>Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={emp.id || index}>
            <td>{emp.id ?? index}</td>
            <td>{emp.name}</td>
            <td>{emp.department}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}