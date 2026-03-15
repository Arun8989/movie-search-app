import { Link } from "react-router-dom";
import backgroundImg from "../assets/background-img.png";

function Header() {
  return (
    <div className="header_section">
      <div className="container">
        <nav className="navbar">
          <h2 className="logo">Movies Search App</h2>
          <ul className="nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/hosting">Hosting</Link></li>
            <li><Link to="/testimonial">Testimonial</Link></li>
            <li><Link to="/domain">Domain</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div className="banner_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="banner_title">Movie And Entertainment</h1>
              <div className="read_bt">
                <Link to="">Read More</Link>
              </div>
            </div>
            <div className="tv-wrapper">
              <div className="tv-frame">
                <img src={backgroundImg} alt="Movies" />
              </div>
              <div className="tv-stand"></div>
              <div className="tv-base"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
