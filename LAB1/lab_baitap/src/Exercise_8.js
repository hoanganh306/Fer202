export default function Exercise8(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  // Nhóm nhân viên theo department
  const groups = employees.reduce((acc, emp) => {
    const dept = emp.department || "Unknown";
    if (!acc[dept]) acc[dept] = [];
    acc[dept].push(emp);
    return acc;
  }, {});
  return(
    <div>
      {Object.entries(groups).map(([dept, emps]) => (
        <div key={dept}>
          <h3>{dept}</h3>
          <ul>
            {emps.map((emp, index) => (
              <li key={emp.id ?? `index-${index}`}>{emp.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}