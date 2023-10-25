import { useState } from "react";
const Home = () => {
    const [blogs, setblogs,] = useState([
        {title:'My new website', body: 'Lorem ipsum...', author: 'mario', id:1 },
        {title:'Welcome my party', body: 'Lorem ipsum...', author: 'lex', id:2 },
        {title:'Web dev top tips', body: 'Lorem ipsum...', author: 'james', id:3 },
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h1>{blog.title}</h1>
                    <p>Written by {blog.author}</p>

                    </div>
            ))}
            </div>
    );
            }


            
            
     

 
export default Home;