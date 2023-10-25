import { useState } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setblogs,] = useState([
        {title:'My new website', body: 'Lorem ipsum...', author: 'mario', id:1 },
        {title:'Welcome my party', body: 'Lorem ipsum...', author: 'lex', id:2 },
        {title:'Web dev top tips', body: 'Lorem ipsum...', author: 'mario', id:3 },
    ]);

    const handleDelete = (id) => {
         const newBlogs = blogs.filter(blog => blog.id !==  id);
         setblogs(newBlogs);
    }
    
    return ( 
        <div className="home">
            <Bloglist  blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>
            </div>
    );
            }


            
            
     

 
export default Home;