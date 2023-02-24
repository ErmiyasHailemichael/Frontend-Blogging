import {Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Index from '../pages/Index';
import Show from '../pages/Show';


const URL =  'http://localhost:8000/blog/';

const Main = () => {
    const [blogs, setBlogs] = useState(null);

    // Index
    const getBlogs = async () => {
        const data = await fetch(URL).then((res) => res.json());
        setBlogs(data);
      };


    // Create
    const createBlogs = async (blog) => {
        await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlogs();
    }

    // Update
    const updateBlogs = async (blog, id) => {
        await fetch(URL + id , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog)
        });
        getBlogs();
    }

    // Delete
    const deleteBlogs = async (id) => {
        await fetch(URL + id , {
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
                <Route path='/' element={<Index blogs={blogs} createBlogs={createBlogs} />} />
                <Route path='/blog/:id' element={<Show blogs={blogs} />} 
                updateBlogs={updateBlogs} deleteBlogs={deleteBlogs} />
                
            </Routes>
        </main>
    );  
}

export default Main;