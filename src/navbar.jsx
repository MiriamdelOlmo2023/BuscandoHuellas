import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from './media/logo.png';
import huellas from './media/huellas.png';
import './navbar.css';

const Navbar = () => {
  return (
    <AppBar position="fixed" className="position-fixed">
      <Toolbar id="Toolbar">
        <img src={logo} id="logo" alt="Logo" />
        <div id="divTitle">
          <h3>BUSCANDO HUELLAS</h3>
          <h4 id="titulo">Refugio de animales</h4>
        </div>
        {/* <img src={huellas} id="huellas" alt="Huellas" /> */}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
