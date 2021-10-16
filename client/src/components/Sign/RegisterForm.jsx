import React from 'react';

import './RegisterForm.css';

const RegisterForm = () => {
    return ( 
        <form action="http://localhost:3333/auth/cadastrar">
            <label htmlFor="">Olá</label>
            <input type="text" />
        </form>
     );
}
 
export default RegisterForm;