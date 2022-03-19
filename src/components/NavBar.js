import { Link } from "react-router-dom";

const NavBar = ({ icon, quantity }) => {
  return (
    <nav className="sticky-top navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        August Fodds
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Features
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
        <span className="navbar-text">
          <Link to="/cart"><i className={icon}>
            <span className="badge badge-pill badge-warning">
              {quantity}
            </span>
          </i></Link>
        </span>
      </div>
    </nav>
  );
};

export default NavBar;
