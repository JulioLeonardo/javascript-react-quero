import React from 'react';

import logo from '../../assets/img/quero-logo.png';

import './styles.css';

function Header() {
  return (
    <header className="header">
      <div className="header-help">
        <div className="circle-icon">
          <i className="fas fa-info info-circle" />
        </div>
        <span className="header-mobile">Ajuda</span>
        <span className="header-desktop">Como funciona</span>
      </div>
      <div className="header-logo">
        <img src={logo} alt="Quero logo" />
      </div>
      <div className="header-account">
        <div>
          <div className="circle-icon user-icon">
            <i className="fas fa-user" />
          </div>
          <span className="header-account-text">Conta</span>
          <span className="header-account-user">Julio Leonardo Carvalho</span>
        </div>
      </div>
      <div className="navigation">
        <h3>Minha Conta</h3>
        <div className="menu">
          <button className="menu-btn">
            Menu <i className="fas fa-chevron-down" />
          </button>

          <ul className="dropdown">
            <li>
              <a href="#Menu">Pré-matriculas</a>
            </li>
            <li>
              <a href="#Menu">Bolsas favoritas</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="breadcrumbs">
        <i className="fas fa-chevron-left" />
        <a href="#menu">Minha Conta</a>
      </div>
    </header>
  );
}

export default Header;
