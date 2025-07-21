import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
      }
    };
    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedPost = { title, content };

    try {
      await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
      setStatus("Bài viết đã được cập nhật!");
      navigate("/");
    } catch (error) {
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  return (
    <div>
      <h1>Chỉnh sửa bài viết</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tiêu đề"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        /><br /><br />
        <textarea
          placeholder="Nội dung"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        /><br />
        <button type="submit">Cập nhật bài viết</button>
      </form>
      <p>{status}</p>
    </div>
  );
};

export default EditPost;
