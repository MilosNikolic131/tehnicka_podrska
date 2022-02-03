import React from "react";
import { useState, useEffect } from 'react';
import Button from "./Button";

const FormaZalbe = (props) => {

    const [data, setData] = useState(props.zalbe);
    const [error, setError] = useState(null);
    const [tipProblema, setTipProblema] = useState('');
    const [status, setStatus] = useState('');
    const [opis, setOpis] = useState('');
    const [id_radnika, setIdRadnika] = useState('');
    const [timer, setTimer] = useState(false);

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
    }, [timer]);

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
            if (timer) {
                setTimer(false);
            } else {
                setTimer(true);
            }
        });
    }

    const handleDelete = (props) => {
        const zalbaId = props;

        fetch('http://localhost:8000/zalbe/' + zalbaId, {
            method: 'DELETE'
        }).then(() => {
            console.log('OK');
            if (timer) {
                setTimer(false);
            } else {
                setTimer(true);
            }
        })
    }

    return (
        <div className="formazalbe">
            <h2>Prikaz zalbi:</h2>
            <table id="table">
                <thead>
                    <tr>
                        <th>Tip problema</th>
                        <th>Status</th>
                        <th>Opis</th>
                        <th>Id radnika</th>
                        <th>Id</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((zalba) => (
                        <tr>
                            <td>{zalba.tipProblema}</td>
                            <td>{zalba.status}</td>
                            <td>{zalba.opis}</td>
                            <td>{zalba.id_radnika}</td>
                            <td>{zalba.id}</td>
                            <td><Button onClick={() => handleDelete(zalba.id)} name="Obrisi"></Button></td>
                            {/* <td><button onClick={() => handleDelete(zalba.id)}>Obrisi</button></td> */}
                        </tr>

                    ))}

                </tbody>

            </table>
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
                {/* <button>Dodaj zalbu</button> */}
                <Button name="Dodaj zalbu"></Button>
            </form>
        </div>
    );
}

export default FormaZalbe;