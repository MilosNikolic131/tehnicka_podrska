import { useState, useEffect } from 'react';
import Forma from './Forma';


const Osoblje = () => {


    const [data, setData] = useState(null);
    const [error, setError] = useState(null);



    useEffect(() => {
        fetch('http://localhost:8000/radnici').then(res => {
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
        <div className="osoblje">
            {error && <div>{error}</div>}

            {data && <Forma radnici={data}></Forma>}

        </div>
    );
}

export default Osoblje;