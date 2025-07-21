// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";  // Import Link từ react-router-dom

// const PostList4 = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   // Use useEffect to fetch data when the component mounts
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/posts");
//         setData(response.data); // Save response data to state
//         setLoading(false); // Mark loading as complete
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false); // Make sure to stop loading on error
//       }
//     };

//     fetchData();
//   }, []); // Empty array ensures this runs only once when the component mounts

//   if (loading) {
//     return <div>Đang tải...</div>; // Show loading message while data is being fetched
//   }

//   if (!data || data.length === 0) {
//     return <div>Không có bài viết nào!</div>; // Show a message if no posts are available
//   }

//   return (
//     <div>
//       <h1>Danh sách bài viết</h1>
//       <button>
//         <Link to="/create">Tạo bài viết mới</Link>  {/* Button Create dẫn đến trang CreatePost */}
//       </button>
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.content}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default PostList4;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const PostList4 = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy dữ liệu:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/posts/${id}`);
      setData(data.filter((post) => post.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa bài viết:", error);
    }
  };

  if (loading) {
    return <div>Đang tải...</div>;
  }

  if (!data || data.length === 0) {
    return <div>Không có bài viết nào!</div>;
  }

  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <button>
        <Link to="/create">Tạo bài viết mới</Link>
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <div>
              <Link to={`/edit/${post.id}`}>Chỉnh sửa</Link>
              <button onClick={() => handleDelete(post.id)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList4;



