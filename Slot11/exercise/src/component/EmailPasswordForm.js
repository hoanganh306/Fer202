import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const EmailPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false); 

  const [password, setPassword] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    setEmailValid(validateEmail(email));
  }, [email]);

  useEffect(() => {
    setPasswordValid(password.length >= 8);
  }, [password]);

  useEffect(() => {
    setFormValid(emailValid && passwordValid);
  }, [emailValid, passwordValid]);

  return (
    <Form>
      <Form.Group controlId="emailInput">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!emailValid}
        />
        <Form.Control.Feedback type="invalid">
          Email không hợp lệ
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="passwordInput">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          isInvalid={!passwordValid}
        />
        <Form.Control.Feedback type="invalid">
          Mật khẩu phải có ít nhất 8 ký tự
        </Form.Control.Feedback>
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!formValid}>
        Submit
      </Button>
    </Form>
  );
};

export default EmailPasswordForm;
