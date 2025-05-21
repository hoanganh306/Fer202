export default function Exercise4(){
  const employees = [
    { id: 1, name: "Anna", department: "HR", age: 50 },
    { id: 2, name: "Brian", department: "IT", age: 40 },
    { id: 3, name: "Clara", department: "Finance", age: 19 },
    { name: "Ann", department: "Finance", age: 22 },
    { name: "Elisabeth", department: "HR", age: 16 }
  ];

    const averageAge = (...ages) => {
        let sum = 0;
        for (let i = 0; i < ages.length; i++) {
            sum += ages[i];
        }
        return (sum / ages.length).toFixed(2);
        };

    const ages = employees.map(emp => emp.age)    
  return(
    <div>
      <h2>Average Age</h2>
      <p>Average: {averageAge(...ages)}</p>
    </div>
  )
}