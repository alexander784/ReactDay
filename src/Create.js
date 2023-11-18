import { useState } from 'react'
const Create = () => {
    const [ title, setTitle] = useState('');//track the title
    const [body, setBody] = useState('');
    
    return (
        <div className="create">
            <h2>Add New Blog</h2> 
            <form>
                <label>Blog title</label>
                <input type="text"
                requred
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required>
                        value={body}
                onChange={(e) => setBody(e.target.value)}
                </textarea>
                <label>Blog author:</label>
                <select
                 value={author}
                 onChange={(e)=> setAuthor(e.target.value)}
                 >
                    <option value="mario">mario</option>
                    <option value="mario">yoshi</option>
                    
                </select>
                <button>Add blog</button>


            </form>

        </div>
      );
}
 
export default Create
