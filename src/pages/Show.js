import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Show(blog, updateBlog, deleteBlog) {
  const { id } = useParams();
  const selectedBlog = blog.find((b) => b.id === parseInt(id));
  const navigate = useNavigate();
  const [editForm, setEditForm] = useState(selectedBlog);

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateBlog(editForm, selectedBlog.id);
    navigate("/");
  };

  const handleDelete = (e) => {
    e.preventDefault();
    deleteBlog(selectedBlog.id);
    navigate("/");
  };

  return (
    <section>
      <h1>{selectedBlog.title}</h1>
      <p>{selectedBlog.body}</p>
      <p>{selectedBlog.author}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={editForm.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="body"
          value={editForm.body}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          value={editForm.author}
          onChange={handleChange}
        />
        <input type="submit" value="Update Blog" />
      </form>
      <button onClick={handleDelete}>Delete Blog</button>
    </section>
  );
}
