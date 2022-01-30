import useFetch from '../useFetch';
import NajboljiRadniciList from './najboljiRadnici';

const Pocetna = () => {
    //     const [name, setName] = useState('mario');
    //     const handleDugme = () => {
    //         setName('luigi');
    //     }
    // const [radnici, setRadnici] = useState(null);
    // const [error,setError] = useState(null);
    // const handleBrisanje = (id) => {
    //     const newRadnici = radnici.filter(radnik => radnik.id !== id);
    //     setRadnici(newRadnici);
    // }
    const { data: radnici, error } = useFetch('http://localhost:8000/radnici');

    return (
        <div className="pocetna">
            {error && <div>{error}</div>}
            {radnici && <NajboljiRadniciList radnici={radnici}  />}
            {/* <h2> Pocetna</h2>
            <p>{name}</p>
            <button onClick={handleDugme}>Dugme</button> */}
        </div>
    );
}

export default Pocetna;