import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './Itens.css';
import Iten from './Iten';

const Itens = () => {
    const [itens, setImage] = useState([]);

    useEffect(async () => {
        const itensList = await axios.get('/api/v1/towels-list');

        setImage(itensList.data.towels.data);
    }, [itens]);

    return ( 
        <div className="itens-container">
            { itens.map(iten => (
                <Iten pic={iten.image}
                    id={iten.id} 
                    name={iten.name} 
                    price={iten.price}
                    
                />
            ))}
        </div>
     );
}
 
export default Itens;