import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [active, setActive] = useState(false);
  const changeActive = () => {
    setActive(!active);
  };
  return (
    <nav className="navbar navbar-expand-lg text-uppercase" id="mainNav">
      <div className="container">
        <Link to={"/"} id="navbar-brand" className="navbar-brand">
          Meu Benefício LOAS
        </Link>

        <button
          className={
            !active
              ? "navbar-toggler text-uppercase font-weight-bold text-white rounded collapsed"
              : "navbar-toggler text-uppercase font-weight-bold text-white rounded"
          }
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={changeActive}
        >
          Menu
          <i className="fas fa-bars"></i>
        </button>
        <div
          className={
            !active
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="navbarResponsive"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-0 mx-lg-1">
              <Link
                to={"/contacto"}
                className="nav-link py-3 px-0 px-lg-3 rounded"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
