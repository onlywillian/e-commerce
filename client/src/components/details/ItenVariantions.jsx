import React from 'react';
import { IoHeartOutline } from 'react-icons/io5'

import Button from '../Button'

const ItenVariantions = () => {
    return ( 
        <div className="iten-variations">
            <div className="size-config">
                <h2>Tamanhos:</h2>
                <span className="size-block">70 x 140</span>
            </div>
            <div className="color-config">
                <h2>Color:</h2>
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