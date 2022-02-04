
import useFetch from './useFetch';
import NajboljiRadniciList from './najboljiRadnici';
import PoslednjeZalbeList from './poslednjeZalbe';

const Pocetna = () => {

    const { data: radnici, error } = useFetch('http://localhost:8000/radnici');
    const { data: zalbe, error: error2 } = useFetch('http://localhost:8000/zalbe');

    return (
        <div className="pocetna">
            {error && <div>{error}</div>}
            {error2 && <div>{error2}</div>}
            {zalbe && <PoslednjeZalbeList zalbe={zalbe} />}
            {radnici && <NajboljiRadniciList radnici={radnici} />}
        </div>
    );
}

export default Pocetna;