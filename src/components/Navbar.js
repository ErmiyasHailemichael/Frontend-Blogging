import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
      <nav style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Link to="/">
          <h1>Home</h1>
        </Link>
        <Link to="/about">
          <h1>About</h1>
        </Link>
        <Link to="/contact">
          <h1>Contact</h1>
        </Link>
      </nav>
    );
  };

export default Navbar;