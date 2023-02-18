import React, {useState} from 'react'

const Editor = ({onsubmit}) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onsubmit({title, content})
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Editor