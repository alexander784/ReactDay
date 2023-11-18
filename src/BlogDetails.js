import { useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {

    const { id } = useParams();
    const [ data: blog, error, isPending ] = useEffect('')
    return ( 
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            {error && <div>{ error}</div> }
            { blog && (
                <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author }</p>
                <div>{ blog.body }</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;