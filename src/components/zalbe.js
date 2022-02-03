import { useState, useEffect } from 'react';
import FormaZalbe from './FormaZalbe';


const Zalbe = () => {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch('http://localhost:8000/zalbe').then(res => {
            if (!res.ok) {
                throw Error('Ne moze se fecovati data');
            }
            return res.json();
        }).then(data => {
            console.log(data);
            setData(data);
        }).catch(err => {
            setError(err.message);
        })
    }, []);




    return (
        <div className="zalbe">
            {error && <div>{error}</div>}

            {data && <FormaZalbe zalbe={data}></FormaZalbe>}

        </div>
    );
}

export default Zalbe;