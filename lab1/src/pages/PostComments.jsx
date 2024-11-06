import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';

const PostComments = () => {
    const { id } = useParams();
    const { data: post } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const { data: comments } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

    return (
        <div className="car-profile">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h2>Comments</h2>
            <ul>
                {comments.map(comment => (
                    <li key={comment.id}>
                        <strong>{comment.name}</strong> ({comment.email}): {comment.body}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostComments;
