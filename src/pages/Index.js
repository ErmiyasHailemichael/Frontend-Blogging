import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

export default function Index({blogs, createBlogs}) {
    console.log(blogs); // i can see the blogs on the dev tools console
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
    createBlogs(form);
    setForm({
      title: '',
      body: '',
      author: ''
    });
  }

 

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' value={form.title} onChange={handleChange} />
        <input type='text' name='body' value={form.body} onChange={handleChange} />
        <input type='text' name='author' value={form.author} onChange={handleChange} />
        <input type='submit' value='Create Blog' />
      </form>
      {loading ? (
  <h1>Loading...</h1>
) : (
  blogPosts.map((post) => {
    // console.log(post); // Check if post is being mapped correctly - Lauren 
    return (
      <div key={post.id}>
        <Link to={`/blog/${post._id}`}>
          <h1>{post.title}</h1>
        </Link>
        <p>{post.body}</p>
        <p>{post.author}</p>
      </div>
    );
  })
)}
    </section>
  )
}
