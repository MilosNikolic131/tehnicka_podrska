import React from "react";

export const TabelaV2 = (props) => {
    const radnici = props.radnici;

    const handleDelete = (props) => {
        const radnikID = props;

        fetch('http://localhost:8000/radnici/' + radnikID, {
            method: 'DELETE'
        }).then(() => {
            console.log('OK');
        })
    }
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
                    {radnici.map((radnik) => (

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