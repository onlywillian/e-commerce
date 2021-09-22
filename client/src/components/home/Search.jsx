import React from 'react';
import { IoSearchOutline } from 'react-icons/io5'

import './Search.css'

const Search = () => {
    return ( 
        <div className="search-container">
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Escreva Algo..." />
                <div className="search-filter">
                    <span>Todos</span>
                    <span>Toalhas</span>
                    <span>Perfumes</span>
                </div>
            </div>
            <div className="search-button">
                <IoSearchOutline />
            </div>
        </div>
     );
}
 
export default Search;