import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Alert } from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    const newPost = { title, content };

    try {
      await axios.post("http://localhost:3000/posts", newPost);
      setStatus("Tạo bài viết thành công!");
      navigate("/posts");
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus("Đã xảy ra lỗi khi tạo bài viết.");
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="mb-4">Tạo bài viết mới</h2>
      {status && <Alert variant={status.includes("thành công") ? "success" : "danger"}>{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Nhập nội dung bài viết"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Tạo bài viết
        </Button>
      </Form>
    </Container>
  );
};

export default CreatePost;