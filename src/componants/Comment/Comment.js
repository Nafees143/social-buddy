import React, { useState, useEffect } from 'react';
import './Comment.css'
const Comment = (props) => {

    const [image, setImage] = useState([]);

    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/photos/${props.comment.id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setImage(data));
    })

    const {thumbnailUrl} = image;

    return (
        <div className = "comment-img">
            <div className = "comment-style">
            <h3>Name: {props.comment.name}</h3>
            <h3>Email: {props.comment.email}</h3>
            <h3>ID: {props.comment.id}</h3>
            <h3>Body: {props.comment.body}</h3>
            </div>
            <div className = "img-style">
                <img src={thumbnailUrl} alt=""/>
            </div>
            
        </div>
    );
};

export default Comment;