import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => { 

    const { id } = useParams();
    const [ data: blog, error, isPending ] = useFetch('')
    const history = useHistory();

    const handleClick = () {
        fetch('http://localhost:6001' + blog.id, {
            method: 'DELETE'
        } ).then(() => {
            history.push('/');

        })

    }
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            {error && <div>{ error}</div> }
            { blog && (
                <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                <button onClick={}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;