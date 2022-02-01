import useFetch from '../useFetch';
import NajboljiRadniciList from './najboljiRadnici';

const Pocetna = () => {

    const { data: radnici, error } = useFetch('http://localhost:8000/radnici');

    return (
        <div className="pocetna">
            {error && <div>{error}</div>}
            {radnici && <NajboljiRadniciList radnici={radnici}  />}
        </div>
    );
}

export default Pocetna;