import { useState, useEffect } from 'react';
import useFetch from '../useFetch';
import { TabelaZalbe } from './TabelaZalbe';

const Zalbe = () => {

    const { data: zalbe, error } = useFetch('http://localhost:8000/zalbe');
    const [tipProblema, setTipProblema] = useState('');
    const [status, setStatus] = useState('');
    const [opis, setOpis] = useState('');
    const [id_radnika, setIdRadnika] = useState('');

    let [podaci,setPodaci] = useState(zalbe);


const handleSubmit = (e) => {
    e.preventDefault();
    const zalba = { tipProblema, status, opis, id_radnika };

    fetch('http://localhost:8000/zalbe', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(zalba)
    }).then(() => {
        Array.from(document.querySelectorAll("input")).forEach(
            input => (input.value = "")
        );
        console.log("nova zalba dodata");
        const novipodaci = [...podaci,zalba];
        setPodaci(novipodaci);
        console.log(podaci);
    });
}
// useEffect(() => {
//     console.log("refresh");
//     console.log(podaci);
// }, [podaci]);
return (
    <div className="zalbe">
        {error && <div>{error}</div>}
        <h2>Prikaz zalbi:</h2>
        {zalbe && <TabelaZalbe zalbe={zalbe}></TabelaZalbe>}
        <br></br>
        <h2>Unos nove zalbe:</h2>
        <form onSubmit={handleSubmit}>
            <label>Tip problema:</label>
            <input type="text" required value={tipProblema} onChange={(e) => setTipProblema(e.target.value)}></input>
            <label>Status:</label>
            <input type="text" required value={status} onChange={(e) => setStatus(e.target.value)}></input>
            <label>Opis:</label>
            <input type="text" required value={opis} onChange={(e) => setOpis(e.target.value)}></input>
            <label>Id radnika uneo:</label>
            <input type="text" required value={id_radnika} onChange={(e) => setIdRadnika(e.target.value)}></input>
            <button>Dodaj zalbu</button>
        </form>
        
    </div>
);
}

export default Zalbe;