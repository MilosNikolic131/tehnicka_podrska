import { useState } from 'react';
import useFetch from '../useFetch';
import { useHistory } from 'react-router-dom';
import { TabelaOsoblja } from './TabelaOsoblja';

const Osoblje = () => {

    const { data: radnici, error } = useFetch('http://localhost:8000/radnici');
    const [imePrezime, setIme] = useState('');
    const [Datum, setDatum] = useState('');
    const [JMBG, setJMBG] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        //e.preventDefault();
        const radnik = { imePrezime, Datum, JMBG };

        fetch('http://localhost:8000/radnici', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(radnik)
        }).then(() => {
            console.log("novi radnik dodat");
            
        });


    }

    return (
        <div className="osoblje">
            <h2>Prikaz naseg osoblja:</h2>
            {radnici && <TabelaOsoblja radnici = {radnici}></TabelaOsoblja>}
            <h2>Unos novog radnika:</h2>
            <form onSubmit={handleSubmit}>
                <label>Ime i prezime:</label>
                <input type="text" required value={imePrezime} onChange={(e) => setIme(e.target.value)}></input>
                <label>Datum zaposlenja:</label>
                <input type="text" required value={Datum} onChange={(e) => setDatum(e.target.value)}></input>
                <label>JMBG:</label>
                <input type="text" required value={JMBG} onChange={(e) => setJMBG(e.target.value)}></input>
                <button>Dodaj radnika</button>

            </form>

        </div>

    );
}

export default Osoblje;