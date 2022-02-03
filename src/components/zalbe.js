import { useState, useEffect } from 'react';
import FormaZalbe from './FormaZalbe';
// import useFetch from '../useFetch';
import { TabelaZalbe } from './TabelaZalbe';

const Zalbe = () => {

    //const { data: zalbe, error } = useFetch('http://localhost:8000/zalbe');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    // const [tipProblema, setTipProblema] = useState('');
    // const [status, setStatus] = useState('');
    // const [opis, setOpis] = useState('');
    // const [id_radnika, setIdRadnika] = useState('');
    // const [timer, setTimer] = useState(false);


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
    },[]);


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const zalba = { tipProblema, status, opis, id_radnika };

    //     fetch('http://localhost:8000/zalbe', {
    //         method: 'POST',
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(zalba)
    //     }).then(() => {
    //         Array.from(document.querySelectorAll("input")).forEach(
    //             input => (input.value = "")
    //         );
    //         console.log("nova zalba dodata");
    //         // if (timer) {
    //         //     setTimer(false);
    //         // } else {
    //         //     setTimer(true);
    //         // }
    //     });
    // }

    return (
        <div className="zalbe">
            {error && <div>{error}</div>}
            
            {data && <FormaZalbe zalbe={data}></FormaZalbe>}
            
            

        </div>
    );
}

export default Zalbe;