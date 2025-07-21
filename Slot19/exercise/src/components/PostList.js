import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy dữ liệu từ localStorage
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    setData(posts);
    setLoading(false);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc muốn xóa bài viết này?')) {
      const updatedPosts = data.filter(post => post.id !== id);
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      setData(updatedPosts);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h1>Danh sách bài viết</h1>
        <Link 
          to="/create" 
          style={{
            backgroundColor: '#28a745',
            color: 'white',
            padding: '10px 20px',
            textDecoration: 'none',
            borderRadius: '4px',
            fontSize: '16px'
          }}
        >
          Tạo Bài Viết Mới
        </Link>
      </div>

      {data.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px' }}>
          <p>Chưa có bài viết nào. <Link to="/create">Tạo bài viết đầu tiên</Link></p>
        </div>
      ) : (
        <div>
          {data.map((post) => (
            <div key={post.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '16px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
              <p style={{ margin: '0 0 10px 0', color: '#666', fontSize: '14px' }}>
                Tác giả: <strong>{post.author}</strong> | Ngày tạo: {post.createdAt}
              </p>
              <p style={{ margin: '0 0 15px 0', lineHeight: '1.6' }}>{post.content}</p>
              <button
                onClick={() => handleDelete(post.id)}
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '8px 16px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PostList;

// json-server --watch db.json
