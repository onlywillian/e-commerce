import React from 'react';
import { useHistory } from 'react-router';

import './Iten.css'

const Iten = ({ pic, price, name, id }) => {
    const history = useHistory();
    
    function handleItenClick() {
        history.push(`/product/${id}`)
    }

    return ( 
        <div className="iten-content" onClick={handleItenClick}>
            <img src={pic} />
            <h4>{name}</h4>
            <h2>{price}</h2>
        </div>
     );
}
 
export default Iten;