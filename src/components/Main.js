import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from './pages/Index';
import Show from './pages/Show';


const URL = 'https://localhost:8000/blog/';

export default function Main() {
    const [blog, setBlog] = useState(null);

    // Index
    const getBlog = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setBlog(data);
    }

    // Create
    const createBlog = async (blog) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlog();
    }

    // Update
    const updateBlog = async (blog, id) => {
        await fetch(URL + id + '/', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlog();
    }

    // Delete
    const deleteBlog = async (id) => {
        await fetch(URL + id + '/', {
            method: 'DELETE'
        });
        useEffect(() => {
        getBlog();
    }, []);

    return (
        <main>
            <Routes>
                <Route path='/' element={<Index blog={blog} />} />
                <Route path='/:id' element={<Show blog={blog} />} />
            </Routes>
        </main>
    );  
}  

    