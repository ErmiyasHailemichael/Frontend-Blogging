import { Link } from 'react-router-dom';
import { useState } from 'react';
import App from '../App.css';

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

  const reading = (str, num) => {
    return str?.length > num ? str.slice(0, num) + '...' : str;
  }

  const wordCount = (str) => {
    return str?.split(' ').length;
  }

  const timeToRead = (str) => {
    const wordsPerMinute = 200;
    const words = wordCount(str);
    return Math.ceil(words / wordsPerMinute);
  }


  const loaded = () => 
    blogs.map((blog) => (
      <div key={blog.id} className='card'>
        <Link to={`/blog/${blog.id}`}>
          <h1>{blog.title}</h1>
        </Link>
        <h3>{blog.author}</h3>
        <p>{reading(blog.body, 50)}</p>
        <span>{timeToRead(blog.body)} min read</span>
        <Link to={`/blog/${blog.id}`} className="read-more-link">
          Read More
        </Link>
      </div>
    ));

  const loading = () => {
    return <h1>Loading...</h1>;
  } 

  return (
    <section className='container'>
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
        <input type='submit' value='Publish' />
      </form>
      {blogs ? loaded() : loading()}
    </section>
      
  );
}
