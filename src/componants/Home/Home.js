import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    return (
        <div>
            <h2>Headlines: {posts.length}</h2>
            {
                posts.map(posts => <Post posts={posts}></Post>)
            }
        </div>
    );
};

export default Home;