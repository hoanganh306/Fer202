import 'bootstrap/dist/css/bootstrap.min.css';
import './ex5.css';

const students = [
  {
    id: 'DE160182',
    name: 'Nguyễn Hữu Quốc Khánh',
    location: 'DaNang',
     img: '/image/st1.png'
  },
  {
    id: 'DE160377',
    name: 'Choy Vinh Thiện',
    location: 'QuangNam',
    img: '/image/st2.png'
  },
  {
    id: 'DE160547',
    name: 'Đỗ Nguyễn Phúc',
    location: 'QuangNam',
    img: '/image/st3.png'
  },
  {
    id: 'DE170049',
    name: 'Lê Hoàng Minh',
    location: 'DaNang',
    img: '/image/st4.png'
  },
];

const StudentCard = ({ student }) => (
  <div className="card">
    <img src={student.img} alt={student.name} className="card-img-top" />
    <div className="card-body">
      <h6>{student.id}</h6>
      <p>{student.name}</p>
      <p>{student.location}</p>
      <div className="form-check">
        <input className="form-check-input" checked="Absent" type="radio" name={student.id} id={`${student.id}-absent`} />
        <label className="form-check-label" htmlFor={`${student.id}-absent`}>Absent</label>
        <input className="form-check-input ms-3" type="radio" name={student.id} id={`${student.id}-present`} />
        <label className="form-check-label" htmlFor={`${student.id}-present`}>Present</label>
      </div>
      <button className="btn btn-warning mt-2">Submit</button>
    </div>
  </div>
);

const StudentPage = () => {
  return (
    <div>
      {/* Header */}
      <div className="header d-flex justify-content-between align-items-center px-4 py-2">
        <div className="d-flex align-items-center">
          <img src="/image/fpt.jpg" alt="FPT Logo" className="logo me-2" />
          <span className="nav-links">
            <a href="#">Trang chủ</a>
            <a href="#">Ngành học</a>
            <a href="#">Tuyển sinh</a>
            <a href="#">Sinh viên</a>
          </span>
        </div>
        <div className="search">
          <label>Search: </label>
          <input type="text" />
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        <img src="/image/banner.jpg" alt="Banner" />
      </div>

      {/* Breadcrumb */}
      <div className="breadcrumb px-5 py-2">
        <span>Home</span> / <span>Students</span>
      </div>

      {/* Title */}
      <h3 className="text-center my-3">Students Detail</h3>

      {/* Student Cards */}
      <div className="container">
        <div className="row">
          {students.map((student, index) => (
            <div className="col-12 col-md-6 mb-4" key={index}>
              <StudentCard student={student} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer text-white py-4">
        <div className="container d-flex justify-content-between">
          <div>
            <h6>Our Address</h6>
            <p>Khu đô thị FPT Đà Nẵng</p>
            <p>+0822111111</p>
            <p>+82 8276 4321</p>
            <p>thuctap@fpt.edu.vn</p>
          </div>
          <div>
            <p>&copy; Copyright 2023</p>
            <div className="social-icons">
              <i className="bi bi-google"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-linkedin"></i>
              <i className="bi bi-twitter"></i>
              <i className="bi bi-youtube"></i>
              <i className="bi bi-envelope"></i>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StudentPage;