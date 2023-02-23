import {Link} from 'react-router';
import React from 'react';
import { useState, useEffect } from 'react';

export default function Index(blog, createBlog) {
    const [form, setForm] = useState({
        title: '',
        body: '',
        author: ''
    });

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    } 

    const handleSubmit = (e) => {
        e.preventDefault();
        createBlog(form);

        setForm({
            title: '',
            body: '',
            author: ''
        });


        const loaded = () => {
            blog.map((blog) => {
                return (
                    <div key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.body}</p>
                        <p>{blog.author}</p>
                    </div>
                );
            });
} }}
 const  loading = () => <h1>loading</h1>

 return (
    <section>
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' value={form.title} onChange={handleChange} />
            <input type='text' name='body' value={form.body} onChange={handleChange} />
            <input type='text' name='author' value={form.author} onChange={handleChange} />
            <input type='submit' value='Create Blog' />
        </form>
    </section>
 )
    