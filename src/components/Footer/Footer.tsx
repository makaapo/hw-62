import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top mt-auto">
        <div className="col-md-4 d-flex align-items-center">
          <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1 d-flex text-center">
            <small>mega</small>
            <i className="bi bi-line"></i>
          </NavLink>
          <span className="mb-3 mb-md-0 text-muted">© 2024 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://www.facebook.com/">
              <i className="bi bi-facebook fs-5"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.instagram.com/">
              <i className="bi bi-instagram fs-5"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://web.telegram.org/">
              <i className="bi bi-telegram fs-5"></i>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;