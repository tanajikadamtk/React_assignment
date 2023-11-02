import React from "react";
import logo from "../products/image/logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" bg-dark position-relative w-100 bottom-0 ">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top container-fluid">
          <div className="col-md-4 d-flex align-items-center">
            <Link
              to="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <img
                src={logo}
                alt="logo"
                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
              />
            </Link>
            <span className="text-muted">&copy; 2021 Company, Inc</span>
          </div>

          <ul className="nav col-md-4 justify-content-end">
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-muted">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-muted">
                Features
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-muted">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-muted">
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link px-2 text-muted">
                About
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}

export default Footer;
