import React from 'react';
import { IoCaretDown } from 'react-icons/io5'

import './Aside.css'

const Aside = () => {
    return (
        <div className="aside-container">
            <span>Categorias <IoCaretDown /> </span>
            <span>Preços <IoCaretDown /> </span>
            <span>Tamanhos <IoCaretDown /> </span>
            <span>Cores <IoCaretDown /> </span>
        </div>
      );
}
 
export default Aside;