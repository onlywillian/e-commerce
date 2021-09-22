import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

import './ItenDetails.css'
import ItenVariantions from './ItenVariantions';

const ItenDetails = () => {
    const [iten, setIten] = useState([]);

    const params = useParams();

    useEffect(async () => {
        const response = await axios.get("/api/v1/towels-list");
        
        const data = response.data.towels.data.find(element => element.id === params.id);

        console.log(data);

        setIten(data);
    }, []);

    return ( 
        <div className="iten-container">
            <div className="iten-info">
                <i>Home / Itens / {iten.category}</i>
                <h1>{iten.name}</h1>
                <h1>{iten.price}</h1>

                <div className="iten-desc">
                    <p>Informações do Produto:</p>
                    <p>
                        Tenha uma ótima experiência de cecagem com esta toalha incrivel de
                        puro poliester.
                    </p>
                    <p>Detalhes:</p>
                    <p>Poliester...</p>
                </div>
            </div>
            <div className="iten-image">
                <img src={iten.image} alt="Iten Image" />
            </div>
            <ItenVariantions />
        </div>
     );
}
 
export default ItenDetails;