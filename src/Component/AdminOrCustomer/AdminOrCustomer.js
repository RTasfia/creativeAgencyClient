import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import Admin from '../Admin/Admin/Admin';
import Order from '../Customer/Order/Order';

const AdminOrCustomer = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://warm-shore-67382.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data));
    }, [])
    console.log(loggedInUser);
    return (
        <div>
            {
                isAdmin ?  <Admin></Admin> : <Order></Order>
            }
            
        </div>
    );
};

export default AdminOrCustomer;