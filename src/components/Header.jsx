import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Job Tracker
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Track Your Job Applications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
             Manage and monitor all your job opportunities in one place.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
