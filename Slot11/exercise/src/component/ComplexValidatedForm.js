import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const ComplexValidatedForm = () => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [agreed, setAgreed] = useState(false);

  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isFormValid =
      name.trim() !== "" &&
      gender !== "" &&
      country !== "" &&
      agreed;
    setFormValid(isFormValid);
  }, [name, gender, country, agreed]);

  return (
    <Form>
      <Form.Group controlId="nameInput">
        <Form.Label>Họ và tên</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nhập tên của bạn"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={name.trim() === ""}
        />
        <Form.Control.Feedback type="invalid">
          Vui lòng nhập tên
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group>
        <Form.Label>Giới tính</Form.Label>
        <div>
          <Form.Check
            inline
            label="Nam"
            type="radio"
            name="gender"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />
          <Form.Check
            inline
            label="Nữ"
            type="radio"
            name="gender"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        {gender === "" && (
          <div className="text-danger">Vui lòng chọn giới tính</div>
        )}
      </Form.Group>

      <Form.Group controlId="countrySelect">
        <Form.Label>Quốc gia</Form.Label>
        <Form.Control
          as="select"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          isInvalid={country === ""}
        >
          <option value="">-- Chọn quốc gia --</option>
          <option value="vietnam">Việt Nam</option>
          <option value="japan">Nhật Bản</option>
          <option value="usa">Hoa Kỳ</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">
          Vui lòng chọn quốc gia
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="termsCheckbox">
        <Form.Check
          type="checkbox"
          label="Tôi đồng ý với các điều khoản"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          isInvalid={!agreed}
        />
        {!agreed && (
          <div className="text-danger">Bạn phải đồng ý với điều khoản</div>
        )}
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!formValid}>
        Gửi
      </Button>
    </Form>
  );
};

export default ComplexValidatedForm;
