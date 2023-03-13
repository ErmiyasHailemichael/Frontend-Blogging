import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Index({ blogs, createBlogs }) {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlogs(form);
    setForm({
      title: '',
      body: '',
      author: '',
    });
  };

  const reading = (str, num) => {
    return str?.length > num ? str.slice(0, num) + '...' : str;
  };

  const wordCount = (str) => {
    return str?.split(' ').length;
  };

  const timeToRead = (str) => {
    const wordsPerMinute = 200;
    const words = wordCount(str);
    return Math.ceil(words / wordsPerMinute);
  };

  const loaded = () =>
    blogs.map((blog) => (
      <div key={blog.id} className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <Link to={`/blog/${blog.id}`}>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h1>
          </Link>
          <h3 className="text-gray-600 mb-2">{blog.author}</h3>
          <p className="text-gray-800 mb-2">{reading(blog.body, 50)}</p>
          <span className="text-gray-600">{timeToRead(blog.body)} min read</span>
          <Link to={`/blog/${blog.id}`} className="block mt-4 text-blue-500 hover:text-blue-700 font-semibold">
            Read More
          </Link>
        </div>
      </div>
    ));

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <>
      <section className="container mx-auto p-6">
        <form onSubmit={handleSubmit} className="mb-8">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full"
          />
          <textarea
            name="body"
            value={form.body}
            onChange={handleChange}
            placeholder="Body"
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full h-32"
          ></textarea>
          <input
            type="text"
            name="author"
            value={form.author}
            onChange={handleChange}
            placeholder="Author"
            className="border border-gray-400 rounded-lg py-2 px-4 mb-4 block w-full"
          />
          <input type="submit" value="Publish" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" />
        </form>
      </section>
      <section className="container mx-auto mt-8">
        {blogs ? loaded() : loading()}
      </section>
    </>
  );
}
