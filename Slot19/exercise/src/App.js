import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PostList from "./components/PostList";
import CreatePost from "./components/CRUD/CreatePost";
import EditPost from "./components/CRUD/EditPost";
import DeletePost from "./components/CRUD/DeletePost";


function App() {
  return (
    <Router>
      <div>
        <h1>Quản lý Bài Viết</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/delete/:id" element={<DeletePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
