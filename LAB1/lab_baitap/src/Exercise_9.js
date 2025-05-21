export default function Exercise9(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

  const isTeenager = employees.some(e => e.age >= 10 && e.age <= 20);

  return(
    <p>Is there any teenager employee? {isTeenager ? "Yes" : "No"}</p>
  )
}