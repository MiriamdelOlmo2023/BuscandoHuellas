import React from 'react';
import './Footer.css';
import RRSS from './rrss.jsx';
import tit from './media/tit.png';
import huellas from './media/huellasFooterG.png';
import huellas2 from './media/huellasFooterG.R.png';

export default function Component() {
  return (
    <div id="bgFooter">
      <img src={tit} id="titFooter"/>
      <img src={huellas} id="huellasF" alt="huellas" />
      <img src={huellas2} id="huellasFR" alt="huellas" />
      <RRSS color="blanco" />
      <hr id="hrFooter"/>
      <p id="copy">Copyright © 2024 Buscando Huellas.</p>

    </div>
  );
}
