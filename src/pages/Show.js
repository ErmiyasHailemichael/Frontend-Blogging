import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Show({ blogs, updateBlogs, deleteBlogs }) {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  const navigate = useNavigate();

  const [ediform, setEditForm] = useState(blog);

  const handleChange = (e) => {
    setEditForm({
      ...ediform,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateBlogs(ediform, id);
    navigate("/");
  };

  const removeBlog = () => {
    deleteBlogs(id);
    navigate("/");
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <h3 className="text-lg font-medium mb-2">{blog.author}</h3>
      <p className="text-gray-600 mb-4">{blog.body}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg mr-2"
        onClick={removeBlog}
      >
        Delete
      </button>
      <form onSubmit={handleUpdate} className="flex flex-col">
        <input
          className="mb-2 p-2 rounded-lg border border-gray-400"
          type="text"
          name="title"
          value={ediform.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <input
          className="mb-2 p-2 rounded-lg border border-gray-400"
          type="text"
          name="body"
          value={ediform.body}
          onChange={handleChange}
          placeholder="Body"
        />
        <input
          className="mb-4 p-2 rounded-lg border border-gray-400"
          type="text"
          name="author"
          value={ediform.author}
          onChange={handleChange}
          placeholder="Author"
        />
        <input
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          type="submit"
          value="Update"
        />
      </form>
    </div>
  );
}
