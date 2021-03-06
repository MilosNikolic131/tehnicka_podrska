import React from "react";
import { useState,useEffect } from 'react';

export const TabelaV2 = (props) => {

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
        <div className="tabelav2">
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
        </div>
    );
};

export default TabelaV2;