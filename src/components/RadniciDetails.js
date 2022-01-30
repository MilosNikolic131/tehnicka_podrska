import { useParams } from "react-router-dom";

const RadniciDetails = () => {
    const{id} = useParams();
    return ( 
        <div className="radnici-details">
            <h2>Radnici details - {id}</h2>
        </div>
     );
}
 
export default RadniciDetails;