import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Home = () => {
    const {user,role}=useContext(AuthContext)
    return (
        <div>
            <h1>This is home page </h1>
            <h1>{user?.displayName}</h1>
            <p>{role}ppp</p>
            <h1>{user?.email}</h1>
            <img src={user?.photoURL} alt="" />
            
        </div>
    );
};

export default Home;