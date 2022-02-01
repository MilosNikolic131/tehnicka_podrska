import { useState } from 'react';
import useFetch from '../useFetch';
import { TabelaV2 } from './TabelaV2';

const Osoblje = () => {

    const { data: radnici, error } = useFetch('http://localhost:8000/radnici');
    const [imePrezime, setIme] = useState('');
    const [DatumZaposlenja, setDatum] = useState('');
    const [JMBG, setJMBG] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        const radnik = { imePrezime, DatumZaposlenja, JMBG };

        fetch('http://localhost:8000/radnici', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(radnik)
        }).then(() => {
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            );
            console.log("novi radnik dodat");
        });
    }

    return (
        <div className="osoblje">
            {error && <div>{error}</div>}
            <h2>Prikaz naseg osoblja:</h2>
            {radnici && <TabelaV2 radnici={radnici}></TabelaV2>}
            <br></br>
            <h2>Unos novog radnika:</h2>
            <form onSubmit={handleSubmit}>
                <label>Ime i prezime:</label>
                <input type="text" required value={imePrezime} onChange={(e) => setIme(e.target.value)}></input>
                <label>Datum zaposlenja:</label>
                <input type="text" required value={DatumZaposlenja} onChange={(e) => setDatum(e.target.value)}></input>
                <label>JMBG:</label>
                <input type="text" required value={JMBG} onChange={(e) => setJMBG(e.target.value)}></input>
                <button>Dodaj radnika</button>
            </form>
        </div>
    );
}

export default Osoblje;