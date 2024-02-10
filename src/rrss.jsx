import React from 'react';
import ig from './media/ig.png';
import fb from './media/fb.png';
import tw from './media/tw.png';
import tk from './media/tk.png';
import wp from './media/wp.png';
import yt from './media/yt.png';

export default function RRSS({ color }) {
  const iconStyle = {
    width: '50px',
    margin: '10px',
    filter: color === 'blanco' ? 'invert(100%)' : 'none',
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={fb} alt="Facebook" style={iconStyle} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={ig} alt="Instagram" style={iconStyle} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={tw} alt="Twitter" style={iconStyle} />
      </a>
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
        <img src={tk} alt="TikTok" style={iconStyle} />
      </a>
      <a href="https://wa.me/telefono" target="_blank" rel="noopener noreferrer">
        <img src={wp} alt="WhatsApp" style={iconStyle} />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
        <img src={yt} alt="YouTube" style={iconStyle} />
      </a>
    </div>
  );
}
