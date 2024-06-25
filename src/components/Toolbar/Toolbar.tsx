import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand d-flex text-center fs-3">
          <small>mega</small>
          <i className="bi bi-line"></i>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" aria-current="page" href="#">Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link" href="#">О нас</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contacts" className="nav-link" href="#">Контакты</NavLink>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Поиск" aria-label="Search"/>
            <NavLink to="search" className="btn btn-outline-success" type="submit">Поиск</NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Toolbar;