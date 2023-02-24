import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Index(props) {
  const [form, setForm] = useState({
    title: '',
    body: '',
    author: ''
  });

  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBlog(form);
    setForm({
      title: '',
      body: '',
      author: ''
    });
  }

  useEffect(() => {
    fetch('/api/blog')
      .then(res => res.json())
      .then(data => {
        setBlogPosts(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' value={form.title} onChange={handleChange} />
        <input type='text' name='body' value={form.body} onChange={handleChange} />
        <input type='text' name='author' value={form.author} onChange={handleChange} />
        <input type='submit' value='Create Blog' />
      </form>
      {loading ?
        <h1>Loading...</h1> :
        blogPosts.map((post) => (
        
          <div key={post.id}>
            <Link to={`/people/${post._id}`}>
          <h1>{post.title}</h1>
        </Link>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <p>{post.author}</p>
          </div>
        ))
      }
    </section>
  )
}
