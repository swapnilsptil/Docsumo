import React from 'react';
import { useAuth } from '../../../ContextProviders/AuthContext';
import './UserCard.scss';

const UserCard = () => {

    let auth = useAuth();
    const {data : {user}} = auth.user;
    console.log('................. auth', user);
    return (
        <div className='user-card'>
            <div className='ds-user-welcome'>Welcome <span className='user'>{user.full_name}</span></div>
            {/* <div>{user.company_name}</div>
            <div>{user.phone_number}</div> */}
        </div>
    )
}

export default UserCard;
