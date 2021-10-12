import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5'

import './Search.css'

const Search = () => {
    const [filters, setFilters] = useState([
        {
            value: "Todos",
            marked: true
        },
        {
            value: "Toalhas",
            marked: false
        },
        {
            value: "Perfumes",
            marked: false
        }
    ]);

    function handleFilterClick(value) {
        const newFilters = filters.map(element => {
            if (element.value === value) return {...element, marked: true};
            
            return {...element, marked: false};
        });

        setFilters(newFilters);
    }

    return ( 
        <div className="search-container">
            <div className="search-box">
                <input type="text" className="search-input" placeholder="Escreva Algo..." />
                <div className="search-filter">
                    {filters.map(filter => (
                        <span 
                            style={filter.marked ? {backgroundColor: 'black', color: 'white'} : {}}

                            onClick={() => handleFilterClick(filter.value)}
                        >
                            {filter.value}
                        </span>
                    ))}
                </div>
            </div>
            <div className="search-button">
                <IoSearchOutline />
            </div>
        </div>
     );
}
 
export default Search;