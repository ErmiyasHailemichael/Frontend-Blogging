import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from '../pages/Index';
import Show from '../pages/Show';


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
        getBlog();
    }

    useEffect(() => {
        getBlog();
    }, []);

    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Index blog={blog} createBlog={createBlog} />} />
                <Route path='/:id' element={<Show blog={blog} />} updateBlog={updateBlog} deleteBlog={deleteBlog} />
                
            </Routes>
        </main>
    );  
}
