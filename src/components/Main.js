import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from '../pages/Index';
import Show from '../pages/Show';




export default function Main() {
    const [blogs, setBlogs] = useState(null);

    // Index
    const getBlogs = async () => {
        const data = await fetch('https://localhost:8000/blog/').then((res) => res.json());
        setBlogs(data);
    }

    // Create
    const createBlog = async (blog) => {
        await fetch('https://localhost:8000/blog/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlogs();
    }

    // Update
    const updateBlog = async (blog, id) => {
        await fetch('https://localhost:8000/blog/'+ id , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlogs();
    }

    // Delete
    const deleteBlog = async (id) => {
        await fetch('https://localhost:8000/blog/'+ id , {
            method: 'DELETE'
        });
        getBlogs();
    }

    useEffect(() => {
        getBlogs();
    }, []);

    return (
        <main>
            <Routes>
                <Route exact path='/' element={<Index blogs={blogs} createBlog={createBlog} />} />
                <Route path='/:id' element={<Show blogs={blogs} />} updateBlog={updateBlog} deleteBlog={deleteBlog} />
                
            </Routes>
        </main>
    );  
}
