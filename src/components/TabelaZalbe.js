import React from "react";

export const TabelaZalbe = (props) => {
    const zalbe = props.zalbe;

    const handleDelete = (props) => {
        const zalbaId = props;

        fetch('http://localhost:8000/zalbe/' + zalbaId, {
            method: 'DELETE'
        }).then(() => {
            console.log('OK');
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
                    {zalbe.map((zalba) => (

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