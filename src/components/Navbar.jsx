import React from 'react';
import {MdOutlineHome} from 'react-icons/md';
import {LiaRedoAltSolid} from "react-icons/lia";

function Navbar(props) {
    return (
      <div className='k-navhelper mt-4'>
        <div className="k-nav">
          <div className="d-flex justify-content-around align-items-center">
              <div className="k-nav-page-title">
                <MdOutlineHome />
                <span>{props.pageName}</span>
                <LiaRedoAltSolid />
              </div>
          </div>
      </div>
      </div>
    );
}

export default Navbar;


/*
<nav className="navbar navbar-expand-lg navbar-dark k-nav k-blur mb-3">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 bg-transparent text-light" type="search" placeholder="Search" aria-label="Search" style={{border: "1px solid #fff", borderRadius: "60px"}} />
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
*/