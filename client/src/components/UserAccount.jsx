import React from 'react';
import { useHistory } from 'react-router-dom';
import { IoPersonOutline } from 'react-icons/io5';

import './UserAccount.css';

const UserAccount = () => {
    const history = useHistory();

    function handleClick() {
        history.push("/registrar");
    }

    return ( 
        <div className="user-account" onClick={handleClick}>
            <IoPersonOutline />
        </div>
     );
}
 
export default UserAccount;