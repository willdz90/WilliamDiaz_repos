import React from 'react';
import error404 from '../assets/error404.png';
import AshPika from '../assets/AshPika.png';
import '../styles/Error404.css';

export default function NotFound() {
    return (
      <div>
        <div className='errorContainer'>
          <img src={error404} alt="error404" className='errorText'/>
          <img src={AshPika} alt="Ashpika" className='ashpika'/>
        </div>
      </div>
    )
}
