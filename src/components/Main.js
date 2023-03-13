import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../pages/Index";
import Show from "../pages/Show";

const Main = () => {
  const [blogs, setBlogs] = useState([]);

  const url = `https://final-jwwb.onrender.com/blogs/`;

  const getBlogs = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setBlogs(data);
  };

  const createBlogs = async (blog) => {
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(blog),
    });
    getBlogs();
  };

  const updateBlogs = async (blog, id) => {
    await fetch(url + id + "/", {
      method: "put",
      headers: {
        "Content-Type": "Application/json",
      },
      body: JSON.stringify(blog),
    });
    getBlogs();
  };

  const deleteBlogs = async (id) => {
    await fetch(url + id + "/", {
      method: "delete",
    });
    getBlogs();
  };
  
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <main className="p-4">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Index
              blogs={blogs}
              createBlogs={createBlogs}
            />
          }
        />
        <Route
          path="/blog/:id"
          element={
            <Show
              blogs={blogs}
              updateBlogs={updateBlogs}
              deleteBlogs={deleteBlogs}
            />
          }
        />
        {/* <Route
          path="/write"
          element={
            <Show
              blogs={blogs}
              createBlogs={createBlogs}
            />
          }
        /> */}
      </Routes>
    </main>
  );
};

export default Main;
