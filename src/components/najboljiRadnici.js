const NajboljiRadniciList = (props) => {
    const radnici = props.radnici;
    return ( 
        <div className="najradnici-list">
            {radnici.map((radnik) =>(
                <div className="radnik-preview" key = {radnik.id}>
                    <h4>{radnik.imePrezime}</h4>
                    <p>Cestitamo najboljem radniku {radnik.JMBG}</p>
                    </div>
            ))}
        </div>
     );
}
 
export default NajboljiRadniciList;