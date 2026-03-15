function Footer() {
  return (
    <div className="footer_section">
      <div className="container">
        <div className="row">

          <div className="col-md-4">
            <h3>Useful Links</h3>
            <ul className="footer_menu">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Services</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4">
            <h3>Address</h3>
            <p>Chennai, Tamil Nadu</p>
            <p>Phone: +91 123456789</p>
            <p>Email: demo@gmail.com</p>
          </div>

          <div className="col-md-4">
            <h3>Follow Us</h3>
            <p>Facebook | Twitter | Instagram</p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Footer;