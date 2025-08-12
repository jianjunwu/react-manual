import React from 'react';

function UserProfile() {
    const user = {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St, Anytown, USA'
    };

    return ( 
        <div> 
            <h2>Name: {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>
        </div>
    );
    
}

export default UserProfile;