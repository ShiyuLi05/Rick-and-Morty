import React from 'react';
import img from '../img/404.png';

function NotFound() {
  return (
    <div>
      <figure>
        <img src={img} alt='404'/>
      </figure>
    </div>
  )
}

export default NotFound