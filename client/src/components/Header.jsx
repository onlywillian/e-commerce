import React from 'react';
import { IoHeartOutline, IoBasketOutline } from 'react-icons/io5'

import './Header.css'

const Header = () => {
    return ( 
        <div className="header-content">
            <div className="nav-bar">
                <span>Categorias</span>
                <span>Coleções</span>
                <span>Contato</span>
                <span>Quem somos?</span>
            </div>
            <div className="user-bar">
                <IoHeartOutline style={{cursor: 'pointer'}} />
                <IoBasketOutline style={{cursor: 'pointer'}} />
                <div className="user-image"></div>
            </div>
        </div>
     );
}
 
export default Header;