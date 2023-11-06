import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
const Home = () => {
    const [blogs, setblogs,] = useState(null);
        

    //Function to delete the blog
    const handleDelete = (id) => {
         const newBlogs = blogs.filter(blog => blog.id !==  id);
         setblogs(newBlogs);
    }

    // Use the hook
    //Pass the useEffect as an Argument
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setblogs(data)
        })
    }, []);
    
    return ( 
        <div className="home">
            {blogs && <Bloglist  blogs={blogs} title="All blogs!" handleDelete={handleDelete}/>}
            </div>

    );
            }


            
            
     

 
export default Home;