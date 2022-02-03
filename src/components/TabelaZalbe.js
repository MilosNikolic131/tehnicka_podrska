import React from "react";
import { useState, useEffect } from 'react';

export const TabelaZalbe = (props) => {

    const [click, setClick] = useState(false);
    const [data, setData] = useState(props.zalbe);
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
    }, [click]);

    const handleDelete = (props) => {
        const zalbaId = props;

        fetch('http://localhost:8000/zalbe/' + zalbaId, {
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

    return (
        <div className="TabelaZalbe">
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
                            <td><button onClick={() => handleDelete(zalba.id)}>Obrisi</button></td>
                        </tr>

                    ))}

                </tbody>

            </table>
        </div>

    );
};

export default TabelaZalbe;