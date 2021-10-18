import React from 'react';

import './RegisterForm.css';

const RegisterForm = () => {
    return ( 
        <div className="login">
            <h2>Login</h2>
            <p></p>
            <form action="http://localhost:3333/auth/cadastrar" method="POST">
                <label htmlFor="name">Email*</label>
                <input id="name" type="text"/>
                <label htmlFor="pass">Senha*</label>
                <input id="pass" type="text"/>
            </form>
        </div>
    );
}
 
export default RegisterForm;