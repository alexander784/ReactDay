import { useState,useEffect } from "react";
import Bloglist from "./Bloglist";
import { isPending } from "q";
import { error } from "console";
import useFetch from "./useFetch";
const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000');
        

    

    
    return ( 
        <div className="home">
            //Conditional
            {blogs && <Bloglist  blogs={blogs} title="All blogs!"/>}
            </div>

    );
            }


            
            
     

 
export default Home;