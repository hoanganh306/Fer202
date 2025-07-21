import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserProfile from "./component/UserProfile";
import UserProfile2 from "./component/UserProfile2";
import MyForm from "./component/MyForm";
import ValidatedForm from "./component/ValidatedForm";

const App = () => {
  const handleSubmitExample2 = (data) => {
    console.log("UserProfile2 đã gửi:", data);
  };

  const handleSubmitExample3 = (data) => {
    console.log("MyForm đã gửi:", data);
  };

  const handleSubmitExample4 = (data) => {
    console.log("ValidatedForm đã gửi:", data);
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">DEMO CẢ 4 VÍ DỤ</h1>

      {/* Ví dụ 1 */}
      <section className="mb-5">
        <h4>Ví dụ 1 – UserProfile (hiển thị thông tin đơn giản)</h4>
        <UserProfile name="Nguyễn Văn A" age={25} />
        <UserProfile name="" age={25} />
        <UserProfile name="Nguyễn Văn B" age="twenty five" />
        <UserProfile name="Nguyễn Văn C" age={null} />
      </section>

      {/* Ví dụ 2 */}
      <section className="mb-5">
        <h4>Ví dụ 2 – UserProfile2 (form có validate tuổi 18–100)</h4>
        <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleSubmitExample2} />
        <UserProfile2 name="Nguyễn Văn B" age="twenty five" onSubmit={handleSubmitExample2} />
        <UserProfile2 name="" age={30} onSubmit={handleSubmitExample2} />
      </section>

      {/* Ví dụ 3 */}
      <section className="mb-5">
        <h4>Ví dụ 3 – MyForm (useReducer + validate đơn giản)</h4>
        <MyForm title="Đăng ký người dùng" onSubmit={handleSubmitExample3} />
      </section>

      {/* Ví dụ 4 */}
      <section className="mb-5">
        <h4>Ví dụ 4 – ValidatedForm (validate nâng cao đầy đủ các trường)</h4>
        <ValidatedForm onSubmit={handleSubmitExample4} />
      </section>
    </div>
  );
};

export default App;
