import React from "react";
import { useState, useEffect } from 'react';
import Button from "./Button";
const Forma = (props) => {
    const [imePrezime, setIme] = useState('');
    const [DatumZaposlenja, setDatum] = useState('');
    const [JMBG, setJMBG] = useState('');

    const [data, setData] = useState(props.radnici);
    const [error, setError] = useState(null);

    const [click, setClick] = useState(false);

    const [displayError, setDisplayError] = useState(null);

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

    const validate = (JMBG) => {
        if (JMBG.length != 13) {
            return false;
        } else {
            return true;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const radnik = { imePrezime, DatumZaposlenja, JMBG };
        const isValid = validate(radnik.JMBG);
        if (isValid) {
            setDisplayError(null);

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
        } else {
            setDisplayError("JMBG mora imati 13 cifara!");
        }

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
            {error && <div>{error}</div>}
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
                            <td><Button onClick={() => handleDelete(radnik.id)} name="Obrisi"></Button></td>
                        </tr>

                    ))}

                </tbody>
            </table>
            <br></br>
            <h2>Unos novog radnika:</h2>
            {displayError && <p id="displayErr">{displayError}</p>}
            <form onSubmit={handleSubmit}>
                <label>Ime i prezime:</label>
                <input type="text" required value={imePrezime} onChange={(e) => setIme(e.target.value)}></input>
                <label>Datum zaposlenja:</label>
                <input type="text" required value={DatumZaposlenja} onChange={(e) => setDatum(e.target.value)}></input>
                <label>JMBG:</label>
                <input type="text" required value={JMBG} onChange={(e) => setJMBG(e.target.value)}></input>
                <Button name="Dodaj radnika"></Button>
            </form>
        </div>
    );
}

export default Forma;