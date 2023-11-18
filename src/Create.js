import { useState } from 'react'
const Create = () => {
    const [ title, setTitle] = useState('');//track the title
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = {title,body,author };
        fetch('', {
            method:'POST',
            headers:{ 'Content-Type': "application/json" },
            body:JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
            

        })
    }
    
    return (
        <div className="create">
            <h2>Add New Blog</h2> 
            <form onSubmit={}>
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
                {!isPending && <button>Add blog</button>}
                {!isPending && <button disabled>Adding blog...</button>}


            </form>

        </div>
      );
}
 
export default Create
