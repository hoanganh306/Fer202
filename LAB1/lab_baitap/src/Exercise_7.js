export default function Exercise7(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];
  // Tạo bản copy để không mutate mảng gốc
  const sortedEmployees = [...employees].sort((a, b) => {
    const deptCompare = (a.department || "").localeCompare(b.department || "");
    if (deptCompare !== 0) return deptCompare;
    // Nếu cùng department thì so tên
    return (a.name || "").localeCompare(b.name || "");
  });
  return(
    <ul>
      {sortedEmployees.map((emp, index) => (
        <li key={emp.id ?? `index-${index}`}>
          {emp.name} - {emp.department}
        </li>
      ))}
    </ul>
  )
}