import logo from './logo.svg';
import './App.css';
import ValidatedInput from './component/ValidatedInput';
import EmailPasswordForm from './component/EmailPasswordForm';
import ComplexValidatedForm from './component/ComplexValidatedForm';

function App() {

    return (
    <div className="container mt-5">
      <h2>Bài 4: Form validation </h2>
      <ValidatedInput/>
      <h2>Bài 5: Email & Password Validation</h2>
      <EmailPasswordForm />
      <hr />
      <h2>Bài 6: Form Tổng hợp</h2>
      <ComplexValidatedForm />
    </div>
  );
}

export default App;
