import React from 'react';
import { IoHeartOutline } from 'react-icons/io5'

import Button from '../Button'

import './ItenVariantions.css'

const ItenVariantions = ({ size }) => {
    return ( 
        <div className="iten-variations">
            <div className="size-config">
                <h2>Dimensões:</h2>
                <span className="size-block">{ size }</span>
            </div>
            <div className="color-config">
                <h2>Cor:</h2>
                <span className="color"></span>
            </div>
            <div className="buy-options">
                <span>
                    <IoHeartOutline style={{cursor: 'pointer'}} />
                </span>
                <Button>Adicionar ao Carrinho</Button>
            </div>
        </div>
     );
}
 
export default ItenVariantions;