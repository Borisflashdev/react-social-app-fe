import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./Footer.style.css";

function Footer() {
  return (
    <div className="card footer-card m-3">
      <div className="card-body">
        <p className="text-center footer-text">
          <a href="#">Help Center</a> | <a href="#">About</a> |{" "}
          <a href="#">Privacy Policy</a> <a href="#">Community Guidelines</a> |{" "}
          <a href="#">Cookies Policy</a> | <a href="#">Career</a> |{" "}
          <a href="#">Language</a> | <a href="#">Copyright Policy</a>
        </p>
        <div className="d-flex justify-content-between">
          <p className="logo mb-0">Connectify</p>
          <p className="cp mb-0">©️ Copyright 2023</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
