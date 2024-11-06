import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../data/useFetch';

const UserDetails = () => {
    const { id } = useParams();
    const { data: user, error } = useFetch(`https://jsonplaceholder.typicode.com/users/${id}`);

    if (error) return <p>Error loading user data.</p>;
    if (!user) return <p>Loading...</p>;

    return (
        <div className="car-profile">
            <h2>{user.name}</h2>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Address:</strong> {user.address?.street}, {user.address?.city}</p>
            <p><strong>Company:</strong> {user.company?.name}</p>
            <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};

export default UserDetails;
