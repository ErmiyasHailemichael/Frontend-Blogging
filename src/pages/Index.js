import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Index({blogs, createBlogs}) {
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: '',  
  });

  const handleChange = (e) => {
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogs(form);
    setForm({
      title: '',
      body: '',
      author: ''
    });
  };

  const loaded = () => 
    blogs.map((blog) => (
      <div key={blog.id} className='blog'>
        <Link to={`/blog/${blog.id}`}>
          <h1>{blog.title}</h1>
        </Link>
        <h3>{blog.author}</h3>
        <p>{blog.body}</p>
      </div>
    ));

  const loading = () => {
    return <h1>Loading...</h1>;
  } 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='title'
          value={form.title}
          onChange={handleChange}
          placeholder='Title'
        />
        <input
          type='text'
          name='body'
          value={form.body}
          onChange={handleChange}
          placeholder='Body'
        />
        <input
          type='text'
          name='author'
          value={form.author}
          onChange={handleChange}
          placeholder='Author'
        />
        <input type='submit' value='Create Blog' />
      </form>
      {blogs ? loaded() : loading()}
    </section>
      
  );
}
