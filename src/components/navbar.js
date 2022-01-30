import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Meni</h1>
      <div className="links">
        <Link to="/">Pocetna</Link>
        <Link to="/Osoblje">Osoblje</Link>
        <Link to="/Zalbe" >Zalbe</Link>
      </div>
    </nav>
  );
}

export default Navbar;