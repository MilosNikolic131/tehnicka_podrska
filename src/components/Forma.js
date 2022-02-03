import React from "react";
import { useState, useEffect } from 'react';

const Forma = (props) => {
    const [imePrezime, setIme] = useState('');
    const [DatumZaposlenja, setDatum] = useState('');
    const [JMBG, setJMBG] = useState('');

    const [data, setData] = useState(props.radnici);
    const [error, setError] = useState(null);

    const [click, setClick] = useState(false);

    const handleDelete = (props) => {
        const radnikID = props;

        fetch('http://localhost:8000/radnici/' + radnikID, {
            method: 'DELETE'
        }).then(() => {
            console.log('OK');
            if (click) {
                setClick(false);
            } else {
                setClick(true);
            }
        })
    }

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
            if (click) {
                setClick(false);
            } else {
                setClick(true);
            }
        });
    }

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
    }, [click]);


    return (
        <div className="forma">
            <h2>Prikaz naseg osoblja:</h2>
            <table id="table">
                <thead>
                    <tr>
                        <th>Ime i prezime</th>
                        <th>Datum zaposlenja</th>
                        <th>JMBG</th>
                        <th>Id</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((radnik) => (

                        <tr>
                            <td>{radnik.imePrezime}</td>
                            <td>{radnik.DatumZaposlenja}</td>
                            <td>{radnik.JMBG}</td>
                            <td>{radnik.id}</td>
                            <td><button onClick={() => handleDelete(radnik.id)}>Obrisi</button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
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

export default Forma;