import { useState } from "react";

export default function Write({ createBlogs }) {
  const [form, setForm] = useState({
    title: "",
    body: "",
    author: "",
  });

  const handleChange = (e) => {
    // publish page
    setForm((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    // publish page
    e.preventDefault();
    createBlogs(form);
    setForm({
      title: "",
      body: "",
      author: "",
    });
  };

  return (
    <section className="container mx-auto p-4">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <lable htmlFor="title" className="block text-gray-700 font bold mb-2">
            Title
          </lable>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <div className="mb-4">
          <lable htmlFor="body" className="block text-gray-700 font bold mb-2">
            Body
          </lable>
        <input
          type="text"
          name="body"
          value={form.body}
          onChange={handleChange}
          placeholder="Body"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <div className="mb-4">
          <lable htmlFor="author" className="block text-gray-700 font bold mb-2">
            Author
          </lable>

        <input
          type="text"
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        </div>
        <div className=" flex items-center justify-center">

        <input type="submit" value="Publish"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        />
        </div>
      </form>
    </section>
  );
}
