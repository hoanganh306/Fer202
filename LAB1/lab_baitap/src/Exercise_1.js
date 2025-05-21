export default function Exercise1(){
  const employee = { name: "John Doe", age: 30, department: "IT" };
  return(
    <div>
      <p>Tên: {employee.name}</p>
      <p>Tuổi {employee.age}</p>
      <p>Nghề nghiệp: {employee.department}</p>
    </div>
  )
}