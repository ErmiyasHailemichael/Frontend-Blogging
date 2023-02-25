import {useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';

export default function Show({blogs, updateBlogs, deleteBlogs}) {
  const {id} = useParams();
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
    navigate('/');
  }

  const removeBlog = () => {
    deleteBlogs(id);
    navigate('/');
  };

  return (
    <div>
      <h1>{blog.title}</h1>
      <h3>{blog.author}</h3>
      <p>{blog.body}</p>
      <button id = 'Delete' onClick={removeBlog}>Delete</button>
      <form onSubmit={handleUpdate}>
        <input
          type='text'
          name='title'
          value={ediform.title}
          onChange={handleChange}
          placeholder='Title'
        />
        <input
          type='text'
          name='body'
          value={ediform.body}
          onChange={handleChange}
          placeholder='Body'
        />
        <input
          type='text'
          name='author'
          value={ediform.author}
          onChange={handleChange}
          placeholder='Author'
        />
        <input type='submit' value='Update' />
      </form>
    </div>
  );
}