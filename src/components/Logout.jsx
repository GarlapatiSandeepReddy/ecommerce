import React from 'react';
import axios from 'axios';
import port from "../constants";

function Logout() {
    const url = `http://localhost:${port}/logout`;
    const handleLogout = async () => {
        try {
            await axios.get(url);
            // Clear token from localStorage
            localStorage.removeItem('token');
            console.log("Token cleared from local storage");
            // Redirect or perform further actions
            
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
}

export default Logout;
