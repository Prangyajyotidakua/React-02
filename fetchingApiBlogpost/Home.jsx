import { useState, useEffect } from 'react';
import BlogList from './BlogList';
const Home = () => {
    const [blogs, setBlogs] = useState(null);
        useEffect(() => {
            fetch("http://localhost:8000/blogs")
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setBlogs(data);
                });
        }, []);
        return (
            <div>

                {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

            </div>

        );

    }
    
 export default Home


 /**to run json data we need to run 2 terminal at a time 
  * 
  * 1.  json-server --watch data/db.json --port 8000
  * 2.npm start
  * 
 */
 //run on server and set server
 // json-server --watch data/db.json --port 8000
 // 
