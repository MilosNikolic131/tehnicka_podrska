const NajboljiRadniciList = (props) => {
    const radnici = props.radnici;
    const last = radnici.slice(-1);
    console.log(last);
    return (
        <div className="najradnici-list">
            <div className="radnik-preview" key={last[0].id}>
                <h4>Poslednji dodat radnik je {last[0].imePrezime}</h4>
                <p>sa JMBG-om:{last[0].JMBG}</p>
            </div>
            {/* {radnici.map((radnik) =>(
                <div className="radnik-preview" key = {radnik.id}>
                    <h4>{radnik.imePrezime}</h4>
                    <p>Cestitamo najboljem radniku {radnik.JMBG}</p>
                    </div>
            ))} */}
        </div>
    );
}

export default NajboljiRadniciList;